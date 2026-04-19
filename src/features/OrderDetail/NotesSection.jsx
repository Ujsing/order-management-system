import Card from '../../components/ui/Card';
import { useTheme } from '../../context/ThemeContext';

export default function NotesSection({ order }) {
  const { isDark } = useTheme();
  const textColor = isDark ? '#64748b' : '#9ca3af';

  return (
    <Card title="Notes">
      {order.notes ? (
        <p style={{ fontSize: '12px', color: isDark ? '#94a3b8' : '#4b5563', lineHeight: '1.7', margin: 0 }}>
          {order.notes}
        </p>
      ) : (
        <p style={{ fontSize: '12px', color: textColor, fontStyle: 'italic', margin: 0 }}>
          No notes for this order.
        </p>
      )}
    </Card>
  );
}