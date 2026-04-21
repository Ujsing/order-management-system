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

 const generateOrderId = () => {
  const random = Math.floor(Math.random() * 900) + 100; // 100-999
  return `#ORD-${random}`;
};


  const handleSubmit = () => {
    const newOrder ={
      id: generateOrderId(),
      customerName: formData.customerName,
      customerEmail: formData.email,
      customerPhone: formData.phone,
      priority: formData.priority,
      assignedTo: formData.assignedTo,
      date: formData.date || new Date().toISOString().split('T')[0],
      items: formData.items,
      notes: formData.notes,
      status: 'pending', // Default status for new orders
      createdAt: new Date().toISOString(),
    };
      const existingOrders = localStorage.getItem('orders');
    let allUserOrders = existingOrders ? JSON.parse(existingOrders) : [];
    
    // Add new order
    allUserOrders = [newOrder, ...allUserOrders];
    
    // Save back to localStorage
    localStorage.setItem('orders', JSON.stringify(allUserOrders));

    alert(`✅ Order ${newOrder.id} created for ${formData.customerName}!`);
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
