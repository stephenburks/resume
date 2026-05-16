const { describe, it } = require('node:test');
const assert = require('node:assert/strict');
const { light, dark, buildThemeCss } = require('../theme');

const expectedVars = [
	'--background',
	'--card-bg',
	'--card-bg-hover',
	'--text',
	'--text-secondary',
	'--text-tertiary',
	'--muted',
	'--accent',
	'--border',
	'--border-hover',
	'--header-border',
	'--section-title-border',
	'--toggle-bg',
	'--toggle-icon',
	'--tooltip-bg',
	'--tooltip-text',
];

describe('theme', () => {
	it('light has all expected CSS variables', () => {
		for (const cssVar of expectedVars) {
			assert.ok(cssVar in light, `light missing CSS variable: ${cssVar}`);
		}
	});

	it('dark has all expected CSS variables', () => {
		for (const cssVar of expectedVars) {
			assert.ok(cssVar in dark, `dark missing CSS variable: ${cssVar}`);
		}
	});

	it('light values are hex colors', () => {
		const hexRe = /^#[0-9a-fA-F]{6}$/;
		for (const cssVar of expectedVars) {
			assert.match(light[cssVar], hexRe, `light.${cssVar} is not a hex color`);
		}
	});

	it('dark values are hex colors', () => {
		const hexRe = /^#[0-9a-fA-F]{6}$/;
		for (const cssVar of expectedVars) {
			assert.match(dark[cssVar], hexRe, `dark.${cssVar} is not a hex color`);
		}
	});

	it('buildThemeCss produces valid CSS', () => {
		const css = buildThemeCss(light);
		for (const cssVar of expectedVars) {
			assert.ok(css.includes(`${cssVar}:`), `CSS output missing ${cssVar}`);
		}
	});
});
