const React = require('react');
const {
	DateRange,
	SimpleList,
	SimpleItem,
	ItemTitle,
	ItemMeta,
	ItemDescription,
} = require('../shared');

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

function VolunteerSection({ volunteer }) {
	if (!volunteer || volunteer.length === 0) return null;
	return React.createElement(
		SimpleList,
		null,
		volunteer.map((vol, index) =>
			React.createElement(VolunteerItem, { key: index, item: vol }),
		),
	);
}

module.exports = VolunteerSection;
