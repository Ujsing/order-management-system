import StatCard from '../../components/ui/StatCard';
 
export default function StatCardsSection({ stats }) {
  const cards = [
    { label: 'Total Orders',  value: stats.total,      color: 'violet', icon: '📦' },
    { label: 'Pending',       value: stats.pending,     color: 'blue',   icon: '⏳' },
    { label: 'In Progress',   value: stats.inProgress,  color: 'cyan',   icon: '⚙️' },
    { label: 'Completed',     value: stats.completed,   color: 'green',  icon: '✅' },
    { label: 'Cancelled',     value: stats.cancelled,   color: 'red',    icon: '❌' },
  ];
 
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(5, 1fr)',
        gap: '10px',
        marginBottom: '16px',
      }}
    >
      {cards.map(c => (
        <StatCard key={c.label} label={c.label} value={c.value} color={c.color} icon={c.icon} />
      ))}
    </div>
  );
}