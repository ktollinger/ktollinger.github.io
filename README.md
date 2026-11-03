# Kamil Tollinger – Web CV

Zdrojový kód osobního webového životopisu dostupného online na adrese:
👉 **[https://ktollinger.github.io/](https://ktollinger.github.io/)**

## Technologie

* **Generátor:** [Eleventy (11ty)](https://www.11ty.dev/) – lehký SSG bez runtime klientského JS balastu
* **Šablonovací jazyk:** Liquid + Markdown
* **Deployment:** Nativní [GitHub Pages](https://pages.github.com/) přes oficiální GitHub Actions (`actions/deploy-pages@v4`)
* **Styling:** CSS s podporou Light / Dark módu a print stylů pro tisk

## Vývoj

### Požadavky
* Node.js 20+

### Instalace závislostí
```bash
npm install
```

### Lokální vývojový server
Spustí lokální server na `http://localhost:8888` s automatickým reloadem při změně souborů:
```bash
npm start
```

### Sestavení produkční verze
Vygeneruje statický web do adresáře `_site/`:
```bash
npm run build
```

### Generování PDF verze
```bash
npm run generate-pdf
```

## Deployment

Nasazování probíhá automaticky při každém pushi do větve `main` přes workflow `.github/workflows/eleventy.yml`. GitHub Action sestaví web a publikuje výsledný artefakt přímo do CDN GitHub Pages.
