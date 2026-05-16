const React = require('react');
const styled = require('styled-components').default;
const { StyledDateRange, ItemMeta, ItemDescription } = require('../shared');

const EducationItem = styled.div`
	margin-bottom: 28px;
	padding: 20px;
	background: var(--card-bg);
	border-left: 3px solid var(--accent);
	border-radius: 2px;
	transition: background 0.2s ease;

	&:last-child {
		margin-bottom: 0;
	}
`;

const EducationHeader = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: baseline;
	flex-wrap: wrap;
	gap: 8px;
	margin-bottom: 8px;
`;

const Degree = styled.h3`
	font-size: 17px;
	font-weight: 600;
	font-family: 'JetBrains Mono', monospace;
	color: var(--text);
	margin: 0;
`;

const Institution = styled.div`
	font-size: 15px;
	color: var(--muted);
	margin-top: 4px;
`;

const StudyType = styled.div`
	font-size: 14px;
	color: var(--accent);
	margin-top: 4px;
`;

const EducationItemComponent = React.memo(function EducationItemComponent({ edu }) {
	return React.createElement(
		EducationItem,
		null,
		React.createElement(
			EducationHeader,
			null,
			React.createElement(
				'div',
				null,
				React.createElement(Degree, null, edu.area),
				edu.studyType && React.createElement(StudyType, null, edu.studyType),
				React.createElement(Institution, null, edu.institution),
			),
			React.createElement(StyledDateRange, {
				startDate: edu.startDate,
				endDate: edu.endDate,
			}),
		),
		edu.score && React.createElement(ItemMeta, null, 'GPA: ', edu.score),
		edu.courses &&
			edu.courses.length > 0 &&
			React.createElement(ItemDescription, null, edu.courses.join(', ')),
	);
});

function EducationSection({ education }) {
	if (!education || education.length === 0) return null;
	return education.map((edu, index) =>
		React.createElement(EducationItemComponent, { key: index, edu }),
	);
}

module.exports = EducationSection;
