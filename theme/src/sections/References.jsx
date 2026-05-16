const React = require('react');
const { ProjectItem, ItemTitle, ItemDescription } = require('../shared');

const ReferenceItemComponent = React.memo(function ReferenceItemComponent({ reference }) {
	return React.createElement(
		ProjectItem,
		null,
		React.createElement(ItemTitle, null, reference.name),
		reference.reference && React.createElement(ItemDescription, null, reference.reference),
	);
});

function ReferencesSection({ references }) {
	if (!references || references.length === 0) return null;
	return references.map((ref, index) =>
		React.createElement(ReferenceItemComponent, { key: index, reference: ref }),
	);
}

module.exports = ReferencesSection;
