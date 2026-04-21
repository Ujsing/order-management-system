import { useNavigate, useLocation } from 'react-router-dom';
import Sidebar from './Sidebar';
import Topbar from './Topbar';
import { useTheme } from '../context/ThemeContext';

// Bottom nav icons (same as sidebar, reused here for mobile)
const NAV_ITEMS = [
  {
    path: '/',
    label: 'Home',
    icon: (
      <svg viewBox="0 0 20 20" fill="none" width="18" height="18">
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
      <svg viewBox="0 0 20 20" fill="none" width="18" height="18">
        <rect x="2" y="4" width="16" height="2" rx="1" fill="currentColor"/>
        <rect x="2" y="9" width="16" height="2" rx="1" fill="currentColor"/>
        <rect x="2" y="14" width="10" height="2" rx="1" fill="currentColor"/>
      </svg>
    ),
  },
  {
    path: '/create-order',
    label: 'New',
    icon: (
      <svg viewBox="0 0 20 20" fill="none" width="18" height="18">
        <circle cx="10" cy="10" r="8" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M10 6v8M6 10h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    path: '/notifications',
    label: 'Alerts',
    icon: (
      <svg viewBox="0 0 20 20" fill="none" width="18" height="18">
        <path d="M10 2a6 6 0 0 1 6 6c0 3.5 1.5 5 1.5 5h-15S4 11.5 4 8a6 6 0 0 1 6-6z" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M8 15a2 2 0 0 0 4 0" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
    ),
  },
];

export default function Layout({ children }) {
  const { isDark } = useTheme();
  const navigate   = useNavigate();
  const location   = useLocation();

  const bg = isDark ? '#070711' : '#f1f5f9';

  return (
    <div className="app-shell" style={{ background: bg }}>

      {/* ── Sidebar (hidden on mobile via CSS) ── */}
      <div className="app-shell__sidebar">
        <Sidebar />
      </div>

      {/* ── Main body ── */}
      <div className="app-shell__body">
        <Topbar />
        <main className="app-shell__main">
          {children}
        </main>
      </div>

      {/* ── Bottom nav (visible on mobile only via CSS) ── */}
      <nav className="bottom-nav" style={{ background: isDark ? '#0d0d1a' : '#f8fafc' }}>
        {NAV_ITEMS.map(item => {
          const isActive =
            location.pathname === item.path ||
            (item.path !== '/' && location.pathname.startsWith(item.path));

          return (
            <button
              key={item.path}
              onClick={() => navigate(item.path)}
              className={`bottom-nav__item ${isActive ? 'active' : 'inactive'}`}
              style={{
                color: isActive ? '#a78bfa' : (isDark ? '#374151' : '#9ca3af'),
                background: isActive
                  ? 'linear-gradient(135deg,rgba(139,92,246,0.12),rgba(59,130,246,0.08))'
                  : 'transparent',
              }}
            >
              {item.icon}
              <span className="bottom-nav__label">{item.label}</span>
            </button>
          );
        })}
      </nav>

    </div>
  );
}