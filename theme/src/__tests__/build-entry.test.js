const { transformSync } = require('esbuild');
const Module = require('module');
const fs = require('fs');

Module._extensions['.jsx'] = function (mod, filename) {
	const content = fs.readFileSync(filename, 'utf8');
	const result = transformSync(content, {
		loader: 'jsx',
		format: 'cjs',
	});
	return mod._compile(result.code, filename);
};

const { describe, it } = require('node:test');
const assert = require('node:assert/strict');
const path = require('node:path');
const { render } = require('../../build-entry');

const resume = JSON.parse(fs.readFileSync(path.join(__dirname, '../../../resume.json'), 'utf8'));

describe('render', () => {
	it('produces valid HTML with DOCTYPE', () => {
		const html = render(resume);
		assert.ok(html.startsWith('<!DOCTYPE html>'));
		assert.ok(html.includes('<html'));
		assert.ok(html.includes('</html>'));
	});

	it('escapes the title to prevent XSS', () => {
		const malicious = {
			...resume,
			basics: { ...resume.basics, name: '<script>alert(1)</script>' },
		};
		const html = render(malicious);
		assert.ok(html.includes('&lt;script&gt;'));
		assert.ok(!html.includes('<script>alert(1)</script>'));
	});

	it('contains expected sections', () => {
		const html = render(resume);
		assert.ok(html.includes('Experience'));
		assert.ok(html.includes('Skills'));
		assert.ok(html.includes('Education'));
	});
});
