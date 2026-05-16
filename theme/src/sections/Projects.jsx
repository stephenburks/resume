const React = require('react');
const {
	Link,
	ProjectItem,
	ProjectHeader,
	ProjectName,
	ProjectDescription,
	ProjectHighlights,
} = require('../shared');

const ProjectItemComponent = React.memo(function ProjectItemComponent({ project }) {
	return React.createElement(
		ProjectItem,
		null,
		React.createElement(
			ProjectHeader,
			null,
			React.createElement(
				ProjectName,
				null,
				project.url
					? React.createElement(Link, { href: project.url }, project.name)
					: project.name,
			),
			project.description &&
				React.createElement(ProjectDescription, null, project.description),
		),
		project.highlights &&
			project.highlights.length > 0 &&
			React.createElement(
				ProjectHighlights,
				null,
				project.highlights.map((highlight, i) =>
					React.createElement('li', { key: i }, highlight),
				),
			),
	);
});

function ProjectsSection({ projects }) {
	if (!projects || projects.length === 0) return null;
	return projects.map((project, index) =>
		React.createElement(ProjectItemComponent, { key: index, project }),
	);
}

module.exports = ProjectsSection;
