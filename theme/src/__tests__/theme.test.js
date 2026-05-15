const { describe, it } = require('node:test');
const assert = require('node:assert/strict');
const { light, dark } = require('../theme');

const expectedKeys = [
	'background',
	'cardBg',
	'cardBgHover',
	'text',
	'textSecondary',
	'textTertiary',
	'muted',
	'accent',
	'border',
	'borderHover',
	'headerBorder',
	'sectionTitleBorder',
	'toggleBg',
	'toggleIcon',
	'tooltipBg',
	'tooltipText',
];

describe('theme', () => {
	it('light has all expected keys', () => {
		for (const key of expectedKeys) {
			assert.ok(key in light, `light missing key: ${key}`);
		}
	});

	it('dark has all expected keys', () => {
		for (const key of expectedKeys) {
			assert.ok(key in dark, `dark missing key: ${key}`);
		}
	});

	it('light values are hex colors', () => {
		const hexRe = /^#[0-9a-fA-F]{6}$/;
		for (const key of expectedKeys) {
			assert.match(light[key], hexRe, `light.${key} is not a hex color`);
		}
	});

	it('dark values are hex colors', () => {
		const hexRe = /^#[0-9a-fA-F]{6}$/;
		for (const key of expectedKeys) {
			assert.match(dark[key], hexRe, `dark.${key} is not a hex color`);
		}
	});
});
