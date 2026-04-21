import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Badge from '../../components/ui/Badge';
import { useTheme } from '../../context/ThemeContext';
import { formatDate } from '../../utils/dateFormatter';

export default function OrderCard({ order, onDelete }) {
  const navigate   = useNavigate();
  const { isDark } = useTheme();
  const [hovered, setHovered] = useState(false);

  const bg       = isDark ? '#111120' : '#ffffff';
  const hoverBg  = isDark ? '#161628' : '#f8fafc';
  const border   = isDark ? 'rgba(255,255,255,0.07)' : 'rgba(0,0,0,0.07)';
  const hoverBdr = hovered ? 'rgba(139,92,246,0.35)' : border;
  const nameClr  = isDark ? '#e2e8f0' : '#1e293b';

  return (
    <div 
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="order-card-wrapper"
      style={{
        overflowX: 'auto',
        overflowY: 'visible',
        marginBottom: '6px',
        borderRadius: '10px',
        scrollbarWidth: 'none',
        scrollbarColor: isDark ? '#475569 #1e1e2e' : '#cbd5e1 #f1f5f9',
      }}
    >
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '80px 100px 100px 100px 110px 90px 70px',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '12px',
          padding: '12px 16px',
          background: hovered ? hoverBg : bg,
          border: `0.5px solid ${hoverBdr}`,
          borderRadius: '10px',
          cursor: 'pointer',
          transition: 'all 0.18s ease',
          minWidth: 'min-content',
        }}
      >
        {/* Order ID */}
        <span
          onClick={() => navigate(`/orders/${order.id.replace('#','')}`)}
          style={{ fontSize: '12px', fontWeight: '700', color: '#a78bfa' }}
        >
          {order.id}
        </span>

        {/* Customer name */}
        <span
          onClick={() => navigate(`/orders/${order.id.replace('#','')}`)}
          style={{ 
            fontSize: '12px', 
            color: nameClr, 
            overflow: 'hidden', 
            textOverflow: 'ellipsis', 
            whiteSpace: 'nowrap' 
          }}
        >
          {order.customerName}
        </span>

        {/* Customer Phone */}
        <span
          style={{ 
            fontSize: '12px', 
            color: nameClr, 
            overflow: 'hidden', 
            textOverflow: 'ellipsis', 
            whiteSpace: 'nowrap' 
          }}
        >
          {order.customerPhone}
        </span>

        {/* Priority */}
        <div className="order-card__priority">
          <Badge priority={order.priority} />
        </div>

        {/* Status */}
        <div>
          <Badge status={order.status} showDot />
        </div>

        {/* Date */}
        <span
          className="order-card__date"
          style={{ 
            fontSize: '10px', 
            color: isDark ? '#475569' : '#9ca3af',
            textAlign: 'left'
          }}
        >
          {formatDate(order.date)}
        </span>

        {/* Quick actions */}
        <div style={{ 
          display: 'flex', 
          gap: '6px', 
          opacity: hovered ? 1 : 0.5, 
          transition: 'opacity 0.2s ease' 
        }}>
          {[
            { icon: '👁', title: 'View', action: () => navigate(`/orders/${order.id.replace('#','')}`), danger: false },
            { icon: '✕', title: 'Delete', action: () => onDelete?.(order.id), danger: true },
          ].map(btn => (
            <button
              key={btn.title}
              title={btn.title}
              onClick={e => { e.stopPropagation(); btn.action(); }}
              style={{
                width: '28px', 
                height: '28px', 
                borderRadius: '6px',
                background: isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.05)',
                border: 'none', 
                cursor: 'pointer', 
                fontSize: '12px',
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                color: btn.danger ? '#f87171' : (isDark ? '#94a3b8' : '#6b7280'),
                transition: 'all 0.15s ease',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = btn.danger 
                  ? 'rgba(248,113,113,0.15)' 
                  : (isDark ? 'rgba(255,255,255,0.15)' : 'rgba(0,0,0,0.1)');
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = isDark 
                  ? 'rgba(255,255,255,0.08)' 
                  : 'rgba(0,0,0,0.05)';
              }}
            >
              {btn.icon}
            </button>
          ))}
        </div>
      </div>

      {/* Add responsive styles */}
      <style>{`
        /* Large screens - no scroll, everything visible */
        @media (min-width: 1025px) {
          .order-card-wrapper {
            overflow-x: visible !important;
          }
        }

        /* Tablet and mobile - enable horizontal scroll */
        @media (max-width: 1024px) {
          .order-card-wrapper {
            overflow-x: auto;
            -webkit-overflow-scrolling: touch;
          }
          
          /* Hide scrollbar for cleaner look (optional) */
          .order-card-wrapper::-webkit-scrollbar {
            height: 4px;
          }
          
          .order-card-wrapper::-webkit-scrollbar-track {
            background: ${isDark ? '#1e1e2e' : '#f1f5f9'};
            border-radius: 10px;
          }
          
          .order-card-wrapper::-webkit-scrollbar-thumb {
            background: ${isDark ? '#475569' : '#cbd5e1'};
            border-radius: 10px;
          }
          
          .order-card-wrapper::-webkit-scrollbar-thumb:hover {
            background: ${isDark ? '#64748b' : '#94a3b8'};
          }
        }
      `}</style>
    </div>
  );
}