const React = require('react');

function Section({ children }) {
  return React.createElement('section', null, children);
}

function SectionTitle({ children }) {
  return React.createElement('h2', null, children);
}

function DateRange({ startDate, endDate }) {
  const start = startDate || '';
  const end = endDate || 'Present';
  return React.createElement('span', null, start + ' \u2014 ' + end);
}

function ContactInfo({ basics }) {
  const items = [];
  if (basics.email) items.push(React.createElement('a', { key: 'email', href: 'mailto:' + basics.email }, basics.email));
  if (basics.phone) items.push(React.createElement('span', { key: 'phone' }, basics.phone));
  if (basics.url) items.push(React.createElement('a', { key: 'url', href: basics.url }, basics.url));
  if (basics.location) {
    const loc = [basics.location.city, basics.location.region, basics.location.countryCode].filter(Boolean).join(', ');
    if (loc) items.push(React.createElement('span', { key: 'location' }, loc));
  }
  if (basics.profiles) {
    basics.profiles.forEach((p) => {
      if (p.url) items.push(React.createElement('a', { key: p.network, href: p.url }, p.network));
    });
  }
  const result = [];
  items.forEach((item, i) => {
    if (i > 0) result.push(' \u2022 ');
    result.push(item);
  });
  return React.createElement('div', null, ...result);
}

function Link({ href, children }) {
  return React.createElement('a', { href }, children);
}

module.exports = { Section, SectionTitle, DateRange, ContactInfo, Link };
