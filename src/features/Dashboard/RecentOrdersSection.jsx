import { useNavigate } from 'react-router-dom';
import Card from '../../components/ui/Card';
import Badge from '../../components/ui/Badge';
import { useTheme } from '../../context/ThemeContext';
 
export default function RecentOrdersSection({ orders }) {
  const navigate = useNavigate();
  const { isDark } = useTheme();
 
  const divider = isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)';
  const hoverBg = isDark ? 'rgba(255,255,255,0.03)' : 'rgba(0,0,0,0.02)';
 
  return (
    <Card title="Recent orders">
      {orders.length === 0 && (
        <p style={{ color: '#475569', fontSize: '12px', textAlign: 'center', padding: '12px 0' }}>
          No recent orders
        </p>
      )}
      {orders.map((order, i) => (
        <div
          key={order.id}
          onClick={() => navigate(`/orders/${order.id.replace('#', '')}`)}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            padding: '8px 4px',
            borderBottom: i < orders.length - 1 ? `0.5px solid ${divider}` : 'none',
            cursor: 'pointer',
            borderRadius: '6px',
            transition: 'background 0.15s',
          }}
          onMouseEnter={e => { e.currentTarget.style.background = hoverBg; }}
          onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; }}
        >
          <span style={{ fontSize: '11px', fontWeight: '700', color: '#a78bfa', width: '72px' }}>
            {order.id}
          </span>
          <span style={{ fontSize: '11px', color: isDark ? '#e2e8f0' : '#1e293b', flex: 1 }}>
            {order.customerName}
          </span>
          <Badge status={order.status} showDot />
          <span style={{ fontSize: '10px', color: '#475569', width: '60px', textAlign: 'right' }}>
            {order.date}
          </span>
        </div>
      ))}
    </Card>
  );
}