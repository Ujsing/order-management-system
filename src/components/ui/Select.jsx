import { useTheme } from '../../context/ThemeContext';
export default function Select({
  label,
  options = [],
  value,
  onChange,
  placeholder,
  disabled = false,
  error,
  required = false,
  style = {},
}) {
  const { isDark } = useTheme();

  const bg         = isDark ? '#0d0d1a' : '#f8fafc';
  const textColor  = isDark ? '#e2e8f0' : '#1e293b';
  const labelColor = isDark ? '#94a3b8' : '#64748b';
  const border     = isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.12)';
  const borderErr  = 'rgba(239,68,68,0.6)';


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

      <select
        value={value}
        onChange={e => onChange && onChange(e.target.value)}
        disabled={disabled}
        required={required}
        style={{
          width: '100%',
          background: bg,
          border: `0.5px solid ${error ? borderErr : border}`,
          borderRadius: '8px',
          padding: '8px 32px 8px 10px',
          fontSize: '12px',
          color: value ? textColor : labelColor,
          outline: 'none',
          cursor: disabled ? 'not-allowed' : 'pointer',
          appearance: 'none',
          WebkitAppearance: 'none',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'right 10px center',
          transition: 'border-color 0.2s',
          fontFamily: 'inherit',
          opacity: disabled ? 0.55 : 1,
        }}
        onFocus={e => { e.target.style.borderColor = 'rgba(139,92,246,0.6)'; e.target.style.boxShadow = '0 0 0 3px rgba(139,92,246,0.12)'; }}
        onBlur={e  => { e.target.style.borderColor = error ? borderErr : border; e.target.style.boxShadow = 'none'; }}
      >
        {placeholder && (
          <option value="" style={{ background: isDark ? '#0d0d1a' : '#fff' }}>
            {placeholder}
          </option>
        )}
        {options.map(opt => (
          <option
            key={opt.value}
            value={opt.value}
            style={{ background: isDark ? '#0d0d1a' : '#fff', color: textColor }}
          >
            {opt.label}
          </option>
        ))}
      </select>

      {error && (
        <p style={{ margin: '4px 0 0', fontSize: '10px', color: '#f87171' }}>
          ⚠ {error}
        </p>
      )}
    </div>
  );
}