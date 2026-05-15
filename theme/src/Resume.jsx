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

const VolunteerItem = React.memo(function VolunteerItem({ item }) {
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
});

const AwardItem = React.memo(function AwardItem({ item }) {
	return React.createElement(
		SimpleItem,
		null,
		React.createElement(ItemTitle, null, item.title),
		React.createElement(ItemMeta, null, item.awarder, item.date && React.createElement(React.Fragment, null, ' • ', item.date)),
		item.summary && React.createElement(ItemDescription, null, item.summary),
	);
});

const LanguageItem = React.memo(function LanguageItem({ item }) {
	return React.createElement(SimpleItem, null, React.createElement(ItemTitle, null, item.language), item.fluency && React.createElement(ItemMeta, null, item.fluency));
});

const InterestItem = React.memo(function InterestItem({ item }) {
	return React.createElement(SimpleItem, null, React.createElement(ItemTitle, null, item.name), item.keywords && item.keywords.length > 0 && React.createElement(ItemDescription, null, item.keywords.join(', ')));
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

function ResumeSection({ key, title, children }) {
	if (!children) return null;
	return React.createElement(
		StyledSection,
		{ key },
		React.createElement(StyledSectionTitle, null, title),
		children,
	);
}

function Resume({ resume }) {
	const { theme, toggle } = useTheme();
	const basics = resume.basics || {};

	return React.createElement(
		Layout,
		null,
		React.createElement(ResumeHeader, { basics, theme, toggle }),

		ResumeSection({
			key: 'work',
			title: 'Experience',
			children: resume.work && resume.work.length > 0 && resume.work.map((job, index) =>
				React.createElement(WorkItem, { key: index, job })),
		}),

		ResumeSection({
			key: 'skills',
			title: 'Skills',
			children: resume.skills && resume.skills.length > 0 && React.createElement(
				SkillsGrid,
				null,
				resume.skills.map((skill, index) => React.createElement(SkillCardComponent, { key: index, skill })),
			),
		}),

		ResumeSection({
			key: 'education',
			title: 'Education',
			children: resume.education && resume.education.length > 0 && resume.education.map((edu, index) =>
				React.createElement(EducationItemComponent, { key: index, edu })),
		}),

		ResumeSection({
			key: 'projects',
			title: 'Projects',
			children: resume.projects && resume.projects.length > 0 && resume.projects.map((project, index) =>
				React.createElement(ProjectItemComponent, { key: index, project })),
		}),

		ResumeSection({
			key: 'volunteer',
			title: 'Volunteer',
			children: resume.volunteer && resume.volunteer.length > 0 && React.createElement(
				SimpleList,
				null,
				resume.volunteer.map((vol, index) =>
					React.createElement(VolunteerItem, { key: index, item: vol })),
			),
		}),

		ResumeSection({
			key: 'awards',
			title: 'Awards',
			children: resume.awards && resume.awards.length > 0 && React.createElement(
				SimpleList,
				null,
				resume.awards.map((award, index) =>
					React.createElement(AwardItem, { key: index, item: award })),
			),
		}),

		ResumeSection({
			key: 'publications',
			title: 'Publications',
			children: resume.publications && resume.publications.length > 0 && resume.publications.map((pub, index) =>
				React.createElement(PublicationItemComponent, { key: index, pub })),
		}),

		ResumeSection({
			key: 'languages',
			title: 'Languages',
			children: resume.languages && resume.languages.length > 0 && React.createElement(
				SimpleList,
				null,
				resume.languages.map((lang, index) =>
					React.createElement(LanguageItem, { key: index, item: lang })),
			),
		}),

		ResumeSection({
			key: 'interests',
			title: 'Interests',
			children: resume.interests && resume.interests.length > 0 && React.createElement(
				SimpleList,
				null,
				resume.interests.map((interest, index) =>
					React.createElement(InterestItem, { key: index, item: interest })),
			),
		}),

		ResumeSection({
			key: 'references',
			title: 'References',
			children: resume.references && resume.references.length > 0 && resume.references.map((ref, index) =>
				React.createElement(ReferenceItemComponent, { key: index, ref })),
		}),
	);
}

module.exports = Resume;
