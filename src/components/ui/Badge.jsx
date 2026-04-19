const STATUS_CONFIG = {
  pending:      { bg: 'rgba(251,191,36,0.15)',  color: '#fbbf24', border: 'rgba(251,191,36,0.35)',  label: 'Pending' },
  'in-progress':{ bg: 'rgba(6,182,212,0.15)',   color: '#22d3ee', border: 'rgba(6,182,212,0.35)',   label: 'In Progress' },
  completed:    { bg: 'rgba(16,185,129,0.15)',  color: '#34d399', border: 'rgba(16,185,129,0.35)',  label: 'Completed' },
  cancelled:    { bg: 'rgba(239,68,68,0.15)',   color: '#f87171', border: 'rgba(239,68,68,0.35)',   label: 'Cancelled' },
  confirmed:    { bg: 'rgba(59,130,246,0.15)',  color: '#60a5fa', border: 'rgba(59,130,246,0.35)',  label: 'Confirmed' },
  shipped:      { bg: 'rgba(139,92,246,0.15)',  color: '#a78bfa', border: 'rgba(139,92,246,0.35)',  label: 'Shipped' },
};

const PRIORITY_CONFIG = {
  high:   { bg: 'rgba(239,68,68,0.15)',  color: '#f87171', border: 'rgba(239,68,68,0.35)',  label: 'HIGH' },
  medium: { bg: 'rgba(251,191,36,0.15)', color: '#fbbf24', border: 'rgba(251,191,36,0.35)', label: 'MED' },
  low:    { bg: 'rgba(16,185,129,0.15)', color: '#34d399', border: 'rgba(16,185,129,0.35)', label: 'LOW' },
};

/**
 * <Badge status="pending" />
 * <Badge status="in-progress" showDot />
 * <Badge priority="high" />
 * <Badge priority="medium" showDot />
 */
export default function Badge({ status, priority, showDot = false, style = {} }) {
  const config = status ? STATUS_CONFIG[status] : PRIORITY_CONFIG[priority];

  if (!config) return null;

  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '5px',
        padding: priority ? '3px 8px' : '4px 10px',
        borderRadius: '20px',
        fontSize: priority ? '9px' : '11px',
        fontWeight: '700',
        letterSpacing: priority ? '0.06em' : '0.02em',
        background: config.bg,
        color: config.color,
        border: `0.5px solid ${config.border}`,
        whiteSpace: 'nowrap',
        ...style,
      }}
    >
      {showDot && (
        <span
          style={{
            width: '5px',
            height: '5px',
            borderRadius: '50%',
            background: config.color,
            flexShrink: 0,
            boxShadow: `0 0 4px ${config.color}`,
          }}
        />
      )}
      {config.label}
    </span>
  );
}


