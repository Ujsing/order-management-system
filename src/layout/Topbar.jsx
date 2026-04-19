import { useLocation } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

const ROUTE_TITLES = {
  '/':              'Dashboard',
  '/orders':        'Orders',
  '/create-order':  'Create Order',
  '/notifications': 'Notifications',
};

function getTitle(pathname) {
  if (pathname.match(/^\/orders\/.+/)) return 'Order Detail';
  return ROUTE_TITLES[pathname] || 'Overview';
}

export default function Topbar() {
  const location = useLocation();
  const { isDark } = useTheme();

  const bg      = isDark ? '#0d0d1a'                    : '#f8fafc';
  const border  = isDark ? 'rgba(255,255,255,0.07)'     : 'rgba(0,0,0,0.07)';
  const text    = isDark ? '#f1f5f9'                    : '#0f172a';
  const subtext = isDark ? '#475569'                    : '#94a3b8';

  const now = new Date().toLocaleDateString('en-IN', {
    weekday: 'long', month: 'long', day: 'numeric', year: 'numeric',
  });

  return (
    <header
      style={{
        height: '52px',
        background: bg,
        borderBottom: `0.5px solid ${border}`,
        display: 'flex',
        alignItems: 'center',
        padding: '0 20px',
        gap: '12px',
        flexShrink: 0,
      }}
    >
      {/* Title */}
      <div>
        <h1
          style={{
            margin: 0,
            fontSize: '15px',
            fontWeight: '700',
            color: text,
            lineHeight: 1.2,
          }}
        >
          {getTitle(location.pathname)}
        </h1>
        <p style={{ margin: 0, fontSize: '10px', color: subtext }}>{now}</p>
      </div>

      {/* Spacer */}
      <div style={{ flex: 1 }} />

      {/* Search pill (decorative) */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
          background: isDark ? 'rgba(255,255,255,0.04)' : 'rgba(0,0,0,0.04)',
          border: `0.5px solid ${border}`,
          borderRadius: '20px',
          padding: '4px 12px',
          cursor: 'pointer',
        }}
      >
        <svg width="11" height="11" viewBox="0 0 20 20" fill="none">
          <circle cx="9" cy="9" r="6" stroke={subtext} strokeWidth="2"/>
          <path d="M15 15l3 3" stroke={subtext} strokeWidth="2" strokeLinecap="round"/>
        </svg>
        <span style={{ fontSize: '11px', color: subtext }}>Quick search...</span>
        <span style={{ fontSize: '9px', color: subtext, border: `0.5px solid ${border}`, borderRadius: '3px', padding: '1px 4px' }}>⌘K</span>
      </div>

      {/* Notifications bell */}
      <button
        style={{
          width: '32px',
          height: '32px',
          borderRadius: '8px',
          background: 'transparent',
          border: `0.5px solid ${border}`,
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          color: subtext,
          fontSize: '15px',
        }}
      >
        🔔
        {/* unread dot */}
        <span
          style={{
            position: 'absolute',
            top: '6px',
            right: '7px',
            width: '6px',
            height: '6px',
            background: '#ef4444',
            borderRadius: '50%',
            border: `1px solid ${bg}`,
          }}
        />
      </button>

      {/* Avatar */}
      <div
        style={{
          width: '32px',
          height: '32px',
          borderRadius: '50%',
          background: 'linear-gradient(135deg,#8b5cf6,#3b82f6)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '11px',
          fontWeight: '800',
          color: '#fff',
          cursor: 'pointer',
          flexShrink: 0,
        }}
      >
        AD
      </div>
    </header>
  );
}