document.getElementById('print-btn').addEventListener('click', function () {
  var dialog = document.getElementById('print-dialog');
  dialog.showModal();
});

document.getElementById('print-dialog').addEventListener('close', function () {
  var choice = this.returnValue;

  if (choice === 'cancel' || choice === '') {
    return;
  }

  if (choice === 'compact') {
    document.documentElement.classList.add('print-compact');
  } else {
    document.documentElement.classList.remove('print-compact');
  }

  setTimeout(function() {
    window.print();
  }, 100);
});
