const COLOR_MAP = {
  violet: {
    gradient: 'linear-gradient(135deg, #1a1040 0%, #0f172a 100%)',
    border:   'rgba(139,92,246,0.35)',
    accent:   '#a78bfa',
    glow:     '#8b5cf6',
  },
  blue: {
    gradient: 'linear-gradient(135deg, #0c1f3f 0%, #0f172a 100%)',
    border:   'rgba(59,130,246,0.35)',
    accent:   '#60a5fa',
    glow:     '#3b82f6',
  },
  cyan: {
    gradient: 'linear-gradient(135deg, #071e2a 0%, #0f172a 100%)',
    border:   'rgba(6,182,212,0.35)',
    accent:   '#22d3ee',
    glow:     '#06b6d4',
  },
  green: {
    gradient: 'linear-gradient(135deg, #0a2818 0%, #0f172a 100%)',
    border:   'rgba(16,185,129,0.35)',
    accent:   '#34d399',
    glow:     '#10b981',
  },
  red: {
    gradient: 'linear-gradient(135deg, #2a0e0e 0%, #0f172a 100%)',
    border:   'rgba(239,68,68,0.35)',
    accent:   '#f87171',
    glow:     '#ef4444',
  },
  amber: {
    gradient: 'linear-gradient(135deg, #2a1a04 0%, #0f172a 100%)',
    border:   'rgba(245,158,11,0.35)',
    accent:   '#fbbf24',
    glow:     '#f59e0b',
  },
};

export default function StatCard({
  label,
  value,
  color = 'violet',
  trend,
  trendUp,
  icon,
}) {
  const c = COLOR_MAP[color] || COLOR_MAP.violet;

  return (
    <div
      style={{
        background: c.gradient,
        border: `0.5px solid ${c.border}`,
        borderRadius: '10px',
        padding: '14px',
        color: '#e2e8f0',
        position: 'relative',
        overflow: 'hidden',
        minWidth: 0,
      }}
    >
      {/* Glow blob */}
      <div
        style={{
          position: 'absolute',
          width: '50px',
          height: '50px',
          borderRadius: '50%',
          top: '-14px',
          right: '-10px',
          background: c.glow,
          opacity: 0.22,
          filter: 'blur(16px)',
          pointerEvents: 'none',
        }}
      />

      {/* Label */}
      <div
        style={{
          fontSize: '10px',
          fontWeight: '700',
          color: c.accent,
          marginBottom: '6px',
          textTransform: 'uppercase',
          letterSpacing: '0.07em',
          opacity: 0.9,
          display: 'flex',
          alignItems: 'center',
          gap: '5px',
        }}
      >
        {icon && <span style={{ fontSize: '12px' }}>{icon}</span>}
        {label}
      </div>

      {/* Value */}
      <div
        style={{
          fontSize: '26px',
          fontWeight: '800',
          lineHeight: 1,
          color: '#f1f5f9',
          letterSpacing: '-0.02em',
        }}
      >
        {value}
      </div>

      {/* Trend */}
      {trend && (
        <div
          style={{
            marginTop: '8px',
            fontSize: '10px',
            fontWeight: '600',
            color: trendUp ? '#34d399' : '#f87171',
          }}
        >
          {trendUp ? '▲' : '▼'} {trend}
        </div>
      )}
    </div>
  );
}