import Input from '../../components/ui/Input';
import Select from '../../components/ui/Select';
import Card from '../../components/ui/Card';
import FormGroup from '../../components/form/FormGroup';
import { TEAM_OPTIONS } from '../../data/users';
import { PRIORITY_OPTIONS } from '../../data/priorities';
import { useTheme } from '../../context/ThemeContext';

export default function Step1CustomerInfo({ formData, setFormData, errors }) {
  const { isDark } = useTheme();
  const set = field => value => setFormData(prev => ({ ...prev, [field]: value }));

  const handlePhoneChange = (value) => {
  let cleaned = value.replace(/\D/g, '');
    if (cleaned.length > 5) {
    cleaned = cleaned.slice(0, 5) + ' ' + cleaned.slice(5, 10);
  }
  const rawNumbers = cleaned.replace(/\s/g, '');
  set('phone')(rawNumbers)}

  return (
    <Card title="Step 1 — Customer information">
      {/* className="form-row-2" → 2 cols desktop → 1 col mobile */}
      <div className="form-row-2">
        <FormGroup label="Full name" required error={errors.customerName}>
          <Input placeholder="e.g. Ravi Kumar" value={formData.customerName} onChange={set('customerName')}  />
        </FormGroup>
        <FormGroup label="Email address" required error={errors.email}>
          <Input type="email" placeholder="ravi@example.com" value={formData.email} onChange={set('email')}  />
        </FormGroup>
      </div>

      <div className="form-row-2">
        <FormGroup label="Phone number" error={errors.phone}>
          <Input type="tel" placeholder="+91 xxxxxxxxxx" value={formData.phone}    onChange={handlePhoneChange}
 />
        </FormGroup>
        <FormGroup label="Priority" required error={errors.priority}>
          <Select options={PRIORITY_OPTIONS} value={formData.priority} onChange={set('priority')} placeholder="Select priority"  />
        </FormGroup>
      </div>

      <div className="form-row-2">
        <FormGroup label="Order date" required error={errors.date}>
          <Input type="date" value={formData.date} onChange={set('date')} />
        </FormGroup>
        <FormGroup label="Assigned to">
          <Select options={TEAM_OPTIONS} value={formData.assignedTo} onChange={set('assignedTo')} placeholder="Select team member" />
        </FormGroup>
      </div>

      <FormGroup label="Notes / Remarks">
        <textarea
          rows="3"
          placeholder="Special instructions…"
          value={formData.notes}
          onChange={e => set('notes')(e.target.value)}
          style={{
            width:'100%', background: isDark ? '#0d0d1a' : '#f8fafc',
            border: `0.5px solid ${isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.12)'}`,
            borderRadius:'8px', padding:'8px 10px', fontSize:'12px',
            color: isDark ? '#e2e8f0' : '#1e293b',
            outline:'none', resize:'vertical', fontFamily:'inherit', boxSizing:'border-box',
          }}
        />
      </FormGroup>
    </Card>
  );
}