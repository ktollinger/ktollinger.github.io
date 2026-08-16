document.getElementById('print-btn').addEventListener('click', function () {
  var lang = document.documentElement.lang;
  var isCS = lang === 'cs';

  var choice = confirm(
    isCS
      ? 'Kompaktní verze (1 strana)?\n\nOK = kompaktní, Zrušit = plná verze'
      : 'Compact version (1 page)?\n\nOK = compact, Cancel = full version'
  );

  if (choice) {
    document.documentElement.classList.add('print-compact');
  } else {
    document.documentElement.classList.remove('print-compact');
  }

  window.print();
});
