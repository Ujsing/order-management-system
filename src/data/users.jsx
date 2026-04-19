export const TEAM_MEMBERS = [
  { value:'rohit-mehta',  label:'Rohit Mehta',  role:'Order Manager',    avatar:'RM' },
  { value:'sneha-joshi',  label:'Sneha Joshi',  role:'Order Handler',    avatar:'SJ' },
  { value:'arjun-das',    label:'Arjun Das',    role:'Fulfillment Lead', avatar:'AD' },
  { value:'divya-sharma', label:'Divya Sharma', role:'Quality Checker',  avatar:'DS' },
  { value:'manoj-kumar',  label:'Manoj Kumar',  role:'Logistics',        avatar:'MK' },
];

export const TEAM_OPTIONS = TEAM_MEMBERS.map(m => ({ value: m.value, label: m.label }));