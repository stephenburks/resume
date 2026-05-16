const React = require('react');
const { SimpleList, SimpleItem, ItemTitle, ItemMeta, ItemDescription } = require('../shared');

const AwardItem = React.memo(function AwardItem({ item }) {
	return React.createElement(
		SimpleItem,
		null,
		React.createElement(ItemTitle, null, item.title),
		React.createElement(
			ItemMeta,
			null,
			item.awarder,
			item.date && React.createElement(React.Fragment, null, ' • ', item.date),
		),
		item.summary && React.createElement(ItemDescription, null, item.summary),
	);
});

function AwardsSection({ awards }) {
	if (!awards || awards.length === 0) return null;
	return React.createElement(
		SimpleList,
		null,
		awards.map((award, index) => React.createElement(AwardItem, { key: index, item: award })),
	);
}

module.exports = AwardsSection;
