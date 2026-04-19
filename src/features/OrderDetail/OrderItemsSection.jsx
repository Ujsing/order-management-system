import Card from '../../components/ui/Card';
import { formatCurrency } from '../../utils/currencyFormatter';
import { useTheme } from '../../context/ThemeContext';

export default function OrderItemsSection({ order }) {
  const { isDark } = useTheme();
  const divider = isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)';

  return (
    <Card title="Order items">
      {order.items.map((item, i) => (
        <div key={i} style={{ display:'flex', justifyContent:'space-between', padding:'6px 0', borderBottom:`0.5px solid ${divider}` }}>
          <span style={{ fontSize:'11px', color: isDark ? '#e2e8f0' : '#1e293b' }}>
            {item.name} <span style={{ color:'#64748b' }}>×{item.quantity}</span>
          </span>
          <span style={{ fontSize:'11px', color:'#94a3b8', fontWeight:'500' }}>
            {formatCurrency(item.price * item.quantity)}
          </span>
        </div>
      ))}
      <div style={{ display:'flex', justifyContent:'space-between', padding:'10px 0 0', marginTop:'4px' }}>
        <span style={{ fontSize:'12px', fontWeight:'700', color: isDark ? '#e2e8f0' : '#0f172a' }}>Total</span>
        <span style={{ fontSize:'14px', fontWeight:'800', color:'#a78bfa' }}>{formatCurrency(order.totalAmount)}</span>
      </div>
    </Card>
  );
}