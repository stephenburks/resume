const React = require('react');
const styled = require('styled-components').default;

const SkillsGrid = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
	gap: 16px;
`;

const SkillCard = styled.div`
	padding: 16px;
	background: var(--card-bg);
	border: 1px solid var(--border);
	border-radius: 2px;
	transition: all 0.2s ease;

	&:hover {
		border-color: var(--border-hover);
		background: var(--card-bg-hover);
	}
`;

const SkillName = styled.h4`
	font-size: 15px;
	font-weight: 600;
	font-family: 'JetBrains Mono', monospace;
	color: var(--text);
	margin: 0 0 10px 0;
`;

const KeywordList = styled.div`
	font-size: 13px;
	color: var(--muted);
	line-height: 1.6;
`;

const SkillCardComponent = React.memo(function SkillCardComponent({ skill }) {
	return React.createElement(
		SkillCard,
		null,
		React.createElement(SkillName, null, skill.name),
		skill.keywords &&
			skill.keywords.length > 0 &&
			React.createElement(KeywordList, null, skill.keywords.join(' • ')),
	);
});

function SkillsSection({ skills }) {
	if (!skills || skills.length === 0) return null;
	return React.createElement(
		SkillsGrid,
		null,
		skills.map((skill, index) =>
			React.createElement(SkillCardComponent, { key: index, skill }),
		),
	);
}

module.exports = SkillsSection;
