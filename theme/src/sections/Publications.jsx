const React = require('react');
const {
	Link,
	ProjectItem,
	ProjectHeader,
	ProjectName,
	ItemMeta,
	ProjectDescription,
} = require('../shared');

const PublicationItemComponent = React.memo(function PublicationItemComponent({ pub }) {
	return React.createElement(
		ProjectItem,
		null,
		React.createElement(
			ProjectHeader,
			null,
			React.createElement(
				ProjectName,
				null,
				pub.url ? React.createElement(Link, { href: pub.url }, pub.name) : pub.name,
			),
			React.createElement(
				ItemMeta,
				null,
				pub.publisher,
				pub.releaseDate &&
					React.createElement(React.Fragment, null, ' • ', pub.releaseDate),
			),
		),
		pub.summary && React.createElement(ProjectDescription, null, pub.summary),
	);
});

function PublicationsSection({ publications }) {
	if (!publications || publications.length === 0) return null;
	return publications.map((pub, index) =>
		React.createElement(PublicationItemComponent, { key: index, pub }),
	);
}

module.exports = PublicationsSection;
