const React = require('react');
const styled = require('styled-components').default;
const { ContactInfo } = require('../shared');
const ThemeToggle = require('../ThemeToggle');

const Header = styled.header`
	margin-bottom: 48px;
	padding-bottom: 24px;
	border-bottom: 3px solid var(--header-border);
	position: relative;
`;

const Name = styled.h1`
	font-size: 48px;
	font-weight: 700;
	font-family: 'JetBrains Mono', 'Courier New', monospace;
	color: var(--text);
	margin: 0 0 12px 0;
	letter-spacing: -1px;
`;

const Label = styled.p`
	font-size: 18px;
	font-weight: 500;
	font-family: 'JetBrains Mono', monospace;
	color: var(--accent);
	margin: 0 0 20px 0;
	letter-spacing: 0.5px;
`;

const StyledContactInfo = styled(ContactInfo)`
	font-size: 15px;
	color: var(--muted);
	margin-bottom: 20px;

	a {
		font-size: 15px;
		color: var(--accent);
		text-decoration: none;
		font-family: 'JetBrains Mono', monospace;

		&:hover {
			text-decoration: underline;
		}
	}
`;

const Summary = styled.p`
	font-size: 16px;
	line-height: 1.8;
	color: var(--text-secondary);
	margin: 20px 0 0 0;
	max-width: 750px;
`;

function ResumeHeader({ basics }) {
	return React.createElement(
		Header,
		null,
		React.createElement(ThemeToggle),
		React.createElement(Name, null, basics.name),
		basics.label && React.createElement(Label, null, basics.label),
		React.createElement(StyledContactInfo, { basics }),
		basics.summary && React.createElement(Summary, null, basics.summary),
	);
}

module.exports = ResumeHeader;
