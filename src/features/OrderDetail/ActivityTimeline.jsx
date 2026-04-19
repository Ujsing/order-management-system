
import Card from '../../components/ui/Card';
import { useTheme } from '../../context/ThemeContext';
import { formatDateTime } from '../../utils/dateFormatter';

const STEP_COLORS = {
  placed:     '#8b5cf6',
  assigned:   '#3b82f6',
  confirmed:  '#06b6d4',
  processing: '#f59e0b',
  shipped:    '#6366f1',
  delivered:  '#10b981',
  cancelled:  '#ef4444',
};

export default function ActivityTimeline({ order }) {
  const { isDark } = useTheme();
  const lineColor = isDark ? 'rgba(255,255,255,0.07)' : 'rgba(0,0,0,0.07)';
  const titleClr  = isDark ? '#e2e8f0' : '#1e293b';
  const timeClr   = isDark ? '#475569' : '#9ca3af';

  return (
    <Card title="Activity timeline">
      {order.timeline.map((event, i) => {
        const dotColor  = STEP_COLORS[event.status] || '#8b5cf6';
        const isLast    = i === order.timeline.length - 1;

        return (
          <div key={i} style={{ display: 'flex', gap: '10px', marginBottom: isLast ? 0 : '2px' }}>
            {/* Dot + line */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <div
                style={{
                  width: '9px',
                  height: '9px',
                  borderRadius: '50%',
                  background: dotColor,
                  boxShadow: `0 0 6px ${dotColor}55`,
                  flexShrink: 0,
                  marginTop: '3px',
                }}
              />
              {!isLast && (
                <div style={{ width: '1px', flex: 1, background: lineColor, margin: '4px 0', minHeight: '20px' }} />
              )}
            </div>
            {/* Content */}
            <div style={{ paddingBottom: isLast ? 0 : '14px' }}>
              <p style={{ margin: '0 0 2px', fontSize: '12px', fontWeight: '600', color: titleClr }}>
                {event.message}
              </p>
              <p style={{ margin: 0, fontSize: '10px', color: timeClr }}>
                {formatDateTime(event.timestamp)}
              </p>
            </div>
          </div>
        );
      })}
    </Card>
  );
}