const React = require('react');
const styled = require('styled-components').default;
const { Section, SectionTitle, DateRange, ContactInfo, Link } = require('@resume/core');
const ThemeToggle = require('./ThemeToggle');
const { useTheme } = require('./useTheme');

const Layout = styled.div`
	max-width: 900px;
	margin: 0 auto;
	padding: 60px 50px;
	background: ${(p) => p.theme.background};
	font-family:
		'Inter',
		-apple-system,
		BlinkMacSystemFont,
		'Segoe UI',
		sans-serif;
	color: ${(p) => p.theme.text};
	line-height: 1.7;
	transition:
		background 0.2s ease,
		color 0.2s ease;

	@media print {
		padding: 40px;
	}

	@media (max-width: 640px) {
		padding: 40px 20px;
	}
`;

const Header = styled.header`
	margin-bottom: 48px;
	padding-bottom: 24px;
	border-bottom: 3px solid ${(p) => p.theme.headerBorder};
	position: relative;
`;

const Name = styled.h1`
	font-size: 48px;
	font-weight: 700;
	font-family: 'JetBrains Mono', 'Courier New', monospace;
	color: ${(p) => p.theme.text};
	margin: 0 0 12px 0;
	letter-spacing: -1px;
`;

const Label = styled.p`
	font-size: 18px;
	font-weight: 500;
	font-family: 'JetBrains Mono', monospace;
	color: ${(p) => p.theme.accent};
	margin: 0 0 20px 0;
	letter-spacing: 0.5px;
`;

const StyledContactInfo = styled(ContactInfo)`
	font-size: 15px;
	color: ${(p) => p.theme.muted};
	margin-bottom: 20px;

	a {
		font-size: 15px;
		color: ${(p) => p.theme.accent};
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
	color: ${(p) => p.theme.textSecondary};
	margin: 20px 0 0 0;
	max-width: 750px;
`;

const StyledSection = styled(Section)`
	margin-bottom: 48px;
`;

const StyledSectionTitle = styled(SectionTitle)`
	font-size: 20px;
	font-weight: 700;
	font-family: 'JetBrains Mono', monospace;
	color: ${(p) => p.theme.text};
	margin: 0 0 24px 0;
	text-transform: uppercase;
	letter-spacing: 1px;
	padding: 8px 0;
	border-bottom: 2px solid ${(p) => p.theme.sectionTitleBorder};
	display: inline-block;
	min-width: 200px;

	&::before {
		content: '# ';
		color: ${(p) => p.theme.accent};
	}
`;

const StyledWorkItem = styled.div`
	margin-bottom: 36px;
	padding-left: 20px;
	border-left: 3px solid ${(p) => p.theme.border};

	&:last-child {
		margin-bottom: 0;
	}

	&:hover {
		border-left-color: ${(p) => p.theme.borderHover};
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
	color: ${(p) => p.theme.text};
	margin: 0;
`;

const Company = styled.div`
	font-size: 16px;
	font-weight: 500;
	color: ${(p) => p.theme.accent};
	margin-top: 4px;
`;

const StyledDateRange = styled(DateRange)`
	font-size: 14px;
	font-family: 'JetBrains Mono', monospace;
	color: ${(p) => p.theme.muted};
`;

const WorkSummary = styled.p`
	margin: 12px 0;
	color: ${(p) => p.theme.textTertiary};
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
		color: ${(p) => p.theme.textSecondary};
		line-height: 1.7;

		&::before {
			content: '→';
			position: absolute;
			left: -20px;
			color: ${(p) => p.theme.accent};
			font-weight: bold;
		}
	}
`;

const EducationItem = styled.div`
	margin-bottom: 28px;
	padding: 20px;
	background: ${(p) => p.theme.cardBg};
	border-left: 3px solid ${(p) => p.theme.accent};
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
	color: ${(p) => p.theme.text};
	margin: 0;
`;

const Institution = styled.div`
	font-size: 15px;
	color: ${(p) => p.theme.muted};
	margin-top: 4px;
`;

const StudyType = styled.div`
	font-size: 14px;
	color: ${(p) => p.theme.accent};
	margin-top: 4px;
`;

const SkillsGrid = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
	gap: 16px;
`;

const SkillCard = styled.div`
	padding: 16px;
	background: ${(p) => p.theme.cardBg};
	border: 1px solid ${(p) => p.theme.border};
	border-radius: 2px;
	transition: all 0.2s ease;

	&:hover {
		border-color: ${(p) => p.theme.borderHover};
		background: ${(p) => p.theme.cardBgHover};
	}
`;

const SkillName = styled.h4`
	font-size: 15px;
	font-weight: 600;
	font-family: 'JetBrains Mono', monospace;
	color: ${(p) => p.theme.text};
	margin: 0 0 10px 0;
`;

const KeywordList = styled.div`
	font-size: 13px;
	color: ${(p) => p.theme.muted};
	line-height: 1.6;
