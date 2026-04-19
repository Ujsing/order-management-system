import { useState } from 'react';
import Step1CustomerInfo from './Step1CustomerInfo';
import Step2OrderItems from './Step2OrderItems';
import Step3Review from './Step3Review';
import WizardStep from '../../components/form/WizardStep';
import Button from '../../components/ui/Button';
import { validateOrderStep1, validateOrderStep2 } from '../../utils/validators';
import { useNavigate } from 'react-router-dom';

const STEPS = ['Customer Info', 'Order Items', 'Review & Submit'];

const EMPTY_FORM = {
  customerName:'', email:'', phone:'', priority:'medium',
  assignedTo:'', date:'', items:[], notes:'',
};

export default function CreateOrder() {
  const navigate = useNavigate();
  const [step, setStep]       = useState(1);
  const [formData, setFormData] = useState(EMPTY_FORM);
  const [errors, setErrors]    = useState({});

  const goNext = () => {
    if (step === 1) {
      const { isValid, errors: e } = validateOrderStep1(formData);
      if (!isValid) { setErrors(e); return; }
    }
    if (step === 2) {
      const { isValid, errors: e } = validateOrderStep2(formData);
      if (!isValid) { setErrors(e); return; }
    }
    setErrors({});
    setStep(s => s + 1);
  };

  const goBack = () => setStep(s => s - 1);

  const handleSubmit = () => {
    alert(`✅ Order created for ${formData.customerName}!\n(In production this would be saved to the backend.)`);
    setFormData(EMPTY_FORM);
    setStep(1);
    navigate('/orders');
  };

  return (
    <div>
      {/* Wizard steps */}
      <div style={{ display:'flex', alignItems:'flex-start', gap:'0', marginBottom:'20px' }}>
        {STEPS.map((label, i) => (
          <WizardStep
            key={label}
            stepNum={i + 1}
            label={label}
            isActive={step === i + 1}
            isCompleted={step > i + 1}
            isLast={i === STEPS.length - 1}
          />
        ))}
      </div>

      {step === 1 && <Step1CustomerInfo formData={formData} setFormData={setFormData} errors={errors} />}
      {step === 2 && <Step2OrderItems  formData={formData} setFormData={setFormData} errors={errors} />}
      {step === 3 && <Step3Review      formData={formData} />}

      <div style={{ display:'flex', gap:'8px', justifyContent:'flex-end', marginTop:'16px' }}>
        {step > 1 && <Button variant="ghost" onClick={goBack}>← Previous</Button>}
        {step < 3
          ? <Button variant="primary" onClick={goNext}>Next →</Button>
          : <Button variant="success" onClick={handleSubmit}>✓ Submit Order</Button>
        }
      </div>
    </div>
  );
}
