import { useNavigate, useLocation } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

const NAV_ITEMS = [
  {
    path: '/',
    label: 'Dashboard',
    icon: (
      <svg viewBox="0 0 20 20" fill="none" width="17" height="17">
        <rect x="2"  y="2"  width="7" height="7" rx="1.5" fill="currentColor" />
        <rect x="11" y="2"  width="7" height="7" rx="1.5" fill="currentColor" opacity="0.4"/>
        <rect x="2"  y="11" width="7" height="7" rx="1.5" fill="currentColor" opacity="0.4"/>
        <rect x="11" y="11" width="7" height="7" rx="1.5" fill="currentColor" opacity="0.4"/>
      </svg>
    ),
  },
  {
    path: '/orders',
    label: 'Orders',
    icon: (
      <svg viewBox="0 0 20 20" fill="none" width="17" height="17">
        <rect x="2" y="4" width="16" height="2" rx="1" fill="currentColor"/>
        <rect x="2" y="9" width="16" height="2" rx="1" fill="currentColor"/>
        <rect x="2" y="14" width="10" height="2" rx="1" fill="currentColor"/>
      </svg>
    ),
  },
  {
    path: '/create-order',
    label: 'New Order',
    icon: (
      <svg viewBox="0 0 20 20" fill="none" width="17" height="17">
        <circle cx="10" cy="10" r="8" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M10 6v8M6 10h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    path: '/notifications',
    label: 'Alerts',
    icon: (
      <svg viewBox="0 0 20 20" fill="none" width="17" height="17">
        <path d="M10 2a6 6 0 0 1 6 6c0 3.5 1.5 5 1.5 5h-15S4 11.5 4 8a6 6 0 0 1 6-6z" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M8 15a2 2 0 0 0 4 0" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
    ),
  },
];

export default function Sidebar() {
  const navigate  = useNavigate();
  const location  = useLocation();
  const { isDark, toggleTheme } = useTheme();

  const bg     = isDark ? '#0d0d1a' : '#f8fafc';
  const border = isDark ? 'rgba(255,255,255,0.07)' : 'rgba(0,0,0,0.07)';

  return (
    <aside
      style={{
        width: '56px',
        background: bg,
        borderRight: `0.5px solid ${border}`,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '12px 0',
        gap: '6px',
        flexShrink: 0,
        zIndex: 10,
      }}
    >
      {/* Logo */}
      <div
        style={{
          width: '32px',
          height: '32px',
          background: 'linear-gradient(135deg,#8b5cf6,#3b82f6)',
          borderRadius: '8px',
          marginBottom: '10px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '14px',
          fontWeight: '900',
          color: '#fff',
          letterSpacing: '-0.02em',
        }}
      >
        O
      </div>

      {/* Nav Items */}
      {NAV_ITEMS.map(item => {
        const isActive = location.pathname === item.path ||
          (item.path !== '/' && location.pathname.startsWith(item.path));

        return (
          <button
            key={item.path}
            title={item.label}
            onClick={() => navigate(item.path)}
            style={{
              width: '36px',
              height: '36px',
              borderRadius: '9px',
              border: 'none',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all 0.18s ease',
              background: isActive
                ? 'linear-gradient(135deg,rgba(139,92,246,0.25),rgba(59,130,246,0.18))'
                : 'transparent',
              color: isActive ? '#a78bfa' : (isDark ? '#374151' : '#9ca3af'),
              boxShadow: isActive ? 'inset 0 0 0 0.5px rgba(139,92,246,0.4)' : 'none',
            }}
            onMouseEnter={e => {
              if (!isActive) {
                e.currentTarget.style.background = isDark
                  ? 'rgba(255,255,255,0.05)'
                  : 'rgba(0,0,0,0.04)';
                e.currentTarget.style.color = isDark ? '#94a3b8' : '#4b5563';
              }
            }}
            onMouseLeave={e => {
              if (!isActive) {
                e.currentTarget.style.background = 'transparent';
                e.currentTarget.style.color = isDark ? '#374151' : '#9ca3af';
              }
            }}
          >
            {item.icon}
          </button>
        );
      })}

      {/* Spacer */}
      <div style={{ flex: 1 }} />

      {/* Theme toggle */}
      <button
        title="Toggle theme"
        onClick={toggleTheme}
        style={{
          width: '36px',
          height: '36px',
          borderRadius: '9px',
          border: 'none',
          cursor: 'pointer',
          background: 'transparent',
          color: isDark ? '#374151' : '#9ca3af',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '15px',
          transition: 'all 0.18s',
        }}
        onMouseEnter={e => { e.currentTarget.style.background = isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.04)'; }}
        onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; }}
      >
        {isDark ? '☀️' : '🌙'}
      </button>
    </aside>
  );
}