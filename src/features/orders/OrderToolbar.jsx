import SearchBox from '../../components/ui/SearchBox';
import Select from '../../components/ui/Select';
import Button from '../../components/ui/Button';
import { useNavigate } from 'react-router-dom';
import { STATUS_OPTIONS } from '../../data/orderStatuses';
import { PRIORITY_OPTIONS } from '../../data/priorities';

const DATE_OPTIONS = [
  { value:'all',   label:'All Time' },
  { value:'today', label:'Today' },
  { value:'week',  label:'This Week' },
  { value:'month', label:'This Month' },
];

export default function OrderToolbar({ search, onSearch, filters, onFilterChange }) {
  const navigate = useNavigate();

  const handleFilter = (key, val) => onFilterChange({ ...filters, [key]: val });

  return (
    <div className="toolbar-row">
      <SearchBox
        placeholder="Search by order ID or customer…"
        value={search}
        onChange={onSearch}
        style={{ minWidth:'200px' }}
      />
      <Select
        options={[{ value:'', label:'All Status' }, ...STATUS_OPTIONS]}
        value={filters.status}
        onChange={val => handleFilter('status', val)}
        style={{ width:'130px' }}
      />
      <Select
        options={[{ value:'', label:'All Priority' }, ...PRIORITY_OPTIONS]}
        value={filters.priority}
        onChange={val => handleFilter('priority', val)}
        style={{ width:'120px' }}
      />
      <Select
        options={DATE_OPTIONS}
        value={filters.date}
        onChange={val => handleFilter('date', val)}
        style={{ width:'120px' }}
      />
      <div style={{ flex:1 }} />
      <Button variant="primary" onClick={() => navigate('/create-order')}>
        + New Order
      </Button>
    </div>
  );
}