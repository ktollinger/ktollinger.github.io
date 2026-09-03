(function () {
  var STORAGE_KEY = 'cv-theme';
  var root = document.documentElement;
  var toggle = document.getElementById('theme-toggle');

  function getPreferredTheme() {
    var stored = localStorage.getItem(STORAGE_KEY);
    if (stored) return stored;
    return window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light';
  }

  function applyTheme(theme) {
    root.setAttribute('data-theme', theme);
    localStorage.setItem(STORAGE_KEY, theme);
    toggle.querySelectorAll('[data-theme-option]').forEach(function (opt) {
      opt.classList.toggle(
        'toggle__option--active',
        opt.dataset.themeOption === theme
      );
    });
  }

  applyTheme(getPreferredTheme());

  toggle.addEventListener('click', function () {
    var current = root.getAttribute('data-theme');
    applyTheme(current === 'dark' ? 'light' : 'dark');
  });

  window
    .matchMedia('(prefers-color-scheme: dark)')
    .addEventListener('change', function (e) {
      if (!localStorage.getItem(STORAGE_KEY)) {
        applyTheme(e.matches ? 'dark' : 'light');
      }
    });
})();
