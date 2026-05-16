const React = require('react');
const styled = require('styled-components').default;
const { Section, SectionTitle } = require('../shared');

const StyledSection = styled(Section)`
	margin-bottom: 48px;
`;

const StyledSectionTitle = styled(SectionTitle)`
	font-size: 20px;
	font-weight: 700;
	font-family: 'JetBrains Mono', monospace;
	color: var(--text);
	margin: 0 0 24px 0;
	text-transform: uppercase;
	letter-spacing: 1px;
	padding: 8px 0;
	border-bottom: 2px solid var(--section-title-border);
	display: inline-block;
	min-width: 200px;

	&::before {
		content: '# ';
		color: var(--accent);
	}
`;

function ResumeSection({ title, children }) {
	if (!children) return null;
	return React.createElement(
		StyledSection,
		null,
		React.createElement(StyledSectionTitle, null, title),
		children,
	);
}

module.exports = ResumeSection;
