const React = require('react');
const styled = require('styled-components').default;

// --- Raw components (previously @resume/core) ---

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
	const loc =
		basics.location &&
		[basics.location.city, basics.location.region, basics.location.countryCode]
			.filter(Boolean)
			.join(', ');

	const items = [
		basics.email &&
			React.createElement(
				'a',
				{ key: 'email', href: `mailto:${basics.email}` },
				basics.email,
			),
		basics.phone && React.createElement('span', { key: 'phone' }, basics.phone),
		basics.url && React.createElement('a', { key: 'url', href: basics.url }, basics.url),
		loc && React.createElement('span', { key: 'location' }, loc),
	].filter(Boolean);

	if (basics.profiles) {
		basics.profiles.forEach((profile) => {
			if (profile.url) {
				items.push(
					React.createElement(
						'a',
						{ key: profile.network, href: profile.url },
						profile.network,
					),
				);
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

// --- Shared styled components ---

const StyledDateRange = styled(DateRange)`
	font-size: 14px;
	font-family: 'JetBrains Mono', monospace;
	color: var(--muted);
`;

const SimpleList = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
	gap: 16px;
`;

const SimpleItem = styled.div`
	padding: 16px;
	background: var(--card-bg);
	border-left: 2px solid var(--accent);
	border-radius: 2px;
	transition: background 0.2s ease;
`;

const ItemTitle = styled.h4`
	font-size: 15px;
	font-weight: 600;
	font-family: 'JetBrains Mono', monospace;
	color: var(--text);
	margin: 0 0 8px 0;
`;

const ItemMeta = styled.div`
	font-size: 13px;
	color: var(--muted);
	margin-bottom: 6px;
`;

const ItemDescription = styled.p`
	font-size: 14px;
	color: var(--text-tertiary);
	margin: 8px 0 0 0;
	line-height: 1.6;
`;

const ProjectItem = styled.div`
	margin-bottom: 32px;
	padding-bottom: 32px;
	border-bottom: 1px solid var(--border);

	&:last-child {
		border-bottom: none;
		padding-bottom: 0;
		margin-bottom: 0;
	}
`;

const ProjectHeader = styled.div`
	margin-bottom: 12px;
`;

const ProjectName = styled.h3`
	font-size: 17px;
	font-weight: 600;
	font-family: 'JetBrains Mono', monospace;
	color: var(--text);
	margin: 0 0 8px 0;
`;

const ProjectDescription = styled.p`
	font-size: 15px;
	color: var(--text-tertiary);
	line-height: 1.7;
	margin: 0;
`;

const ProjectHighlights = styled.ul`
	margin: 12px 0 0 0;
	padding-left: 20px;
	list-style: none;

	li {
		position: relative;
		margin-bottom: 6px;
		padding-left: 0;
		color: var(--text-tertiary);
		font-size: 14px;

		&::before {
			content: '•';
			position: absolute;
			left: -20px;
			color: var(--accent);
		}
	}
`;

module.exports = {
	Section,
	SectionTitle,
	DateRange,
	ContactInfo,
	Link,
	StyledDateRange,
	SimpleList,
	SimpleItem,
	ItemTitle,
	ItemMeta,
	ItemDescription,
	ProjectItem,
	ProjectHeader,
	ProjectName,
	ProjectDescription,
	ProjectHighlights,
};
