import Card from '../../components/ui/Card';
import { useTheme } from '../../context/ThemeContext';

function BarChart({ data }) {
  const { isDark } = useTheme();
  const max = Math.max(...data.map(d => d.value), 1);
  const trackBg  = isDark ? '#1e2035' : '#e2e8f0';
  const labelClr = isDark ? '#64748b' : '#9ca3af';
  const valClr   = isDark ? '#94a3b8' : '#4b5563';

  return (
    <div style={{ display:'flex', flexDirection:'column', gap:'10px' }}>
      {data.map(d => (
        <div key={d.label} style={{ display:'flex', alignItems:'center', gap:'8px' }}>
          <span style={{ fontSize:'10px', color:labelClr, width:'72px', flexShrink:0 }}>{d.label}</span>
          <div style={{ flex:1, height:'6px', background:trackBg, borderRadius:'3px', overflow:'hidden' }}>
            <div style={{ height:'100%', width:`${(d.value/max)*100}%`, background:d.color, borderRadius:'3px', transition:'width 0.6s ease' }} />
          </div>
          <span style={{ fontSize:'10px', color:valClr, width:'28px', textAlign:'right' }}>{d.value}</span>
        </div>
      ))}
    </div>
  );
}

function DonutChart({ segments, total }) {
  const C = 176;
  let offset = 0;
  const paths = segments.map(seg => {
    const dash = (seg.value / total) * C;
    const el = (
      <circle
        key={seg.label}
        cx="36" cy="36" r="28"
        fill="none"
        stroke={seg.color}
        strokeWidth="10"
        strokeDasharray={`${dash} ${C - dash}`}
        strokeDashoffset={-offset}
        strokeLinecap="round"
      />
    );
    return el;
  });

  return (
    <div style={{ display:'flex', alignItems:'center', gap:'16px' }}>
      <svg width="72" height="72" viewBox="0 0 72 72" style={{ flexShrink:0 }}>
        <circle cx="36" cy="36" r="28" fill="none" stroke="#1e2035" strokeWidth="10" />
        {paths}
      </svg>
      <div style={{ display:'flex', flexDirection:'column', gap:'6px' }}>
        {segments.map(seg => (
          <div key={seg.label} style={{ display:'flex', alignItems:'center', gap:'6px' }}>
            <div style={{ width:'7px', height:'7px', borderRadius:'50%', background:seg.color }} />
            <span style={{ fontSize:'11px', color:'#94a3b8' }}>{seg.label} — {seg.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function ChartsSection({ orders }) {
  const byStatus = [
    { label:'Completed',   value:orders.filter(o=>o.status==='completed').length,   color:'linear-gradient(90deg,#10b981,#059669)' },
    { label:'Pending',     value:orders.filter(o=>o.status==='pending').length,     color:'linear-gradient(90deg,#f59e0b,#d97706)' },
    { label:'In Progress', value:orders.filter(o=>o.status==='in-progress').length, color:'linear-gradient(90deg,#06b6d4,#0891b2)' },
    { label:'Cancelled',   value:orders.filter(o=>o.status==='cancelled').length,   color:'linear-gradient(90deg,#ef4444,#dc2626)' },
  ];

  const byPriority = [
    { label:'High',   value:orders.filter(o=>o.priority==='high').length,   color:'#ef4444' },
    { label:'Medium', value:orders.filter(o=>o.priority==='medium').length, color:'#f59e0b' },
    { label:'Low',    value:orders.filter(o=>o.priority==='low').length,    color:'#10b981' },
  ];

  return (
    // className="chart-row" → 2 cols desktop → 1 col mobile/tablet
    <div className="chart-row">
      <Card title="Orders by status"><BarChart data={byStatus} /></Card>
      <Card title="Priority split"><DonutChart segments={byPriority} total={orders.length||1} /></Card>
    </div>
  );
}