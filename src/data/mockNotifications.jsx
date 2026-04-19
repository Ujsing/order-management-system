export const mockNotifications = [
  { id:1, type:'alert',   title:'#ORD-001 needs attention',         description:'High priority order is past expected confirmation time', time:'2026-04-18T09:58:00', unread:true,  timeGroup:'today' },
  { id:2, type:'update',  title:'#ORD-002 moved to In Progress',    description:'Rohit Mehta updated the order status',                  time:'2026-04-18T09:00:00', unread:true,  timeGroup:'today' },
  { id:3, type:'success', title:'#ORD-003 completed successfully',  description:"Amit Singh's order has been delivered",                  time:'2026-04-18T08:30:00', unread:true,  timeGroup:'today' },
  { id:4, type:'warning', title:'#ORD-004 was cancelled',           description:'Neha Verma cancelled the standing desk order',          time:'2026-04-17T09:00:00', unread:false, timeGroup:'yesterday' },
  { id:5, type:'user',    title:'New order #ORD-005 created',       description:'Automatically assigned to Sneha Joshi',                 time:'2026-04-17T13:30:00', unread:false, timeGroup:'yesterday' },
  { id:6, type:'update',  title:'#ORD-006 confirmed',               description:'Anjali Patel order confirmed by manager',               time:'2026-04-17T07:30:00', unread:false, timeGroup:'yesterday' },
];