const React = require('react');

const SVG_PROPS = {
	width: '20',
	height: '20',
	viewBox: '0 0 24 24',
	fill: 'none',
	stroke: 'currentColor',
	strokeWidth: '2',
	strokeLinecap: 'round',
	strokeLinejoin: 'round',
};

const SUN_ELEMENTS = [
	React.createElement('circle', { key: 'c', cx: '12', cy: '12', r: '5' }),
	React.createElement('line', { key: 'l1', x1: '12', y1: '1', x2: '12', y2: '3' }),
	React.createElement('line', { key: 'l2', x1: '12', y1: '21', x2: '12', y2: '23' }),
	React.createElement('line', { key: 'l3', x1: '4.22', y1: '4.22', x2: '5.64', y2: '5.64' }),
	React.createElement('line', { key: 'l4', x1: '18.36', y1: '18.36', x2: '19.78', y2: '19.78' }),
	React.createElement('line', { key: 'l5', x1: '1', y1: '12', x2: '3', y2: '12' }),
	React.createElement('line', { key: 'l6', x1: '21', y1: '12', x2: '23', y2: '12' }),
	React.createElement('line', { key: 'l7', x1: '4.22', y1: '19.78', x2: '5.64', y2: '18.36' }),
	React.createElement('line', { key: 'l8', x1: '18.36', y1: '5.64', x2: '19.78', y2: '4.22' }),
];

const MOON_ELEMENT = React.createElement('path', {
	d: 'M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z',
});

function ThemeToggle() {
	return React.createElement(
		'div',
		{
			style: {
				position: 'absolute',
				top: '16px',
				right: '0',
			},
		},
		React.createElement(
			'button',
			{
				onclick: 'window.toggleResumeTheme()',
				'aria-label': 'Toggle dark mode',
				title: 'Toggle dark mode',
				style: {
					background: 'transparent',
					border: 'none',
					cursor: 'pointer',
					padding: '8px',
					borderRadius: '50%',
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
					transition: 'color 0.2s ease',
					position: 'relative',
					color: 'var(--toggle-icon)',
				},
			},
			React.createElement(
				'span',
				{ className: 'theme-toggle-light' },
				React.createElement('svg', SVG_PROPS, ...SUN_ELEMENTS),
			),
			React.createElement(
				'span',
				{ className: 'theme-toggle-dark' },
				React.createElement('svg', SVG_PROPS, MOON_ELEMENT),
			),
		),
	);
}

module.exports = ThemeToggle;
