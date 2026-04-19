import NotificationItem from './NotificationItem';
import { useTheme } from '../../context/ThemeContext';

export default function NotificationGroup({ timeGroup, notifications, onMarkRead }) {
  const { isDark } = useTheme();
  return (
    <div>
      <p style={{ fontSize:'10px', fontWeight:'700', color: isDark ? '#374151' : '#d1d5db', textTransform:'uppercase', letterSpacing:'0.08em', margin:'12px 0 6px' }}>
        {timeGroup}
      </p>
      {notifications.map(n => (
        <NotificationItem key={n.id} notification={n} onMarkRead={onMarkRead} />
      ))}
    </div>
  );
}