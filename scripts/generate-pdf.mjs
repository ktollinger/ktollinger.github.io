import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { execFile, spawnSync } from 'node:child_process';
import { promisify } from 'node:util';

const execFileAsync = promisify(execFile);

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const webcvRoot = path.resolve(__dirname, '..');
const siteDir = path.resolve(webcvRoot, '_site');
const assetsPdfDir = path.resolve(webcvRoot, 'src/_assets/pdf');
const cvRepoDir = path.resolve(webcvRoot, '../cv');

const CHROME_PATH = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';

if (!fs.existsSync(CHROME_PATH)) {
  console.error(`Error: Google Chrome not found at ${CHROME_PATH}`);
  process.exit(1);
}

// 1. Build Eleventy site first
console.log('Building Eleventy site...');
const buildResult = spawnSync('npx', ['@11ty/eleventy'], {
  cwd: webcvRoot,
  stdio: 'inherit',
});
if (buildResult.status !== 0) {
  console.error('Eleventy build failed.');
  process.exit(buildResult.status || 1);
}

fs.mkdirSync(assetsPdfDir, { recursive: true });

// 2. Start static HTTP server for _site
const mimeTypes = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.png': 'image/png',
  '.pdf': 'application/pdf',
  '.woff2': 'font/woff2',
  '.woff': 'font/woff',
  '.ttf': 'font/ttf',
};

const server = http.createServer((req, res) => {
  let decodedUrl = decodeURI(req.url.split('?')[0]);
  if (decodedUrl.endsWith('/')) {
    decodedUrl += 'index.html';
  }
  let filePath = path.join(siteDir, decodedUrl);

  if (fs.existsSync(filePath) && fs.statSync(filePath).isDirectory()) {
    filePath = path.join(filePath, 'index.html');
  }

  if (!fs.existsSync(filePath)) {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
    return;
  }

  const ext = path.extname(filePath).toLowerCase();
  const contentType = mimeTypes[ext] || 'application/octet-stream';

  res.writeHead(200, { 'Content-Type': contentType });
  fs.createReadStream(filePath).pipe(res);
});

server.listen(0, '127.0.0.1', async () => {
  const port = server.address().port;
  console.log(`Ephemeral server listening on http://127.0.0.1:${port}`);

  const targets = [
    {
      name: 'Czech CV',
      url: `http://127.0.0.1:${port}/index.html`,
      pdfName: 'Kamil_Tollinger_CV_CS.pdf',
      cvTargetName: 'Kamil Tollinger - CS.pdf',
    },
    {
      name: 'English CV',
      url: `http://127.0.0.1:${port}/en/index.html`,
      pdfName: 'Kamil_Tollinger_CV_EN.pdf',
      cvTargetName: 'Kamil Tollinger - EN.pdf',
    },
  ];

  try {
    for (const target of targets) {
      console.log(`Generating ${target.name} (${target.pdfName})...`);
      const targetPdfPath = path.join(assetsPdfDir, target.pdfName);

      await execFileAsync(CHROME_PATH, [
        '--headless=new',
        '--disable-gpu',
        '--no-pdf-header-footer',
        `--print-to-pdf=${targetPdfPath}`,
        target.url,
      ]);

      console.log(`  -> Saved to src/_assets/pdf/${target.pdfName}`);

      // Also copy to cv repo if present
      if (fs.existsSync(cvRepoDir)) {
        const cvTargetPath = path.join(cvRepoDir, target.cvTargetName);
        fs.copyFileSync(targetPdfPath, cvTargetPath);
        console.log(`  -> Synced to ~/repos/cv/${target.cvTargetName}`);
      }

      // Also sync to _site/pdf
      const sitePdfDir = path.join(siteDir, 'pdf');
      fs.mkdirSync(sitePdfDir, { recursive: true });
      fs.copyFileSync(targetPdfPath, path.join(sitePdfDir, target.pdfName));
    }

    console.log('\nPDF generation and synchronization complete!');
  } catch (err) {
    console.error('Error during PDF generation:', err);
    process.exitCode = 1;
  } finally {
    server.close();
  }
});
