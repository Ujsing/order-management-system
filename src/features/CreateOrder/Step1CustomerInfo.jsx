import Input from '../../components/ui/Input';
import Select from '../../components/ui/Select';
import Card from '../../components/ui/Card';
import FormRow from '../../components/form/FormRow';
import FormGroup from '../../components/form/FormGroup';
import { TEAM_OPTIONS } from '../../data/users';
import { PRIORITY_OPTIONS } from '../../data/priorities';

export default function Step1CustomerInfo({ formData, setFormData, errors }) {
  const set = field => value => setFormData(prev => ({ ...prev, [field]: value }));

  return (
    <Card title="Step 1 — Customer information">
      <FormRow>
        <FormGroup label="Full name" required error={errors.customerName}>
          <Input placeholder="e.g. Ravi Kumar" value={formData.customerName} onChange={set('customerName')} error={errors.customerName} />
        </FormGroup>
        <FormGroup label="Email address" required error={errors.email}>
          <Input type="email" placeholder="ravi@example.com" value={formData.email} onChange={set('email')} error={errors.email} />
        </FormGroup>
      </FormRow>
      <FormRow>
        <FormGroup label="Phone number" error={errors.phone}>
          <Input type="tel" placeholder="+91 98765 43210" value={formData.phone} onChange={set('phone')} error={errors.phone} />
        </FormGroup>
        <FormGroup label="Priority" required error={errors.priority}>
          <Select options={PRIORITY_OPTIONS} value={formData.priority} onChange={set('priority')} placeholder="Select priority" error={errors.priority} />
        </FormGroup>
      </FormRow>
      <FormRow>
        <FormGroup label="Order date" required error={errors.date}>
          <Input type="date" value={formData.date} onChange={set('date')} error={errors.date} />
        </FormGroup>
        <FormGroup label="Assigned to">
          <Select options={TEAM_OPTIONS} value={formData.assignedTo} onChange={set('assignedTo')} placeholder="Select team member" />
        </FormGroup>
      </FormRow>
      <FormGroup label="Notes / Remarks">
        <textarea
          rows="3"
          placeholder="Special instructions…"
          value={formData.notes}
          onChange={e => set('notes')(e.target.value)}
          style={{
            width:'100%', background:'#0d0d1a', border:'0.5px solid rgba(255,255,255,0.1)',
            borderRadius:'8px', padding:'8px 10px', fontSize:'12px', color:'#e2e8f0',
            outline:'none', resize:'vertical', fontFamily:'inherit', boxSizing:'border-box',
          }}
        />
      </FormGroup>
    </Card>
  );
}