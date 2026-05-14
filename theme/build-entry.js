const React = require('react');
const { renderToString } = require('react-dom/server');
const { ServerStyleSheet } = require('styled-components');
const { ThemeProvider } = require('styled-components');
const Resume = require('./src/Resume');
const { getInitialTheme } = require('./src/useTheme');
const { light, dark } = require('./src/theme');

var noFlashScript = '(function(){var t=localStorage.getItem("resume-theme");var d=t==="dark"||(!t&&window.matchMedia("(prefers-color-scheme:dark)").matches);document.documentElement.setAttribute("data-theme",d?"dark":"light");window.__resumeTheme=d?"dark":"light"})();';

var toggleScript = '(function(){function toggle(){var c=localStorage.getItem("resume-theme");var n=c==="dark"?"light":"dark";localStorage.setItem("resume-theme",n);location.reload()}window.__resumeThemeToggle=toggle;document.addEventListener("DOMContentLoaded",function(){var btns=document.querySelectorAll("[data-theme-toggle]");btns.forEach(function(b){b.addEventListener("click",function(e){e.preventDefault();toggle()})})})})();';

function render(resume) {
  var theme = getInitialTheme();
  var themeObj = theme === 'dark' ? dark : light;
  var sheet = new ServerStyleSheet();
  var html = renderToString(
    sheet.collectStyles(
      React.createElement(ThemeProvider, { theme: themeObj },
        React.createElement(Resume, { resume: resume })
      )
    )
  );
  var styles = sheet.getStyleTags();
  var title = (resume.basics && resume.basics.name) || 'Resume';

  return '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="utf-8">\n  <title>' + title + '</title>\n  <meta name="viewport" content="width=device-width, initial-scale=1">\n  <link rel="preconnect" href="https://fonts.googleapis.com">\n  <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600;700&family=Inter:wght@400;500;600&display=swap" rel="stylesheet">\n  <script>' + noFlashScript + '<\/script>\n  ' + styles + '\n</head>\n<body>\n<script>' + toggleScript + '<\/script>\n' + html + '\n</body>\n</html>';
}

module.exports = { render };
