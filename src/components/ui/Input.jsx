import { useState } from 'react';
import { useTheme } from '../../context/ThemeContext';
export default function Input({
  label,
  type = 'text',
  placeholder,
  value,
  onChange,
  error,
  disabled = false,
  required = false,
  style = {},
  inputStyle = {},
}) {
  const { isDark } = useTheme();
  const [focused, setFocused] = useState(false);

  const bg        = isDark ? '#0d0d1a' : '#f8fafc';
  const textColor = isDark ? '#e2e8f0' : '#1e293b';
  const labelColor = isDark ? '#94a3b8' : '#64748b';
  const borderNormal = isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.12)';
  const borderFocus  = 'rgba(139,92,246,0.6)';
  const borderError  = 'rgba(239,68,68,0.6)';
  const shadowFocus  = '0 0 0 3px rgba(139,92,246,0.15)';
  const errorBg   = isDark ? 'rgba(239,68,68,0.06)' : 'rgba(239,68,68,0.04)';

  const currentBorder = error ? borderError : focused ? borderFocus : borderNormal;
  const currentBg     = error ? errorBg : bg;
  const currentShadow = focused && !error ? shadowFocus : 'none';

  return (
    <div style={{ width: '100%', ...style }}>
      {label && (
        <label
          style={{
            display: 'block',
            fontSize: '11px',
            fontWeight: '600',
            color: labelColor,
            marginBottom: '5px',
            letterSpacing: '0.02em',
          }}
        >
          {label}
          {required && <span style={{ color: '#f87171', marginLeft: '3px' }}>*</span>}
        </label>
      )}  

      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={e => onChange && onChange(e.target.value)}
        disabled={disabled}
        required={required}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        style={{
          width: '100%',
          background: currentBg,
          border: `0.5px solid ${currentBorder}`,
          borderRadius: '8px',
          padding: '8px 10px',
          fontSize: '12px',
          color: textColor,
          outline: 'none',
          boxShadow: currentShadow,
          transition: 'all 0.2s ease',
          opacity: disabled ? 0.55 : 1,
          cursor: disabled ? 'not-allowed' : 'text',
          fontFamily: 'inherit',
          ...inputStyle,
        }}
      />

      {error && (
        <p
          style={{
            margin: '4px 0 0',
            fontSize: '10px',
            color: '#f87171',
            display: 'flex',
            alignItems: 'center',
            gap: '4px',
          }}
        >
          ⚠ {error}
        </p>
      )}
    </div>
  );
}