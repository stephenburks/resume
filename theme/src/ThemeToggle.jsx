const React = require('react');

function ThemeToggle({ theme, onToggle }) {
  var isDark = theme === 'dark';
  var tooltipText = isDark ? 'Switch to light mode' : 'Switch to dark mode';

  return React.createElement('div', {
    style: {
      position: 'absolute',
      top: '16px',
      right: '0',
    }
  },
    React.createElement('button', {
      onClick: onToggle,
      'data-theme-toggle': 'true',
      'aria-label': tooltipText,
      title: tooltipText,
      style: {
        background: 'transparent',
        border: 'none',
        cursor: 'pointer',
        padding: '8px',
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: isDark ? '#d1d5db' : '#374151',
        transition: 'color 0.2s ease',
        position: 'relative',
      }
    },
      isDark
        ? React.createElement('svg', {
            width: '20',
            height: '20',
            viewBox: '0 0 24 24',
            fill: 'none',
            stroke: 'currentColor',
            strokeWidth: '2',
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
          },
            React.createElement('circle', { cx: '12', cy: '12', r: '5' }),
            React.createElement('line', { x1: '12', y1: '1', x2: '12', y2: '3' }),
            React.createElement('line', { x1: '12', y1: '21', x2: '12', y2: '23' }),
            React.createElement('line', { x1: '4.22', y1: '4.22', x2: '5.64', y2: '5.64' }),
            React.createElement('line', { x1: '18.36', y1: '18.36', x2: '19.78', y2: '19.78' }),
            React.createElement('line', { x1: '1', y1: '12', x2: '3', y2: '12' }),
            React.createElement('line', { x1: '21', y1: '12', x2: '23', y2: '12' }),
            React.createElement('line', { x1: '4.22', y1: '19.78', x2: '5.64', y2: '18.36' }),
            React.createElement('line', { x1: '18.36', y1: '5.64', x2: '19.78', y2: '4.22' })
          )
        : React.createElement('svg', {
            width: '20',
            height: '20',
            viewBox: '0 0 24 24',
            fill: 'none',
            stroke: 'currentColor',
            strokeWidth: '2',
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
          },
            React.createElement('path', { d: 'M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z' })
          )
    )
  );
}

module.exports = ThemeToggle;
