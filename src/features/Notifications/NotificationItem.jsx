import { useTheme } from '../../context/ThemeContext';
import { getRelativeTime } from '../../utils/dateFormatter';

const ICON_MAP = { alert:'🚨', update:'📦', success:'✅', warning:'⚠️', user:'👤' };
const BG_MAP   = { alert:'rgba(239,68,68,0.15)', update:'rgba(6,182,212,0.15)', success:'rgba(16,185,129,0.15)', warning:'rgba(251,191,36,0.1)', user:'rgba(139,92,246,0.1)' };

export default function NotificationItem({ notification, onMarkRead }) {
  const { isDark } = useTheme();

  const bg        = notification.unread ? (isDark ? '#111120' : '#fff') : 'transparent';
  const border    = notification.unread ? (isDark ? 'rgba(255,255,255,0.07)' : 'rgba(0,0,0,0.07)') : 'transparent';
  const hoverBg   = isDark ? '#161628' : '#f8fafc';
  const titleClr  = isDark ? '#e2e8f0' : '#1e293b';
  const descClr   = isDark ? '#64748b' : '#9ca3af';
  const timeClr   = isDark ? '#374151' : '#d1d5db';

  return (
    <div
      onClick={() => notification.unread && onMarkRead?.(notification.id)}
      style={{
        display:'flex', gap:'10px', padding:'10px', borderRadius:'8px', marginBottom:'4px',
        cursor:'pointer', border:`0.5px solid ${border}`, background: bg,
        opacity: notification.unread ? 1 : 0.6, transition:'all 0.18s ease',
      }}
      onMouseEnter={e => { e.currentTarget.style.background = hoverBg; e.currentTarget.style.opacity = '1'; }}
      onMouseLeave={e => { e.currentTarget.style.background = bg; e.currentTarget.style.opacity = notification.unread ? '1' : '0.6'; }}
    >
      {/* Icon */}
      <div style={{ width:'32px', height:'32px', borderRadius:'8px', background: BG_MAP[notification.type] || 'rgba(255,255,255,0.05)', display:'flex', alignItems:'center', justifyContent:'center', fontSize:'14px', flexShrink:0 }}>
        {ICON_MAP[notification.type] || '📢'}
      </div>
      {/* Content */}
      <div style={{ flex:1, minWidth:0 }}>
        <p style={{ margin:'0 0 2px', fontSize:'12px', fontWeight:'600', color:titleClr }}>{notification.title}</p>
        <p style={{ margin:0, fontSize:'11px', color:descClr, overflow:'hidden', textOverflow:'ellipsis', whiteSpace:'nowrap' }}>{notification.description}</p>
      </div>
      {/* Time */}
      <div style={{ display:'flex', flexDirection:'column', alignItems:'flex-end', gap:'4px', flexShrink:0 }}>
        <span style={{ fontSize:'10px', color:timeClr, whiteSpace:'nowrap' }}>{getRelativeTime(notification.time)}</span>
        {notification.unread && <div style={{ width:'6px', height:'6px', borderRadius:'50%', background:'#8b5cf6', boxShadow:'0 0 5px rgba(139,92,246,0.6)' }} />}
      </div>
    </div>
  );
}