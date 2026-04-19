import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Layout from './layout/Layout';
import DashboardPage     from './pages/DashboardPage';
import OrdersPage        from './pages/OrdersPage';
import OrderDetailPage   from './pages/OrderDetailPage';
import CreateOrderPage   from './pages/CreateOrderPage';
import NotificationsPage from './pages/NotificationsPage';

import './App.css';

export default function App() {
  return (
    // ThemeContext wraps EVERYTHING — any component can call useTheme()
    <ThemeProvider>
      <Router>
        {/* Layout gives us Sidebar + Topbar around all pages */}
        <Layout>
          <Routes>
            <Route path="/"               element={<DashboardPage />} />
            <Route path="/orders"         element={<OrdersPage />} />
            <Route path="/orders/:id"     element={<OrderDetailPage />} />
            <Route path="/create-order"   element={<CreateOrderPage />} />
            <Route path="/notifications"  element={<NotificationsPage />} />

            {/* 404 fallback */}
            <Route path="*" element={
              <div style={{ textAlign:'center', padding:'60px' }}>
                <p style={{ fontSize:'40px', margin:'0 0 12px' }}>🔍</p>
                <p style={{ color:'#f1f5f9', fontWeight:'700', fontSize:'16px' }}>Page not found</p>
                <p style={{ color:'#475569', fontSize:'12px' }}>The route you visited does not exist.</p>
              </div>
            } />
          </Routes>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}