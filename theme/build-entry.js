const React = require('react');
const { renderToString } = require('react-dom/server');
const { ServerStyleSheet, ThemeProvider } = require('styled-components');
const Resume = require('./src/Resume');
const { getInitialTheme } = require('./src/useTheme');
const { light, dark } = require('./src/theme');

function escapeHtml(str) {
	return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#x27;');
}

// Inline script to prevent flash of unstyled content (FOUC)
// This runs before React hydrates to set the initial theme
const noFlashScript = `(function(){
  try {
    var stored = localStorage.getItem('resume-theme');
    var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    var theme = stored === 'dark' || stored === 'light' ? stored : (prefersDark ? 'dark' : 'light');
    document.documentElement.setAttribute('data-theme', theme);
  } catch (e) {
    document.documentElement.setAttribute('data-theme', 'light');
  }
})();`;

function render(resume) {
	const theme = getInitialTheme();
	const themeObj = theme === 'dark' ? dark : light;
	const sheet = new ServerStyleSheet();

	const html = renderToString(sheet.collectStyles(React.createElement(ThemeProvider, { theme: themeObj }, React.createElement(Resume, { resume }))));

	const styles = sheet.getStyleTags();
	const title = escapeHtml((resume.basics && resume.basics.name) || 'Resume');

	return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>${title}</title>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600;700&family=Inter:wght@400;500;600&display=swap" rel="stylesheet">
  <script>${noFlashScript}</script>
  ${styles}
</head>
<body>
${html}
</body>
</html>`;
}

module.exports = { render };
