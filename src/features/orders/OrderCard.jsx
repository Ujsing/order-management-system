import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Badge from '../../components/ui/Badge';
import { useTheme } from '../../context/ThemeContext';
import { formatDate } from '../../utils/dateFormatter';

export default function OrderCard({ order, onDelete }) {
  const navigate  = useNavigate();
  const { isDark } = useTheme();
  const [hovered, setHovered] = useState(false);

  const bg        = isDark ? '#111120'                    : '#ffffff';
  const hoverBg   = isDark ? '#161628'                    : '#f8fafc';
  const border    = isDark ? 'rgba(255,255,255,0.07)'     : 'rgba(0,0,0,0.07)';
  const hoverBdr  = hovered ? 'rgba(139,92,246,0.35)'    : border;
  const idColor   = '#a78bfa';
  const nameColor = isDark ? '#e2e8f0'                    : '#1e293b';
  const dateColor = isDark ? '#475569'                    : '#9ca3af';

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        padding: '11px 14px',
        background: hovered ? hoverBg : bg,
        border: `0.5px solid ${hoverBdr}`,
        borderRadius: '10px',
        marginBottom: '6px',
        cursor: 'pointer',
        transition: 'all 0.18s ease',
      }}
    >
      {/* Order ID */}
      <span
        style={{ fontSize: '12px', fontWeight: '700', color: idColor, width: '72px', flexShrink: 0 }}
        onClick={() => navigate(`/orders/${order.id.replace('#', '')}`)}
      >
        {order.id}
      </span>

      {/* Customer name */}
      <span
        style={{ fontSize: '12px', color: nameColor, flex: 1, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}
        onClick={() => navigate(`/orders/${order.id.replace('#', '')}`)}
      >
        {order.customerName}
      </span>

      {/* Priority */}
      <Badge priority={order.priority} />

      {/* Status */}
      <Badge status={order.status} showDot />

      {/* Date */}
      <span style={{ fontSize: '10px', color: dateColor, width: '72px', textAlign: 'right', flexShrink: 0 }}>
        {formatDate(order.date)}
      </span>

      {/* Quick actions — visible on hover */}
      <div
        style={{
          display: 'flex',
          gap: '4px',
          opacity: hovered ? 1 : 0,
          transition: 'opacity 0.15s',
          flexShrink: 0,
        }}
      >
        {[
          { icon: '👁', title: 'View',   action: () => navigate(`/orders/${order.id.replace('#', '')}`) },
          { icon: '✏️', title: 'Edit',   action: () => navigate(`/orders/${order.id.replace('#', '')}/edit`) },
          { icon: '✕',  title: 'Delete', action: () => onDelete?.(order.id), danger: true },
        ].map(btn => (
          <button
            key={btn.title}
            title={btn.title}
            onClick={e => { e.stopPropagation(); btn.action(); }}
            style={{
              width: '26px',
              height: '26px',
              borderRadius: '6px',
              background: isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.05)',
              border: 'none',
              cursor: 'pointer',
              fontSize: '11px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: btn.danger ? '#f87171' : (isDark ? '#94a3b8' : '#6b7280'),
              transition: 'background 0.15s',
            }}
            onMouseEnter={e => { e.currentTarget.style.background = btn.danger ? 'rgba(239,68,68,0.15)' : (isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.08)'); }}
            onMouseLeave={e => { e.currentTarget.style.background = isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.05)'; }}
          >
            {btn.icon}
          </button>
        ))}
      </div>
    </div>
  );
}