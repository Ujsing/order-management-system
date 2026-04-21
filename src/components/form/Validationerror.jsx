export default function ValidationError({ message }) {
  if (!message) return null;
  return (
    <p style={{ margin: '4px 0 0', fontSize: '10px', color: '#f87171', display: 'flex', alignItems: 'center', gap: '4px' }}>
      ⚠ {message}
    </p>
  );
}