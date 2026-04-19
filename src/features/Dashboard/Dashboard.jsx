import { useState } from 'react';
import StatCardsSection from './StatCardsSection';
import ChartsSection from './ChartsSection';
import RecentOrdersSection from './RecentOrdersSection';
import { mockOrders } from '../../data/mockOrders';
 
export default function Dashboard() {
  const [orders] = useState(mockOrders);
 
  const stats = {
    total:      orders.length,
    pending:    orders.filter(o => o.status === 'pending').length,
    inProgress: orders.filter(o => o.status === 'in-progress').length,
    completed:  orders.filter(o => o.status === 'completed').length,
    cancelled:  orders.filter(o => o.status === 'cancelled').length,
  };
 
  return (
    <div>
      <StatCardsSection stats={stats} />
      <ChartsSection orders={orders} />
      <RecentOrdersSection orders={orders.slice(0, 4)} />
    </div>
  );
}