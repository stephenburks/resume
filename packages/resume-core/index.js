const React = require('react');

const Section = React.memo(function Section({ children }) {
	return React.createElement('section', null, children);
});

const SectionTitle = React.memo(function SectionTitle({ children }) {
	return React.createElement('h2', null, children);
});

const DateRange = React.memo(function DateRange({ startDate, endDate }) {
	const start = startDate || '';
	const end = endDate || 'Present';
	return React.createElement('span', null, `${start} — ${end}`);
});

const ContactInfo = React.memo(function ContactInfo({ basics }) {
	const loc = basics.location && [basics.location.city, basics.location.region, basics.location.countryCode].filter(Boolean).join(', ');

	const items = [
		basics.email && React.createElement('a', { key: 'email', href: `mailto:${basics.email}` }, basics.email),
		basics.phone && React.createElement('span', { key: 'phone' }, basics.phone),
		basics.url && React.createElement('a', { key: 'url', href: basics.url }, basics.url),
		loc && React.createElement('span', { key: 'location' }, loc),
	].filter(Boolean);

	if (basics.profiles) {
		basics.profiles.forEach((profile) => {
			if (profile.url) {
				items.push(React.createElement('a', { key: profile.network, href: profile.url }, profile.network));
			}
		});
	}

	const result = [];
	items.forEach((item, i) => {
		if (i > 0) result.push(' • ');
		result.push(item);
	});

	return React.createElement('div', null, ...result);
});

const Link = React.memo(function Link({ href, children }) {
	return React.createElement('a', { href }, children);
});

module.exports = { Section, SectionTitle, DateRange, ContactInfo, Link };
