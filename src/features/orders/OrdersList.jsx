import { useEffect, useState } from 'react';
import OrderToolbar from './OrderToolbar';
import OrderCard from './OrderCard';
import { mockOrders } from '../../data/mockOrders';
import { useDebounce } from '../../hooks/usedebounce';

function EmptyState() {
  return (
    <div className="text-center py-16">
      <div className="text-4xl mb-3">📋</div>
      <p className="text-sm font-semibold text-slate-800 dark:text-slate-200 mb-1">
        No orders found
      </p>
      <p className="text-xs text-slate-400">
        Try adjusting your search or filters
      </p>
    </div>
  );
}

export default function OrdersList() {
  const [orders, setOrders]   = useState(mockOrders);
  const [search, setSearch]   = useState('');
  const  debounceSearch = useDebounce(search, 500)
  const [filters, setFilters] = useState({ status: '', priority: '', date: 'all' });

  const loadOrders = () => {
    const storedOrders = localStorage.getItem('orders');
    let allOrders = [];
    
    if (storedOrders) {
      const parsedStoredOrders = JSON.parse(storedOrders);
      // Combine mock orders with stored orders
      allOrders = [...mockOrders, ...parsedStoredOrders];
    } else {
      // If no stored orders, just use mock orders
      allOrders = [...mockOrders];
    }
    
    const uniqueOrders = Array.from(new Map(allOrders.map(order => [order.id, order])).values());
    
    // Sort orders by date (newest first)
    uniqueOrders.sort((a, b) => new Date(b.createdAt || b.date) - new Date(a.createdAt || a.date));
    
    setOrders(uniqueOrders);
  };

    useEffect(() => {
    loadOrders();
  }, []);


  const filtered = orders.filter(order => {
    // remove search and add debounceSearch custopm hook
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

  const handleDelete = id => {const updated = setOrders(prev => prev.filter(o => o.id !== id))
                              localStorage.setItem('order', JSON.stringify(updated))
                              return updated

  };


  return (
    <div className="w-full min-w-0">

      {/* Order count */}
      <p className="text-xs text-slate-400 dark:text-slate-500 mb-3.5">
        {filtered.length} of {orders.length} orders
      </p>

      <OrderToolbar
        search={search}
        onSearch={setSearch}
        filters={filters}
        onFilterChange={setFilters}
      />

      {/* List — full width on all screens */}
      <div className="flex flex-col gap-0">
        {filtered.length === 0
          ? <EmptyState />
          : filtered.map(order => (
              <OrderCard key={order.id} order={order} onDelete={handleDelete} />
            ))
        }
      </div>

    </div>
  );
}