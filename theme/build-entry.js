const React = require('react');
const { renderToString } = require('react-dom/server');
const { ServerStyleSheet } = require('styled-components');
const Resume = require('./src/Resume');
const { getInitialTheme } = require('./src/useTheme');
const { light, dark, buildThemeCss } = require('./src/theme');

function escapeHtml(str) {
	return str
		.replace(/&/g, '&amp;')
		.replace(/</g, '&lt;')
		.replace(/>/g, '&gt;')
		.replace(/"/g, '&quot;')
		.replace(/'/g, '&#x27;');
}

const themeScript = `(function(){
  function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    try { localStorage.setItem('resume-theme', theme); } catch(e) {}
  }
  function getTheme() {
    try {
      var stored = localStorage.getItem('resume-theme');
      if (stored === 'dark' || stored === 'light') return stored;
    } catch(e) {}
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) return 'dark';
    return 'light';
  }
  window.toggleResumeTheme = function() {
    setTheme(getTheme() === 'dark' ? 'light' : 'dark');
  };
  setTheme(getTheme());
})();`;

function render(resume) {
	const theme = getInitialTheme();
	const themeObj = theme === 'dark' ? dark : light;
	const sheet = new ServerStyleSheet();

	const html = renderToString(sheet.collectStyles(React.createElement(Resume, { resume })));

	const styles = sheet.getStyleTags();
	const title = escapeHtml((resume.basics && resume.basics.name) || 'Resume');

	const lightVars = buildThemeCss(light);
	const darkVars = buildThemeCss(dark);

	return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>${title}</title>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600;700&family=Inter:wght@400;500;600&display=swap" rel="stylesheet">
  <style>
    :root {
${lightVars}
    }
    [data-theme="dark"] {
${darkVars}
    }
  </style>
  <script>${themeScript}</script>
  ${styles}
</head>
<body>
${html}
</body>
</html>`;
}

module.exports = { render };
