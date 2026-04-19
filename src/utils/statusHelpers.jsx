export const STATUS_LABELS = {
  pending:      'Pending',
  'in-progress':'In Progress',
  confirmed:    'Confirmed',
  processing:   'Processing',
  shipped:      'Shipped',
  delivered:    'Delivered',
  cancelled:    'Cancelled',
};

export const STATUS_COLORS = {
  pending:      { bg:'rgba(251,191,36,0.15)',  color:'#fbbf24', border:'rgba(251,191,36,0.35)'  },
  'in-progress':{ bg:'rgba(6,182,212,0.15)',   color:'#22d3ee', border:'rgba(6,182,212,0.35)'   },
  confirmed:    { bg:'rgba(59,130,246,0.15)',  color:'#60a5fa', border:'rgba(59,130,246,0.35)'  },
  processing:   { bg:'rgba(139,92,246,0.15)',  color:'#a78bfa', border:'rgba(139,92,246,0.35)'  },
  shipped:      { bg:'rgba(14,165,233,0.15)',  color:'#38bdf8', border:'rgba(14,165,233,0.35)'  },
  delivered:    { bg:'rgba(16,185,129,0.15)',  color:'#34d399', border:'rgba(16,185,129,0.35)'  },
  cancelled:    { bg:'rgba(239,68,68,0.15)',   color:'#f87171', border:'rgba(239,68,68,0.35)'   },
};

export function getStatusLabel(status)  { return STATUS_LABELS[status]  || status; }
export function getStatusColor(status)  { return STATUS_COLORS[status]  || STATUS_COLORS.pending; }
export function isCompleted(status)     { return status === 'delivered' || status === 'completed'; }
export function isCancelled(status)     { return status === 'cancelled'; }

/** 0-100 percent for progress bar */
export function getProgressPct(status) {
  const map = {
    pending: 10, confirmed: 30, 'in-progress': 50,
    processing: 60, shipped: 80, delivered: 100, cancelled: 0,
  };
  return map[status] ?? 0;
}

/** Index for StatusTracker (0-based) */
export const STATUS_STEPS = ['pending', 'confirmed', 'processing', 'shipped', 'delivered'];
export function getStepIndex(status) {
  return STATUS_STEPS.indexOf(status);
}