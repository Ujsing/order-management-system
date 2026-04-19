export const PRIORITY_OPTIONS = [
  { value: 'high',   label: 'High' },
  { value: 'medium', label: 'Medium' },
  { value: 'low',    label: 'Low' },
];

export const PRIORITY_COLORS = {
  high:   { bg:'rgba(239,68,68,0.15)',  color:'#f87171', border:'rgba(239,68,68,0.35)'  },
  medium: { bg:'rgba(251,191,36,0.15)', color:'#fbbf24', border:'rgba(251,191,36,0.35)' },
  low:    { bg:'rgba(16,185,129,0.15)', color:'#34d399', border:'rgba(16,185,129,0.35)' },
};

export function getPriorityColor(priority) { return PRIORITY_COLORS[priority] || PRIORITY_COLORS.medium; }
export function getPriorityLabel(priority) {
  return { high:'High', medium:'Medium', low:'Low' }[priority] || priority;
}