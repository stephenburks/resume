const React = require('react');
const { SimpleList, SimpleItem, ItemTitle, ItemMeta } = require('../shared');

const LanguageItem = React.memo(function LanguageItem({ item }) {
	return React.createElement(
		SimpleItem,
		null,
		React.createElement(ItemTitle, null, item.language),
		item.fluency && React.createElement(ItemMeta, null, item.fluency),
	);
});

function LanguagesSection({ languages }) {
	if (!languages || languages.length === 0) return null;
	return React.createElement(
		SimpleList,
		null,
		languages.map((lang, index) =>
			React.createElement(LanguageItem, { key: index, item: lang }),
		),
	);
}

module.exports = LanguagesSection;
