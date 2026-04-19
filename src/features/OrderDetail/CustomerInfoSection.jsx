import Card from '../../components/ui/Card';
import InfoRow from '../../components/ui/InfoRow';

export default function CustomerInfoSection({ order }) {
  return (
    <Card title="Customer details">
      <InfoRow label="Name"    value={order.customerName} />
      <InfoRow label="Email"   value={order.customerEmail} />
      <InfoRow label="Phone"   value={order.customerPhone} />
      <InfoRow label="Address" value={order.customerAddress} />
    </Card>
  );
}