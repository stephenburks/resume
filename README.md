# Stephen Burks - Resume

A modern, self-hosted resume built with React and styled-components, deployed via GitHub Pages.

## ✨ Features

- 🌓 **Working Dark Mode** - Instant theme switching with localStorage persistence
- 📱 **Responsive Design** - Looks great on all devices
- 🎨 **Modern UI** - Clean, professional design with JetBrains Mono font
- 🚀 **Fast Performance** - Optimized with React memoization
- 🔒 **Secure** - No XSS vulnerabilities, safe content rendering
- 📄 **JSON Resume Standard** - Uses the official JSON Resume schema
- 🤖 **Auto-Deploy** - GitHub Actions automatically builds and deploys

## 🎯 Recent Improvements (May 2026)

### Fixed Dark Mode

The dark mode toggle was completely broken and has been fixed:

- ✅ Instant theme switching (no page reload)
- ✅ Theme persists across sessions
- ✅ Respects system dark mode preference
- ✅ Smooth transitions

### Applied React Best Practices

- ✅ Proper React hooks (`useState`, `useEffect`, `useCallback`)
- ✅ Component memoization for better performance
- ✅ Modern ES6+ syntax
- ✅ Removed security vulnerabilities
- ✅ Functional state updates

See [CHANGES_SUMMARY.md](CHANGES_SUMMARY.md) for detailed changes.

## 🏗️ Project Structure

```
resume/
├── .github/workflows/
│   └── deploy.yml          # GitHub Actions deployment
├── packages/
│   └── resume-core/        # Core resume components
│       └── index.js
├── theme/
│   ├── src/
│   │   ├── Resume.jsx      # Main resume component
│   │   ├── ThemeToggle.jsx # Dark mode toggle
│   │   ├── theme.js        # Theme definitions
│   │   └── useTheme.js     # Theme hook
│   ├── build-entry.js      # Build entry point
│   └── dist/               # Built files
├── resume.json             # Your resume data
└── package.json
```

## 🚀 Quick Start

### Prerequisites

- Node.js 20+
- npm

### Local Development

1. **Clone the repository**

    ```bash
    git clone https://github.com/yourusername/resume.git
    cd resume
    ```

2. **Install dependencies**

    ```bash
    npm install
    ```

3. **Build the theme**

    ```bash
    npx esbuild theme/build-entry.js \
      --outfile=theme/dist/index.js \
      --bundle \
      --platform=node \
      --external:@resume/core \
      --format=cjs
    ```

4. **Generate HTML**

    ```bash
    npm install -g resume-cli
    resume export resume.html --theme ./theme
    ```

5. **View locally** Open `resume.html` in your browser

### Deploy to GitHub Pages

1. **Enable GitHub Pages**
    - Go to repository Settings → Pages
    - Source: GitHub Actions

2. **Push to main**

    ```bash
    git add .
    git commit -m "Update resume"
    git push origin main
    ```

3. **View your resume**
    - Your resume will be live at: `https://yourusername.github.io/resume/`

## 📝 Editing Your Resume

Edit `resume.json` following the [JSON Resume schema](https://jsonresume.org/schema/):

```json
{
  "basics": {
    "name": "Your Name",
    "label": "Your Title",
    "email": "you@email.com",
    "summary": "Brief summary about you..."
  },
  "work": [...],
  "education": [...],
  "skills": [...]
}
```

Push changes to main, and GitHub Actions will automatically rebuild and deploy.

## 🎨 Customizing the Theme

### Colors

Edit `theme/src/theme.js`:

```javascript
const light = {
	background: '#ffffff',
	text: '#1f2937',
	accent: '#2563eb',
	// ... more colors
};

const dark = {
	background: '#111827',
	text: '#f9fafb',
	accent: '#60a5fa',
	// ... more colors
};
```

### Fonts

Edit `theme/build-entry.js` to change the Google Fonts import.

### Layout

Edit `theme/src/Resume.jsx` to modify the structure and styling.

## 🧪 Testing

### Test Dark Mode

1. Click the sun/moon icon
2. Theme should switch instantly
3. Refresh - theme should persist

### Test Build

```bash
npm install
npx esbuild theme/build-entry.js \
  --outfile=theme/dist/index.js \
  --bundle \
  --platform=node \
  --external:@resume/core \
  --format=cjs
```

Should output: `✅ Done in Xms`

## 📦 Tech Stack

- **React 18** - UI library
- **styled-components 6** - CSS-in-JS styling
- **esbuild** - Fast bundler
- **resume-cli** - JSON Resume tooling
- **GitHub Actions** - CI/CD
- **GitHub Pages** - Hosting

## 🔧 Troubleshooting

### Dark mode not working?

- Clear browser cache and localStorage
- Check browser console for errors
- Verify `theme/dist/index.js` was built

### Build fails?

- Run `npm install` to ensure dependencies are installed
- Check Node.js version (needs 20+)
- Verify all files are committed

### Theme not persisting?

- Check if localStorage is enabled in browser
- Try in incognito mode to test
- Check browser console for storage errors

## 📚 Resources

- [JSON Resume Schema](https://jsonresume.org/schema/)
- [React Documentation](https://react.dev/)
- [styled-components Docs](https://styled-components.com/)
- [GitHub Pages Docs](https://docs.github.com/en/pages)

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Feel free to fork this project and customize it for your own resume!

---

**Built with ❤️ using React and styled-components**

Last updated: May 14, 2026
