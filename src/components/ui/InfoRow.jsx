import { useTheme } from '../../context/ThemeContext';

/**
 * Used in Order Detail for key-value pairs:
 * <InfoRow label="Customer" value="Ravi Kumar" />
 * <InfoRow label="Total" value="₹1,23,000" highlight />
 */
export default function InfoRow({ label, value, highlight = false }) {
  const { isDark } = useTheme();

  const labelClr  = isDark ? '#475569' : '#6b7280';
  const valueClr  = highlight ? '#a78bfa' : (isDark ? '#e2e8f0' : '#1e293b');
  const divider   = isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)';

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '6px 0',
        borderBottom: `0.5px solid ${divider}`,
      }}
    >
      <span style={{ fontSize: '11px', color: labelClr }}>{label}</span>
      <span
        style={{
          fontSize: '12px',
          color: valueClr,
          fontWeight: highlight ? '800' : '500',
          textAlign: 'right',
          maxWidth: '60%',
          wordBreak: 'break-word',
        }}
      >
        {value}
      </span>
    </div>
  );
}