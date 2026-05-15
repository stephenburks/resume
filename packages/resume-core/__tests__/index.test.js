const { describe, it } = require('node:test');
const assert = require('node:assert/strict');
const { Section, SectionTitle, DateRange, ContactInfo, Link } = require('..');

describe('DateRange', () => {
	it('renders with both startDate and endDate', () => {
		const el = DateRange.type({ startDate: '2020-01', endDate: '2022-12' });
		assert.equal(el.type, 'span');
		assert.equal(el.props.children, '2020-01 — 2022-12');
	});

	it('renders "Present" when endDate is omitted', () => {
		const el = DateRange.type({ startDate: '2023-06' });
		assert.equal(el.props.children, '2023-06 — Present');
	});

	it('renders " — Present" when no dates are provided', () => {
		const el = DateRange.type({});
		assert.equal(el.props.children, ' — Present');
	});
});

describe('ContactInfo', () => {
	it('renders email only', () => {
		const el = ContactInfo.type({ basics: { email: 'a@b.com' } });
		assert.equal(el.type, 'div');
		const children = [].concat(el.props.children).filter(Boolean);
		const anchors = children.filter((c) => c && c.type === 'a');
		assert.equal(anchors.length, 1);
		assert.equal(anchors[0].props.href, 'mailto:a@b.com');
	});

	it('renders all contact fields', () => {
		const basics = {
			email: 'a@b.com',
			phone: '555-1234',
			url: 'https://example.com',
			location: { city: 'Portland', region: 'Oregon', countryCode: 'US' },
		};
		const el = ContactInfo.type({ basics });
		const children = el.props.children.filter(Boolean);
		const anchors = children.filter((c) => c && c.type === 'a');
		assert.ok(anchors.some((a) => a.props.href === 'mailto:a@b.com'));
		assert.ok(anchors.some((a) => a.props.href === 'https://example.com'));
		const spans = children.filter((c) => c && c.type === 'span');
		assert.ok(spans.some((s) => s.props.children === 'Portland, Oregon, US'));
	});

	it('renders profiles as links', () => {
		const basics = {
			email: 'a@b.com',
			profiles: [{ network: 'GitHub', url: 'https://github.com/example' }],
		};
		const el = ContactInfo.type({ basics });
		const children = el.props.children.filter(Boolean);
		const anchors = children.filter((c) => c && c.type === 'a');
		assert.ok(anchors.some((a) => a.props.href === 'https://github.com/example'));
	});

	it('renders location as text', () => {
		const basics = {
			location: { city: 'Portland', region: 'Oregon', countryCode: 'US' },
		};
		const el = ContactInfo.type({ basics });
		const children = [].concat(el.props.children).filter(Boolean);
		const spans = children.filter((c) => c && c.type === 'span');
		assert.ok(spans.some((s) => s.props.children === 'Portland, Oregon, US'));
	});
});

describe('Link', () => {
	it('renders an anchor tag with href', () => {
		const el = Link.type({ href: 'https://example.com', children: 'Example' });
		assert.equal(el.type, 'a');
		assert.equal(el.props.href, 'https://example.com');
		assert.equal(el.props.children, 'Example');
	});
});

describe('Section', () => {
	it('renders a section element', () => {
		const el = Section.type({ children: 'hello' });
		assert.equal(el.type, 'section');
		assert.equal(el.props.children, 'hello');
	});
});

describe('SectionTitle', () => {
	it('renders an h2 element', () => {
		const el = SectionTitle.type({ children: 'Experience' });
		assert.equal(el.type, 'h2');
		assert.equal(el.props.children, 'Experience');
	});
});