import { useTheme } from '../../context/ThemeContext';

/**
 * <FormGroup label="Full Name" error={errors.name} required>
 *   <Input value={name} onChange={setName} />
 * </FormGroup>
 */
export default function FormGroup({ label, error, required, children, style = {} }) {
  const { isDark } = useTheme();
  const labelColor = isDark ? '#94a3b8' : '#64748b';

  return (
    <div style={{ marginBottom: '12px', ...style }}>
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
      {children}
      {error && (
        <p style={{ margin: '4px 0 0', fontSize: '10px', color: '#f87171' }}>
          ⚠ {error}
        </p>
      )}
    </div>
  );
}