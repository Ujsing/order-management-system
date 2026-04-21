import { useParams } from 'react-router-dom';
import OrderHeader from './OrderHeader';
import StatusTracker from './StatusTracker';
import CustomerInfoSection from './CustomerInfoSection';
import OrderItemsSection from './OrderItemsSection';
import ActivityTimeline from './ActivityTimeline';
import NotesSection from './NotesSection';
import { mockOrders } from '../../data/mockOrders';
import { useTheme } from '../../context/ThemeContext';

function NotFound() {
  const { isDark } = useTheme();
  return (
    <div style={{ textAlign:'center', padding:'60px 0' }}>
      <div style={{ fontSize:'40px', marginBottom:'12px' }}>🔍</div>
      <p style={{ fontSize:'14px', fontWeight:'600', color: isDark ? '#e2e8f0' : '#1e293b', margin:'0 0 4px' }}>Order not found</p>
      <p style={{ fontSize:'12px', color:'#475569', margin:0 }}>The order ID you are looking for does not exist.</p>
    </div>
  );
}

export default function OrderDetail() {
  const { id } = useParams();
  const formattedId = id ? `#${id}` : '';
  const order = mockOrders.find(o => o.id === formattedId) || mockOrders[0];

  if (!order) return <NotFound />;

  return (
    <div>
      <OrderHeader order={order} />
      <StatusTracker order={order} />

      {/* className="detail-grid" → 2 cols desktop → 1 col mobile */}
      <div className="detail-grid">
        <div>
          <CustomerInfoSection order={order} />
          <OrderItemsSection order={order} />
        </div>
        <div>
          <ActivityTimeline order={order} />
          <NotesSection order={order} />
        </div>
      </div>
    </div>
  );
}