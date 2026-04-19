import { useState } from 'react';
import Card from '../../components/ui/Card';
import Input from '../../components/ui/Input';
import Button from '../../components/ui/Button';
import FormRow from '../../components/form/FormRow';
import { formatCurrency } from '../../utils/currencyFormatter';
import { useTheme } from '../../context/ThemeContext';

export default function Step2OrderItems({ formData, setFormData, errors }) {
  const { isDark } = useTheme();
  const [newItem, setNewItem] = useState({ name:'', quantity:1, price:0 });
  const divider = isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.06)';

  const addItem = () => {
    if (!newItem.name || newItem.price <= 0) return;
    setFormData(prev => ({ ...prev, items: [...prev.items, { ...newItem }] }));
    setNewItem({ name:'', quantity:1, price:0 });
  };

  const removeItem = index => {
    setFormData(prev => ({ ...prev, items: prev.items.filter((_, i) => i !== index) }));
  };

  const total = formData.items.reduce((sum, item) => sum + item.quantity * item.price, 0);

  return (
    <Card title="Step 2 — Order items">
      {/* Existing items */}
      {formData.items.length > 0 && (
        <div style={{ marginBottom:'16px' }}>
          {formData.items.map((item, i) => (
            <div key={i} style={{ display:'flex', gap:'10px', alignItems:'center', padding:'8px 0', borderBottom:`0.5px solid ${divider}` }}>
              <span style={{ flex:1, fontSize:'12px', color: isDark ? '#e2e8f0' : '#1e293b' }}>{item.name}</span>
              <span style={{ fontSize:'11px', color:'#64748b' }}>×{item.quantity}</span>
              <span style={{ fontSize:'11px', color:'#94a3b8', width:'80px', textAlign:'right' }}>{formatCurrency(item.price * item.quantity)}</span>
              <button onClick={() => removeItem(i)} style={{ background:'none', border:'none', cursor:'pointer', color:'#f87171', fontSize:'14px', padding:'0 4px' }}>×</button>
            </div>
          ))}
          <div style={{ display:'flex', justifyContent:'flex-end', marginTop:'10px' }}>
            <span style={{ fontSize:'14px', fontWeight:'800', color:'#a78bfa' }}>Total: {formatCurrency(total)}</span>
          </div>
        </div>
      )}

      {errors.items && <p style={{ color:'#f87171', fontSize:'11px', margin:'0 0 10px' }}>⚠ {errors.items}</p>}

      {/* Add new item */}
      <div style={{ padding:'12px', background: isDark ? 'rgba(255,255,255,0.02)' : 'rgba(0,0,0,0.02)', borderRadius:'8px', border:`0.5px solid ${divider}` }}>
        <p style={{ margin:'0 0 10px', fontSize:'11px', fontWeight:'600', color:'#64748b', textTransform:'uppercase', letterSpacing:'0.05em' }}>Add item</p>
        <FormRow cols={3} gap="8px">
          <Input placeholder="Item name" value={newItem.name} onChange={v => setNewItem(p => ({...p, name:v}))} />
          <Input type="number" placeholder="Qty" value={newItem.quantity} onChange={v => setNewItem(p => ({...p, quantity:parseInt(v)||1}))} inputStyle={{ width:'100%' }} />
          <Input type="number" placeholder="Price (₹)" value={newItem.price || ''} onChange={v => setNewItem(p => ({...p, price:parseFloat(v)||0}))} />
        </FormRow>
        <Button variant="outline" size="sm" onClick={addItem} style={{ marginTop:'8px' }}>+ Add Item</Button>
      </div>
    </Card>
  );
}