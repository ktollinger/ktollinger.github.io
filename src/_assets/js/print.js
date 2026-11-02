var printBtn = document.getElementById('print-btn');
var printDialog = document.getElementById('print-dialog');

if (printBtn && printDialog) {
  printBtn.addEventListener('click', function () {
    printDialog.showModal();
  });

  // Close when clicking outside the dialog content (backdrop)
  printDialog.addEventListener('click', function (e) {
    if (e.target === printDialog) {
      printDialog.close('cancel');
    }
  });

  // Auto-close dialog after triggering PDF download
  var downloadLinks = printDialog.querySelectorAll('.btn-download-pdf');
  downloadLinks.forEach(function (link) {
    link.addEventListener('click', function () {
      setTimeout(function () {
        printDialog.close('download');
      }, 300);
    });
  });

  printDialog.addEventListener('close', function () {
    var choice = this.returnValue;

    if (choice === 'cancel' || choice === 'download' || choice === '') {
      return;
    }

    if (choice === 'compact') {
      document.documentElement.classList.add('print-compact');
    } else {
      document.documentElement.classList.remove('print-compact');
    }

    setTimeout(function () {
      window.print();
    }, 100);
  });
}
