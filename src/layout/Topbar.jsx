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
        US
      </div>
    </header>
  );
}