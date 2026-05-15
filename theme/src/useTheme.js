const React = require('react');

const STORAGE_KEY = 'resume-theme';

function getInitialTheme() {
	// fallow-ignore-next-line complexity
	if (typeof document === 'undefined') return 'light';
	try {
		const stored = localStorage.getItem(STORAGE_KEY);
		if (stored === 'dark' || stored === 'light') return stored;
	} catch (e) {
		// Silently fail if localStorage is unavailable
	}
	if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
		return 'dark';
	}
	return 'light';
}

function setTheme(theme) {
	try {
		localStorage.setItem(STORAGE_KEY, theme);
	} catch (e) {
		// Silently fail if localStorage is unavailable
	}
	if (typeof document !== 'undefined') {
		document.documentElement.setAttribute('data-theme', theme);
	}
}

function useTheme() {
	const [theme, setThemeState] = React.useState(() => getInitialTheme());

	// Sync theme to DOM and localStorage when it changes
	React.useEffect(() => {
		setTheme(theme);
	}, [theme]);

	const toggle = React.useCallback(() => {
		setThemeState((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
	}, []);

	return { theme, toggle };
}

module.exports = { useTheme, getInitialTheme };
