const React = require('react');
const styled = require('styled-components').default;
const { StyledDateRange } = require('../shared');

const StyledWorkItem = styled.div`
	margin-bottom: 36px;
	padding-left: 20px;
	border-left: 3px solid var(--border);

	&:last-child {
		margin-bottom: 0;
	}

	&:hover {
		border-left-color: var(--border-hover);
	}
`;

const WorkHeader = styled.div`
	margin-bottom: 12px;
`;

const WorkTitle = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: baseline;
	flex-wrap: wrap;
	gap: 12px;
	margin-bottom: 8px;
`;

const Position = styled.h3`
	font-size: 18px;
	font-weight: 600;
	font-family: 'JetBrains Mono', monospace;
	color: var(--text);
	margin: 0;
`;

const Company = styled.div`
	font-size: 16px;
	font-weight: 500;
	color: var(--accent);
	margin-top: 4px;
`;

const WorkSummary = styled.p`
	margin: 12px 0;
	color: var(--text-tertiary);
	line-height: 1.7;
	font-size: 15px;
`;

const HighlightsList = styled.ul`
	margin: 12px 0 0 0;
	padding-left: 20px;
	list-style: none;

	li {
		position: relative;
		margin-bottom: 8px;
		padding-left: 0;
		color: var(--text-secondary);
		line-height: 1.7;

		&::before {
			content: '→';
			position: absolute;
			left: -20px;
			color: var(--accent);
			font-weight: bold;
		}
	}
`;

const WorkItem = React.memo(function WorkItem({ job }) {
	return React.createElement(
		StyledWorkItem,
		null,
		React.createElement(
			WorkHeader,
			null,
			React.createElement(
				WorkTitle,
				null,
				React.createElement(
					'div',
					null,
					React.createElement(Position, null, job.position),
					React.createElement(Company, null, job.name),
				),
				React.createElement(StyledDateRange, {
					startDate: job.startDate,
					endDate: job.endDate,
				}),
			),
		),
		job.summary && React.createElement(WorkSummary, null, job.summary),
		job.highlights &&
			job.highlights.length > 0 &&
			React.createElement(
				HighlightsList,
				null,
				job.highlights.map((highlight, i) =>
					React.createElement('li', { key: i }, highlight),
				),
			),
	);
});

function WorkSection({ work }) {
	if (!work || work.length === 0) return null;
	return work.map((job, index) => React.createElement(WorkItem, { key: index, job }));
}

module.exports = WorkSection;
