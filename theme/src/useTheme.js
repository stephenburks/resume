const STORAGE_KEY = 'resume-theme';

function getInitialTheme() {
  if (typeof document === 'undefined') return 'light';
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === 'dark' || stored === 'light') return stored;
  } catch (e) {}
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) return 'dark';
  return 'light';
}

function setTheme(theme) {
  try {
    localStorage.setItem(STORAGE_KEY, theme);
  } catch (e) {}
  document.documentElement.setAttribute('data-theme', theme);
}

function useTheme() {
  var current = getInitialTheme();

  function toggle() {
    var next = current === 'light' ? 'dark' : 'light';
    current = next;
    setTheme(next);
    window.__resumeTheme = next;
  }

  return { theme: current, toggle: toggle };
}

module.exports = { useTheme, getInitialTheme, setTheme, STORAGE_KEY };
