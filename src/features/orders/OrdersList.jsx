import { useState } from 'react';
import OrderToolbar from './OrderToolbar';
import OrderCard from './OrderCard';
import { mockOrders } from '../../data/mockOrders';
import { useTheme } from '../../context/ThemeContext';

// Empty State
function EmptyState() {
  const { isDark } = useTheme();
  return (
    <div style={{ textAlign: 'center', padding: '60px 0' }}>
      <div style={{ fontSize: '40px', marginBottom: '12px' }}>📋</div>
      <p style={{ fontSize: '14px', fontWeight: '600', color: isDark ? '#e2e8f0' : '#1e293b', margin: '0 0 4px' }}>
        No orders found
      </p>
      <p style={{ fontSize: '12px', color: '#475569', margin: 0 }}>
        Try adjusting your search or filters
      </p>
    </div>
  );
}

export default function OrdersList() {
  const [orders, setOrders]   = useState(mockOrders);
  const [search, setSearch]   = useState('');
  const [filters, setFilters] = useState({ status: '', priority: '', date: 'all' });

  // Filter logic
  const filtered = orders.filter(order => {
    const q = search.toLowerCase();
    const matchSearch =
      !q ||
      order.id.toLowerCase().includes(q) ||
      order.customerName.toLowerCase().includes(q) ||
      order.customerEmail.toLowerCase().includes(q);

    const matchStatus   = !filters.status   || order.status   === filters.status;
    const matchPriority = !filters.priority || order.priority === filters.priority;

    return matchSearch && matchStatus && matchPriority;
  });

  const handleDelete = id => {
    setOrders(prev => prev.filter(o => o.id !== id));
  };

  const { isDark } = useTheme();
  const subtext = isDark ? '#475569' : '#94a3b8';

  return (
    <div>
      <p style={{ fontSize: '12px', color: subtext, margin: '0 0 14px' }}>
        {filtered.length} of {orders.length} orders
      </p>

      <OrderToolbar
        search={search}
        onSearch={setSearch}
        filters={filters}
        onFilterChange={setFilters}
      />

      {filtered.length === 0
        ? <EmptyState />
        : filtered.map(order => (
            <OrderCard key={order.id} order={order} onDelete={handleDelete} />
          ))
      }
    </div>
  );
}