import React from 'react';

export function Section({ children }) {
  return <section>{children}</section>;
}

export function SectionTitle({ children }) {
  return <h2>{children}</h2>;
}

export function DateRange({ startDate, endDate }) {
  const start = startDate || '';
  const end = endDate || 'Present';
  return <span>{start} — {end}</span>;
}

export function ContactInfo({ basics }) {
  const items = [];
  if (basics.email) items.push(<a key="email" href={`mailto:${basics.email}`}>{basics.email}</a>);
  if (basics.phone) items.push(<span key="phone">{basics.phone}</span>);
  if (basics.url) items.push(<a key="url" href={basics.url}>{basics.url}</a>);
  if (basics.location) {
    const loc = [basics.location.city, basics.location.region, basics.location.countryCode].filter(Boolean).join(', ');
    if (loc) items.push(<span key="location">{loc}</span>);
  }
  if (basics.profiles) {
    basics.profiles.forEach((p) => {
      if (p.url) items.push(<a key={p.network} href={p.url}>{p.network}</a>);
    });
  }
  return <div>{items.reduce((acc, item, i) => [...acc, i > 0 && ' • ', item], [])}</div>;
}

export function Link({ href, children }) {
  return <a href={href}>{children}</a>;
}
