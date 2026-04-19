import { useState } from 'react';
import NotificationGroup from './NotificationGroup';
import Button from '../../components/ui/Button';
import { mockNotifications } from '../../data/mockNotifications';
import { useTheme } from '../../context/ThemeContext';

export default function Notifications() {
  const [notifications, setNotifications] = useState(mockNotifications);
  const { isDark } = useTheme();

  const unreadCount = notifications.filter(n => n.unread).length;

  const markRead = id => setNotifications(prev => prev.map(n => n.id === id ? { ...n, unread:false } : n));
  const markAllRead = () => setNotifications(prev => prev.map(n => ({ ...n, unread:false })));

  const grouped = notifications.reduce((acc, n) => {
    const g = n.timeGroup || 'older';
    if (!acc[g]) acc[g] = [];
    acc[g].push(n);
    return acc;
  }, {});

  return (
    <div>
      <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:'16px' }}>
        <div>
          <p style={{ margin:0, fontSize:'12px', color: isDark ? '#475569' : '#9ca3af' }}>
            {unreadCount > 0 ? `${unreadCount} unread` : 'All caught up!'}
          </p>
        </div>
        {unreadCount > 0 && (
          <Button variant="ghost" size="sm" onClick={markAllRead}>Mark all read</Button>
        )}
      </div>

      {['today','yesterday','older'].map(group =>
        grouped[group] && (
          <NotificationGroup
            key={group}
            timeGroup={group.charAt(0).toUpperCase() + group.slice(1)}
            notifications={grouped[group]}
            onMarkRead={markRead}
          />
        )
      )}

      {notifications.length === 0 && (
        <div style={{ textAlign:'center', padding:'60px 0' }}>
          <div style={{ fontSize:'40px', marginBottom:'12px' }}>🔔</div>
          <p style={{ fontSize:'14px', fontWeight:'600', color: isDark ? '#e2e8f0' : '#1e293b', margin:0 }}>No notifications</p>
        </div>
      )}
    </div>
  );
}
