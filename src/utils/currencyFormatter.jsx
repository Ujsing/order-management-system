export function formatCurrency(amount) {
  if (amount == null) return '—';
  return '₹' + Number(amount).toLocaleString('en-IN');
}

export function parseCurrency(str) {
  return parseInt(String(str).replace(/[₹,]/g, ''), 10) || 0;
}
