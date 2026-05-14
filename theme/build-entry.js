const { renderToString } = require('react-dom/server');
const { ServerStyleSheet } = require('styled-components');
const Resume = require('./src/Resume').default;

function render(resume) {
  const sheet = new ServerStyleSheet();
  const html = renderToString(sheet.collectStyles(React.createElement(Resume, { resume })));
  const styles = sheet.getStyleTags();
  const title = (resume.basics && resume.basics.name) || 'Resume';

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>${title}</title>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600;700&family=Inter:wght@400;500;600&display=swap" rel="stylesheet">
  ${styles}
</head>
<body>${html}</body>
</html>`;
}

module.exports = { render };
