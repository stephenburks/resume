const light = {
	'--background': '#ffffff',
	'--card-bg': '#f9fafb',
	'--card-bg-hover': '#eff6ff',
	'--text': '#1f2937',
	'--text-secondary': '#374151',
	'--text-tertiary': '#4b5563',
	'--muted': '#6b7280',
	'--accent': '#2563eb',
	'--border': '#e5e7eb',
	'--border-hover': '#2563eb',
	'--header-border': '#2563eb',
	'--section-title-border': '#e5e7eb',
	'--toggle-bg': '#f3f4f6',
	'--toggle-icon': '#374151',
	'--tooltip-bg': '#1f2937',
	'--tooltip-text': '#f9fafb',
};

const dark = {
	'--background': '#111827',
	'--card-bg': '#1f2937',
	'--card-bg-hover': '#1e3a5f',
	'--text': '#f9fafb',
	'--text-secondary': '#e5e7eb',
	'--text-tertiary': '#d1d5db',
	'--muted': '#9ca3af',
	'--accent': '#60a5fa',
	'--border': '#374151',
	'--border-hover': '#60a5fa',
	'--header-border': '#60a5fa',
	'--section-title-border': '#374151',
	'--toggle-bg': '#1f2937',
	'--toggle-icon': '#d1d5db',
	'--tooltip-bg': '#f9fafb',
	'--tooltip-text': '#1f2937',
};

function buildThemeCss(themeObj) {
	return Object.entries(themeObj)
		.map(([key, value]) => `    ${key}: ${value};`)
		.join('\n');
}

module.exports = { light, dark, buildThemeCss };