`;

const ProjectItem = styled.div`
	margin-bottom: 32px;
	padding-bottom: 32px;
	border-bottom: 1px solid ${(p) => p.theme.border};

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
	color: ${(p) => p.theme.text};
	margin: 0 0 8px 0;
`;

const ProjectDescription = styled.p`
	font-size: 15px;
	color: ${(p) => p.theme.textTertiary};
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
		color: ${(p) => p.theme.textTertiary};
		font-size: 14px;

		&::before {
			content: '•';
			position: absolute;
			left: -20px;
			color: ${(p) => p.theme.accent};
		}
	}
`;

const SimpleList = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
	gap: 16px;
`;

const SimpleItem = styled.div`
	padding: 16px;
	background: ${(p) => p.theme.cardBg};
	border-left: 2px solid ${(p) => p.theme.accent};
	border-radius: 2px;
	transition: background 0.2s ease;
`;

const ItemTitle = styled.h4`
	font-size: 15px;
	font-weight: 600;
	font-family: 'JetBrains Mono', monospace;
	color: ${(p) => p.theme.text};
	margin: 0 0 8px 0;
`;

const ItemMeta = styled.div`
	font-size: 13px;
	color: ${(p) => p.theme.muted};
	margin-bottom: 6px;
`;

const ItemDescription = styled.p`
	font-size: 14px;
	color: ${(p) => p.theme.textTertiary};
	margin: 8px 0 0 0;
	line-height: 1.6;
`;

// Memoized work item component
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
				React.createElement('div', null, React.createElement(Position, null, job.position), React.createElement(Company, null, job.name)),
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
				job.highlights.map((highlight, i) => React.createElement('li', { key: i }, highlight)),
			),
	);
});

// Memoized education item component
const EducationItemComponent = React.memo(function EducationItemComponent({ edu }) {
	return React.createElement(
		EducationItem,
		null,
		React.createElement(
			EducationHeader,
			null,
			React.createElement('div', null, React.createElement(Degree, null, edu.area), edu.studyType && React.createElement(StudyType, null, edu.studyType), React.createElement(Institution, null, edu.institution)),
			React.createElement(StyledDateRange, {
				startDate: edu.startDate,
				endDate: edu.endDate,
			}),
		),
		edu.score && React.createElement(ItemMeta, null, 'GPA: ', edu.score),
		edu.courses && edu.courses.length > 0 && React.createElement(ItemDescription, null, edu.courses.join(', ')),
	);
});

// Memoized skill card component
const SkillCardComponent = React.memo(function SkillCardComponent({ skill }) {
	return React.createElement(SkillCard, null, React.createElement(SkillName, null, skill.name), skill.keywords && skill.keywords.length > 0 && React.createElement(KeywordList, null, skill.keywords.join(' • ')));
});

// Memoized project item component
const ProjectItemComponent = React.memo(function ProjectItemComponent({ project }) {
	return React.createElement(
		ProjectItem,
		null,
		React.createElement(
			ProjectHeader,
			null,
			React.createElement(ProjectName, null, project.url ? React.createElement(Link, { href: project.url }, project.name) : project.name),
			project.description && React.createElement(ProjectDescription, null, project.description),
		),
		project.highlights &&
			project.highlights.length > 0 &&
			React.createElement(
				ProjectHighlights,
				null,
				project.highlights.map((highlight, i) => React.createElement('li', { key: i }, highlight)),
			),
	);
});

// Memoized simple item component for volunteer, awards, etc.
const SimpleItemComponent = React.memo(function SimpleItemComponent({ item, type }) {
	if (type === 'volunteer') {
		return React.createElement(
			SimpleItem,
			null,
			React.createElement(ItemTitle, null, item.position),
			React.createElement(
				ItemMeta,
				null,
				item.organization,
				item.startDate &&
					React.createElement(
						React.Fragment,
						null,
						' • ',
						React.createElement(DateRange, {
							startDate: item.startDate,
							endDate: item.endDate,
						}),
					),
			),
			item.summary && React.createElement(ItemDescription, null, item.summary),
		);
	}

	if (type === 'award') {
		return React.createElement(
			SimpleItem,
			null,
			React.createElement(ItemTitle, null, item.title),
			React.createElement(ItemMeta, null, item.awarder, item.date && React.createElement(React.Fragment, null, ' • ', item.date)),
			item.summary && React.createElement(ItemDescription, null, item.summary),
		);
	}

	if (type === 'language') {
		return React.createElement(SimpleItem, null, React.createElement(ItemTitle, null, item.language), item.fluency && React.createElement(ItemMeta, null, item.fluency));
	}

	if (type === 'interest') {
		return React.createElement(SimpleItem, null, React.createElement(ItemTitle, null, item.name), item.keywords && item.keywords.length > 0 && React.createElement(ItemDescription, null, item.keywords.join(', ')));
	}

	return null;
});

