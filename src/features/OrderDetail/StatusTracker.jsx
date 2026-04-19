import { useTheme } from '../../context/ThemeContext';

const STEPS = ['Placed', 'Confirmed', 'Processing', 'Shipped', 'Delivered'];
const STATUS_TO_STEP = { pending:0, confirmed:1, processing:2, shipped:3, delivered:4, cancelled:-1, 'in-progress':2 };

export default function StatusTracker({ order }) {
  const { isDark } = useTheme();
  const currentStep = STATUS_TO_STEP[order.status] ?? 0;
  const isCancelled = order.status === 'cancelled';

  const bg = isDark ? '#111120' : '#ffffff';
  const cardBorder = isDark ? 'rgba(255,255,255,0.07)' : 'rgba(0,0,0,0.07)';

  return (
    <div
      style={{
        background: bg,
        border: `0.5px solid ${cardBorder}`,
        borderRadius: '10px',
        padding: '16px',
        marginBottom: '10px',
      }}
    >
      <div style={{ fontSize: '11px', fontWeight: '700', color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '16px' }}>
        Order Progress
      </div>
      <div style={{ display: 'flex', alignItems: 'flex-start' }}>
        {STEPS.map((step, idx) => {
          const isActive    = idx === currentStep && !isCancelled;
          const isCompleted = idx < currentStep && !isCancelled;
        //   const stepColor   = isCancelled ? '#ef4444' : isCompleted || isActive ? '#8b5cf6' : undefined;

          return (
            <div key={step} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative' }}>
              {/* Connecting line (left side) */}
              {idx > 0 && (
                <div
                  style={{
                    position: 'absolute',
                    top: '11px',
                    right: '50%',
                    width: '100%',
                    height: '1.5px',
                    background: isCompleted
                      ? 'linear-gradient(90deg,#8b5cf6,#3b82f6)'
                      : (isDark ? 'rgba(255,255,255,0.07)' : 'rgba(0,0,0,0.07)'),
                    zIndex: 0,
                  }}
                />
              )}

              {/* Circle */}
              <div
                style={{
                  width: '24px',
                  height: '24px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '10px',
                  fontWeight: '800',
                  zIndex: 1,
                  flexShrink: 0,
                  transition: 'all 0.25s ease',
                  background: isCompleted
                    ? 'linear-gradient(135deg,#8b5cf6,#3b82f6)'
                    : isActive
                    ? 'linear-gradient(135deg,#8b5cf6,#3b82f6)'
                    : (isDark ? '#1e2035' : '#e2e8f0'),
                  color: (isCompleted || isActive) ? '#fff' : '#64748b',
                  boxShadow: isActive ? '0 0 12px rgba(139,92,246,0.5)' : 'none',
                  border: (!isCompleted && !isActive) ? `0.5px solid ${isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'}` : 'none',
                }}
              >
                {isCompleted ? '✓' : isCancelled && idx === 0 ? '✕' : idx + 1}
              </div>

              {/* Label */}
              <span
                style={{
                  fontSize: '9px',
                  marginTop: '6px',
                  textAlign: 'center',
                  fontWeight: isActive ? '700' : '500',
                  color: isActive || isCompleted ? '#a78bfa' : (isDark ? '#374151' : '#9ca3af'),
                }}
              >
                {step}
              </span>
            </div>
          );
        })}
      </div>

      {isCancelled && (
        <div style={{ marginTop: '12px', padding: '8px 12px', background: 'rgba(239,68,68,0.1)', borderRadius: '6px', border: '0.5px solid rgba(239,68,68,0.3)' }}>
          <span style={{ fontSize: '11px', color: '#f87171' }}>⚠ This order has been cancelled</span>
        </div>
      )}
    </div>
  );
}