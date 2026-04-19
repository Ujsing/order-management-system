import { useTheme } from '../../context/ThemeContext';
export default function Card({
  title,
  children,
  noPad = false,
  accent,       
  style = {},
  className = '',
}) {
  const { isDark } = useTheme();

  const accentColors = {
    violet: '#8b5cf6',
    blue:   '#3b82f6',
    green:  '#10b981',
    red:    '#ef4444',
    amber:  '#f59e0b',
  };

  const cardBg  = isDark ? '#111120' : '#ffffff';
  const border  = isDark ? 'rgba(255,255,255,0.07)' : 'rgba(0,0,0,0.07)';
  const titleColor = isDark ? '#94a3b8' : '#6b7280';

  return (
    <div
      className={className}
      style={{
        background: cardBg,
        border: `0.5px solid ${border}`,
        borderRadius: '10px',
        padding: noPad ? '0' : '12px',
        marginBottom: '8px',
        position: 'relative',
        borderLeft: accent ? `2px solid ${accentColors[accent]}` : undefined,
        ...style,
      }}
    >
      {title && (
        <div
          style={{
            fontSize: '11px',
            fontWeight: '700',
            color: titleColor,
            marginBottom: '10px',
            textTransform: 'uppercase',
            letterSpacing: '0.06em',
          }}
        >
          {title}
        </div>
      )}
      {children}
    </div>
  );
}