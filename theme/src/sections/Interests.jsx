const React = require('react');
const { SimpleList, SimpleItem, ItemTitle, ItemDescription } = require('../shared');

const InterestItem = React.memo(function InterestItem({ item }) {
	return React.createElement(
		SimpleItem,
		null,
		React.createElement(ItemTitle, null, item.name),
		item.keywords &&
			item.keywords.length > 0 &&
			React.createElement(ItemDescription, null, item.keywords.join(', ')),
	);
});

function InterestsSection({ interests }) {
	if (!interests || interests.length === 0) return null;
	return React.createElement(
		SimpleList,
		null,
		interests.map((interest, index) =>
			React.createElement(InterestItem, { key: index, item: interest }),
		),
	);
}

module.exports = InterestsSection;
