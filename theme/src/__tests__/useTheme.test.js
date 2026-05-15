const { describe, it } = require('node:test');
const assert = require('node:assert/strict');
const { getInitialTheme } = require('../useTheme');

describe('getInitialTheme', () => {
	it('returns "light" when document/window are unavailable', () => {
		assert.equal(getInitialTheme(), 'light');
	});
});
