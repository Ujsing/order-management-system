import Badge from '../../components/ui/Badge';
import Button from '../../components/ui/Button';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';
import { TEAM_MEMBERS } from '../../data/users';
import { formatDate } from '../../utils/dateFormatter';

export default function OrderHeader({ order }) {
  const navigate = useNavigate();
  const { isDark } = useTheme();

  const assignee = TEAM_MEMBERS.find(m => m.value === order.assignedTo);

  return (
    <div
      style={{
        background: 'linear-gradient(135deg, #1a1040 0%, #0f172a 100%)',
        border: '0.5px solid rgba(139,92,246,0.3)',
        borderRadius: '10px',
        padding: '16px',
        marginBottom: '10px',
      }}
    >
      {/* Top row */}
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '14px' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '4px' }}>
            <button
              onClick={() => navigate('/orders')}
              style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#64748b', fontSize: '13px', padding: 0 }}
            >
              ← Back
            </button>
            <span style={{ color: '#374151', fontSize: '12px' }}>/</span>
            <span style={{ fontSize: '13px', color: '#64748b' }}>Orders</span>
          </div>
          <h2 style={{ margin: '0 0 4px', fontSize: '22px', fontWeight: '800', color: '#f1f5f9', letterSpacing: '-0.02em' }}>
            {order.id}
          </h2>
          <p style={{ margin: 0, fontSize: '11px', color: '#64748b' }}>
            Placed: {formatDate(order.date)} &nbsp;·&nbsp; Assigned to: {assignee?.label || order.assignedTo}
          </p>
        </div>

        <div style={{ display: 'flex', gap: '8px', alignItems: 'center', flexWrap: 'wrap', justifyContent: 'flex-end' }}>
          <Badge status={order.status} showDot />
          <Badge priority={order.priority} />
          <Button variant="ghost" size="sm">Edit</Button>
          <Button variant="danger" size="sm">Cancel</Button>
        </div>
      </div>
    </div>
  );
}