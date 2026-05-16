const React = require('react');
const styled = require('styled-components').default;
const ResumeHeader = require('./sections/Header');
const ResumeSection = require('./sections/SectionWrapper');
const WorkSection = require('./sections/Work');
const EducationSection = require('./sections/Education');
const SkillsSection = require('./sections/Skills');
const ProjectsSection = require('./sections/Projects');
const VolunteerSection = require('./sections/Volunteer');
const AwardsSection = require('./sections/Awards');
const PublicationsSection = require('./sections/Publications');
const LanguagesSection = require('./sections/Languages');
const InterestsSection = require('./sections/Interests');
const ReferencesSection = require('./sections/References');

const Layout = styled.div`
	max-width: 900px;
	margin: 0 auto;
	padding: 60px 50px;
	background: var(--background);
	font-family:
		'Inter',
		-apple-system,
		BlinkMacSystemFont,
		'Segoe UI',
		sans-serif;
	color: var(--text);
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

function Resume({ resume }) {
	const basics = resume.basics || {};

	return React.createElement(
		Layout,
		null,
		React.createElement(ResumeHeader, { basics }),

		React.createElement(
			ResumeSection,
			{ title: 'Experience' },
			React.createElement(WorkSection, { work: resume.work }),
		),

		React.createElement(
			ResumeSection,
			{ title: 'Skills' },
			React.createElement(SkillsSection, { skills: resume.skills }),
		),

		React.createElement(
			ResumeSection,
			{ title: 'Education' },
			React.createElement(EducationSection, { education: resume.education }),
		),

		React.createElement(
			ResumeSection,
			{ title: 'Projects' },
			React.createElement(ProjectsSection, { projects: resume.projects }),
		),

		React.createElement(
			ResumeSection,
			{ title: 'Volunteer' },
			React.createElement(VolunteerSection, { volunteer: resume.volunteer }),
		),

		React.createElement(
			ResumeSection,
			{ title: 'Awards' },
			React.createElement(AwardsSection, { awards: resume.awards }),
		),

		React.createElement(
			ResumeSection,
			{ title: 'Publications' },
			React.createElement(PublicationsSection, { publications: resume.publications }),
		),

		React.createElement(
			ResumeSection,
			{ title: 'Languages' },
			React.createElement(LanguagesSection, { languages: resume.languages }),
		),

		React.createElement(
			ResumeSection,
			{ title: 'Interests' },
			React.createElement(InterestsSection, { interests: resume.interests }),
		),

		React.createElement(
			ResumeSection,
			{ title: 'References' },
			React.createElement(ReferencesSection, { references: resume.references }),
		),
	);
}

module.exports = Resume;
