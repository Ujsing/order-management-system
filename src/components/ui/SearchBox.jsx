import { useState } from 'react';
import { useTheme } from '../../context/ThemeContext';
export default function SearchBox({
  placeholder = 'Search...',
  value = '',
  onChange,
  style = {},
}) {
  const { isDark } = useTheme();
  const [focused, setFocused] = useState(false);

  const bg           = isDark ? '#111120' : '#f1f5f9';
  const borderNormal = isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.08)';
  const borderFocus  = 'rgba(139,92,246,0.45)';
  const iconColor    = isDark ? '#4b5563' : '#9ca3af';
  const textColor    = isDark ? '#e2e8f0' : '#1e293b';

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        background: bg,
        border: `0.5px solid ${focused ? borderFocus : borderNormal}`,
        borderRadius: '8px',
        padding: '7px 10px',
        flex: 1,
        minWidth: '160px',
        boxShadow: focused ? '0 0 0 3px rgba(139,92,246,0.1)' : 'none',
        transition: 'all 0.2s ease',
        ...style,
      }}
    >
      {/* Search icon */}
      <svg
        width="13"
        height="13"
        viewBox="0 0 20 20"
        fill="none"
        style={{ flexShrink: 0 }}
      >
        <circle cx="9" cy="9" r="6" stroke={iconColor} strokeWidth="2" />
        <path d="M15 15l3 3" stroke={iconColor} strokeWidth="2" strokeLinecap="round" />
      </svg>

      <input
        placeholder={placeholder}
        value={value}
        onChange={e => onChange && onChange(e.target.value)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        style={{
          background: 'transparent',
          border: 'none',
          outline: 'none',
          fontSize: '12px',
          color: textColor,
          flex: 1,
          fontFamily: 'inherit',
        }}
      />

      {/* Clear button */}
      {value && (
        <button
          onClick={() => onChange && onChange('')}
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            color: iconColor,
            fontSize: '14px',
            lineHeight: 1,
            padding: '0',
            flexShrink: 0,
          }}
        >
          ×
        </button>
      )}
    </div>
  );
}