// Memoized publication item component
const PublicationItemComponent = React.memo(function PublicationItemComponent({ pub }) {
	return React.createElement(
		ProjectItem,
		null,
		React.createElement(
			ProjectHeader,
			null,
			React.createElement(ProjectName, null, pub.url ? React.createElement(Link, { href: pub.url }, pub.name) : pub.name),
			React.createElement(ItemMeta, null, pub.publisher, pub.releaseDate && React.createElement(React.Fragment, null, ' • ', pub.releaseDate)),
		),
		pub.summary && React.createElement(ProjectDescription, null, pub.summary),
	);
});

// Memoized reference item component
const ReferenceItemComponent = React.memo(function ReferenceItemComponent({ ref }) {
	return React.createElement(ProjectItem, null, React.createElement(ItemTitle, null, ref.name), ref.reference && React.createElement(ItemDescription, null, ref.reference));
});

// Memoized header component
const ResumeHeader = React.memo(function ResumeHeader({ basics, theme, toggle }) {
	return React.createElement(
		Header,
		null,
		React.createElement(ThemeToggle, { theme, onToggle: toggle }),
		React.createElement(Name, null, basics.name),
		basics.label && React.createElement(Label, null, basics.label),
		React.createElement(StyledContactInfo, { basics }),
		basics.summary && React.createElement(Summary, null, basics.summary),
	);
});

function Resume({ resume }) {
	const { theme, toggle } = useTheme();

	const basics = resume.basics || {};
	const work = resume.work || [];
	const education = resume.education || [];
	const skills = resume.skills || [];
	const projects = resume.projects || [];
	const volunteer = resume.volunteer || [];
	const awards = resume.awards || [];
	const publications = resume.publications || [];
	const languages = resume.languages || [];
	const interests = resume.interests || [];
	const references = resume.references || [];

	return React.createElement(
		Layout,
		null,
		React.createElement(ResumeHeader, { basics, theme, toggle }),

		work.length > 0 &&
			React.createElement(
				StyledSection,
				{ key: 'work' },
				React.createElement(StyledSectionTitle, null, 'Experience'),
				work.map((job, index) => React.createElement(WorkItem, { key: index, job })),
			),

		skills.length > 0 &&
			React.createElement(
				StyledSection,
				{ key: 'skills' },
				React.createElement(StyledSectionTitle, null, 'Skills'),
				React.createElement(
					SkillsGrid,
					null,
					skills.map((skill, index) => React.createElement(SkillCardComponent, { key: index, skill })),
				),
			),

		education.length > 0 &&
			React.createElement(
				StyledSection,
				{ key: 'education' },
				React.createElement(StyledSectionTitle, null, 'Education'),
				education.map((edu, index) => React.createElement(EducationItemComponent, { key: index, edu })),
			),

		projects.length > 0 &&
			React.createElement(
				StyledSection,
				{ key: 'projects' },
				React.createElement(StyledSectionTitle, null, 'Projects'),
				projects.map((project, index) => React.createElement(ProjectItemComponent, { key: index, project })),
			),

		volunteer.length > 0 &&
			React.createElement(
				StyledSection,
				{ key: 'volunteer' },
				React.createElement(StyledSectionTitle, null, 'Volunteer'),
				React.createElement(
					SimpleList,
					null,
					volunteer.map((vol, index) =>
						React.createElement(SimpleItemComponent, {
							key: index,
							item: vol,
							type: 'volunteer',
						}),
					),
				),
			),

		awards.length > 0 &&
			React.createElement(
				StyledSection,
				{ key: 'awards' },
				React.createElement(StyledSectionTitle, null, 'Awards'),
				React.createElement(
					SimpleList,
					null,
					awards.map((award, index) =>
						React.createElement(SimpleItemComponent, {
							key: index,
							item: award,
							type: 'award',
						}),
					),
				),
			),

		publications.length > 0 &&
			React.createElement(
				StyledSection,
				{ key: 'publications' },
				React.createElement(StyledSectionTitle, null, 'Publications'),
				publications.map((pub, index) => React.createElement(PublicationItemComponent, { key: index, pub })),
			),

		languages.length > 0 &&
			React.createElement(
				StyledSection,
				{ key: 'languages' },
				React.createElement(StyledSectionTitle, null, 'Languages'),
				React.createElement(
					SimpleList,
					null,
					languages.map((lang, index) =>
						React.createElement(SimpleItemComponent, {
							key: index,
							item: lang,
							type: 'language',
						}),
					),
				),
			),

		interests.length > 0 &&
			React.createElement(
				StyledSection,
				{ key: 'interests' },
				React.createElement(StyledSectionTitle, null, 'Interests'),
				React.createElement(
					SimpleList,
					null,
					interests.map((interest, index) =>
						React.createElement(SimpleItemComponent, {
							key: index,
							item: interest,
							type: 'interest',
						}),
					),
				),
			),

		references.length > 0 &&
			React.createElement(
				StyledSection,
				{ key: 'references' },
				React.createElement(StyledSectionTitle, null, 'References'),
				references.map((ref, index) => React.createElement(ReferenceItemComponent, { key: index, ref })),
			),
	);
}

module.exports = Resume;
