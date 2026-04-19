import { useEffect } from 'react';
import { useTheme } from '../../context/ThemeContext';
import Button from './Button';

/**
 * <Modal
 *   isOpen={showModal}
 *   onClose={() => setShowModal(false)}
 *   title="Confirm Delete"
 *   footer={<Button variant="danger" onClick={handleDelete}>Delete</Button>}
 * >
 *   <p>Are you sure?</p>
 * </Modal>
 */
export default function Modal({
  isOpen,
  onClose,
  title,
  children,
  footer,
  size = 'md',   // 'sm' | 'md' | 'lg'
}) {
  const { isDark } = useTheme();

  // Lock scroll when open
  useEffect(() => {
    if (isOpen) document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  // Close on Escape
  useEffect(() => {
    const handler = e => { if (e.key === 'Escape') onClose?.(); };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [onClose]);

  if (!isOpen) return null;

  const widthMap = { sm: '360px', md: '480px', lg: '640px' };
  const bg       = isDark ? '#111120' : '#ffffff';
  const border   = isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.08)';
  const titleClr = isDark ? '#f1f5f9' : '#0f172a';
  const headerBg = isDark ? '#0d0d1a' : '#f8fafc';
  const divider  = isDark ? 'rgba(255,255,255,0.07)' : 'rgba(0,0,0,0.07)';

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 1000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '16px',
        background: 'rgba(0,0,0,0.6)',
        backdropFilter: 'blur(4px)',
        WebkitBackdropFilter: 'blur(4px)',
      }}
      onClick={e => { if (e.target === e.currentTarget) onClose?.(); }}
    >
      <div
        style={{
          background: bg,
          border: `0.5px solid ${border}`,
          borderRadius: '12px',
          width: '100%',
          maxWidth: widthMap[size],
          maxHeight: '90vh',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
          boxShadow: '0 24px 64px rgba(0,0,0,0.5)',
          animation: 'modalIn 0.18s ease',
        }}
      >
        {/* Header */}
        {title && (
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '14px 16px',
              background: headerBg,
              borderBottom: `0.5px solid ${divider}`,
              flexShrink: 0,
            }}
          >
            <span style={{ fontSize: '14px', fontWeight: '700', color: titleClr }}>
              {title}
            </span>
            <button
              onClick={onClose}
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                fontSize: '18px',
                color: '#64748b',
                lineHeight: 1,
                padding: '0',
              }}
            >
              ×
            </button>
          </div>
        )}

        {/* Body */}
        <div style={{ padding: '16px', flex: 1, overflowY: 'auto' }}>
          {children}
        </div>

        {/* Footer */}
        {footer && (
          <div
            style={{
              padding: '12px 16px',
              borderTop: `0.5px solid ${divider}`,
              display: 'flex',
              gap: '8px',
              justifyContent: 'flex-end',
              background: headerBg,
              flexShrink: 0,
            }}
          >
            <Button variant="ghost" onClick={onClose}>Cancel</Button>
            {footer}
          </div>
        )}
      </div>

      <style>{`@keyframes modalIn { from { opacity:0; transform:scale(0.95) } to { opacity:1; transform:scale(1) } }`}</style>
    </div>
  );
}