import { useTheme } from '../../context/ThemeContext';

const variants = {
  primary: {
    background: 'linear-gradient(135deg, #8b5cf6, #3b82f6)',
    color: '#fff',
    border: 'none',
    hoverOpacity: 0.88,
  },
  ghost: {
    background: 'transparent',
    color: '',        // filled by theme
    border: '0.5px solid',
    borderColor: '',  // filled by theme
  },
  danger: {
    background: 'linear-gradient(135deg, #f43f5e, #dc2626)',
    color: '#fff',
    border: 'none',
  },
  success: {
    background: 'linear-gradient(135deg, #10b981, #059669)',
    color: '#fff',
    border: 'none',
  },
  outline: {
    background: 'transparent',
    color: '#8b5cf6',
    border: '0.5px solid #8b5cf6',
  },
};

const sizes = {
  sm: { padding: '4px 10px', fontSize: '11px', borderRadius: '6px' },
  md: { padding: '7px 16px', fontSize: '12px', borderRadius: '8px' },
  lg: { padding: '10px 22px', fontSize: '14px', borderRadius: '10px' },
};

export default function Button({
  variant = 'primary',
  size = 'md',
  children,
  onClick,
  disabled = false,
  fullWidth = false,
  style = {},
  type = 'button',
}) {
  const { isDark } = useTheme();

  const v = variants[variant];
  const s = sizes[size];

  const ghostColor = isDark ? '#94a3b8' : '#4b5563';
  const ghostBorder = isDark ? 'rgba(255,255,255,0.15)' : 'rgba(0,0,0,0.15)';
  const ghostHoverBg = isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.04)';

  const baseStyle = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '6px',
    fontWeight: '600',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.5 : 1,
    transition: 'all 0.18s ease',
    outline: 'none',
    width: fullWidth ? '100%' : 'auto',
    whiteSpace: 'nowrap',
    letterSpacing: '0.01em',
    ...s,
    background: variant === 'ghost' ? 'transparent' : v.background,
    color: variant === 'ghost' ? ghostColor : v.color,
    border: variant === 'ghost' ? `0.5px solid ${ghostBorder}` : v.border || 'none',
    ...style,
  };

  return (
    <button
      type={type}
      style={baseStyle}
      onClick={onClick}
      disabled={disabled}
      onMouseEnter={e => {
        if (disabled) return;
        if (variant === 'ghost') {
          e.currentTarget.style.background = ghostHoverBg;
        } else {
          e.currentTarget.style.opacity = '0.88';
          e.currentTarget.style.transform = 'translateY(-1px)';
        }
      }}
      onMouseLeave={e => {
        e.currentTarget.style.opacity = disabled ? '0.5' : '1';
        e.currentTarget.style.transform = 'none';
        if (variant === 'ghost') e.currentTarget.style.background = 'transparent';
      }}
      onMouseDown={e => {
        if (!disabled) e.currentTarget.style.transform = 'scale(0.97)';
      }}
      onMouseUp={e => {
        e.currentTarget.style.transform = 'none';
      }}
    >
      {children}
    </button>
  );
}