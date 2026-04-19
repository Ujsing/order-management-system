import Card from '../../components/ui/Card';
import InfoRow from '../../components/ui/InfoRow';
import Badge from '../../components/ui/Badge';
import { formatCurrency } from '../../utils/currencyFormatter';
import { formatDate } from '../../utils/dateFormatter';
import { TEAM_MEMBERS } from '../../data/users';
import { useTheme } from '../../context/ThemeContext';

export default function Step3Review({ formData }) {
  const { isDark } = useTheme();
  const assignee = TEAM_MEMBERS.find(m => m.value === formData.assignedTo);
  const total = formData.items.reduce((s, i) => s + i.quantity * i.price, 0);
  const divider = isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.06)';

  return (
    <Card title="Step 3 — Review & Submit">
      <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'16px' }}>
        <div>
          <p style={{ fontSize:'11px', fontWeight:'700', color:'#64748b', textTransform:'uppercase', letterSpacing:'0.05em', margin:'0 0 8px' }}>Customer</p>
          <InfoRow label="Name"     value={formData.customerName || '—'} />
          <InfoRow label="Email"    value={formData.email || '—'} />
          <InfoRow label="Phone"    value={formData.phone || '—'} />
          <InfoRow label="Date"     value={formatDate(formData.date) || '—'} />
          <InfoRow label="Assigned" value={assignee?.label || '—'} />
          <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', padding:'6px 0' }}>
            <span style={{ fontSize:'11px', color:'#475569' }}>Priority</span>
            {formData.priority ? <Badge priority={formData.priority} /> : <span style={{ fontSize:'11px', color:'#475569' }}>—</span>}
          </div>
        </div>
        <div>
          <p style={{ fontSize:'11px', fontWeight:'700', color:'#64748b', textTransform:'uppercase', letterSpacing:'0.05em', margin:'0 0 8px' }}>Items ({formData.items.length})</p>
          {formData.items.length === 0
            ? <p style={{ fontSize:'12px', color:'#475569', fontStyle:'italic' }}>No items added</p>
            : formData.items.map((item, i) => (
                <div key={i} style={{ display:'flex', justifyContent:'space-between', padding:'5px 0', borderBottom:`0.5px solid ${divider}` }}>
                  <span style={{ fontSize:'11px', color: isDark ? '#e2e8f0' : '#1e293b' }}>{item.name} ×{item.quantity}</span>
                  <span style={{ fontSize:'11px', color:'#94a3b8' }}>{formatCurrency(item.price * item.quantity)}</span>
                </div>
              ))
          }
          {formData.items.length > 0 && (
            <div style={{ display:'flex', justifyContent:'space-between', padding:'10px 0 0', marginTop:'4px' }}>
              <span style={{ fontSize:'12px', fontWeight:'700', color: isDark ? '#e2e8f0' : '#0f172a' }}>Total</span>
              <span style={{ fontSize:'14px', fontWeight:'800', color:'#a78bfa' }}>{formatCurrency(total)}</span>
            </div>
          )}
        </div>
      </div>
      {formData.notes && (
        <div style={{ marginTop:'14px', padding:'10px', background: isDark ? 'rgba(255,255,255,0.03)' : 'rgba(0,0,0,0.02)', borderRadius:'6px' }}>
          <p style={{ fontSize:'11px', fontWeight:'600', color:'#64748b', margin:'0 0 4px' }}>Notes</p>
          <p style={{ fontSize:'12px', color: isDark ? '#94a3b8' : '#4b5563', margin:0, lineHeight:'1.6' }}>{formData.notes}</p>
        </div>
      )}
    </Card>
  );
}