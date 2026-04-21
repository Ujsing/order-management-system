export default function WizardStep({ stepNum, label, isActive, isCompleted, isLast = false }) {
  const circleStyle = {
    width: '22px',
    height: '22px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '10px',
    fontWeight: '800',
    flexShrink: 0,
    transition: 'all 0.25s ease',
    ...(isActive
      ? { background: 'linear-gradient(135deg,#8b5cf6,#3b82f6)', color: '#fff' }
      : isCompleted
      ? { background: 'linear-gradient(135deg,#10b981,#059669)', color: '#fff' }
      : { background: '#1e2035', color: '#374151', border: '0.5px solid rgba(255,255,255,0.1)' }),
  };

  const labelStyle = {
    fontSize: '11px',
    fontWeight: '600',
    whiteSpace: 'nowrap',
    color: isActive || isCompleted ? '#a78bfa' : '#374151',
    transition: 'color 0.25s',
  };

  const lineStyle = {
    flex: 1,
    height: '1px',
    background: isCompleted
      ? 'linear-gradient(90deg,#10b981,#3b82f6)'
      : 'rgba(255,255,255,0.08)',
    margin: '0 6px',
    transition: 'background 0.3s',
    minWidth: '12px',
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center', flex: 1, minWidth: 0 }}>
      {/* Circle */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px' }}>
        <div style={circleStyle}>
          {isCompleted ? '✓' : stepNum}
        </div>
        <span style={labelStyle}>{label}</span>
      </div>

      {/* Connecting line (hidden on last step) */}
      {!isLast && <div style={lineStyle} />}
    </div>
  );
}