export function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(email));
}

export function isValidPhone(phone) {
  return /^[0-9\s+\-()]{10,}$/.test(String(phone));
}

export function isValidName(name) {
  return String(name).trim().length >= 3;
}

/**
 * Validates step-1 of the Create Order form.
 * Returns { isValid, errors }
 */
export function validateOrderStep1(data) {
  const errors = {};

  if (!isValidName(data.customerName))
    errors.customerName = 'Name must be at least 3 characters';

  if (!isValidEmail(data.email))
    errors.email = 'Please enter a valid email address';

  if (data.phone && !isValidPhone(data.phone))
    errors.phone = 'Please enter a valid phone number (10+ digits)';

  if (!data.priority)
    errors.priority = 'Please select a priority';

  if (!data.date)
    errors.date = 'Please select an order date';

  return { isValid: Object.keys(errors).length === 0, errors };
}

/**
 * Validates step-2: at least one item required.
 */
export function validateOrderStep2(data) {
  const errors = {};
  if (!data.items || data.items.length === 0)
    errors.items = 'Please add at least one item';
  return { isValid: Object.keys(errors).length === 0, errors };
}