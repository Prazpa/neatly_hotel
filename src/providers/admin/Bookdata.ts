const columns = [
  {name: "Customer name", uid: "customer_name", sortable: true},
  {name: "Guests(s)", uid: "guests", sortable: true},
  {name: "Roomtype", uid: "roomtype"},
  {name: "Amount", uid: "amount", sortable: true},
  {name: "Bedtype", uid: "bedtype"},
  {name: "Check-in", uid: "checkin", sortable: true},
  {name: "Check-out", uid: "checkout", sortable: true},
];


// mockup เฉยๆ เดี๋ยว query มาจาก suparbase
const users = [
  { id: 1, customer_name: "Tony Reichert", guests: "CEO", roomtype: "Deluxe", amount: 1, bedtype: "Single bed", checkin: "30/10/2000", checkout: "31/10/2001" },
  { id: 2, customer_name: "Som Reichert", guests: "CEO", roomtype: "Suite", amount: 2, bedtype: "Double bed", checkin: "29/10/2000", checkout: "29/10/2001" },
  { id: 3, customer_name: "Alex Johnson", guests: "Manager", roomtype: "Standard", amount: 3, bedtype: "King bed", checkin: "15/11/2001", checkout: "20/11/2001" },
  { id: 4, customer_name: "Emma Williams", guests: "Guest", roomtype: "Suite", amount: 1, bedtype: "Queen bed", checkin: "01/12/2001", checkout: "05/12/2001" },
  { id: 5, customer_name: "Liam Smith", guests: "Developer", roomtype: "Deluxe", amount: 2, bedtype: "Single bed", checkin: "10/01/2002", checkout: "15/01/2002" },
  { id: 6, customer_name: "Olivia Brown", guests: "Designer", roomtype: "Standard", amount: 1, bedtype: "Double bed", checkin: "20/01/2002", checkout: "22/01/2002" },
  { id: 7, customer_name: "Noah Davis", guests: "Executive", roomtype: "Suite", amount: 3, bedtype: "King bed", checkin: "01/02/2002", checkout: "05/02/2002" },
  { id: 8, customer_name: "Ava Martinez", guests: "Guest", roomtype: "Deluxe", amount: 2, bedtype: "Queen bed", checkin: "15/02/2002", checkout: "18/02/2002" },
  { id: 9, customer_name: "Ethan Garcia", guests: "Manager", roomtype: "Standard", amount: 1, bedtype: "Double bed", checkin: "01/03/2002", checkout: "03/03/2002" },
  { id: 10, customer_name: "Sophia Rodriguez", guests: "CEO", roomtype: "Suite", amount: 2, bedtype: "Single bed", checkin: "10/03/2002", checkout: "15/03/2002" },
  { id: 11, customer_name: "Jackson Wilson", guests: "Developer", roomtype: "Deluxe", amount: 3, bedtype: "King bed", checkin: "25/03/2002", checkout: "30/03/2002" },
  { id: 12, customer_name: "Isabella Anderson", guests: "Designer", roomtype: "Standard", amount: 1, bedtype: "Double bed", checkin: "05/04/2002", checkout: "08/04/2002" },
  { id: 13, customer_name: "Mason Thomas", guests: "Executive", roomtype: "Suite", amount: 2, bedtype: "Queen bed", checkin: "15/04/2002", checkout: "20/04/2002" },
  { id: 14, customer_name: "Mia Taylor", guests: "Guest", roomtype: "Deluxe", amount: 1, bedtype: "King bed", checkin: "01/05/2002", checkout: "04/05/2002" },
  { id: 15, customer_name: "Jacob Moore", guests: "Manager", roomtype: "Standard", amount: 2, bedtype: "Single bed", checkin: "10/05/2002", checkout: "12/05/2002" },
  { id: 16, customer_name: "Charlotte Lee", guests: "Designer", roomtype: "Suite", amount: 1, bedtype: "Double bed", checkin: "20/05/2002", checkout: "23/05/2002" },
  { id: 17, customer_name: "William Harris", guests: "Executive", roomtype: "Deluxe", amount: 3, bedtype: "Queen bed", checkin: "01/06/2002", checkout: "05/06/2002" },
  { id: 18, customer_name: "Amelia Clark", guests: "Guest", roomtype: "Standard", amount: 1, bedtype: "King bed", checkin: "10/06/2002", checkout: "13/06/2002" },
  { id: 19, customer_name: "James Lewis", guests: "CEO", roomtype: "Suite", amount: 2, bedtype: "Single bed", checkin: "20/06/2002", checkout: "25/06/2002" },
  { id: 20, customer_name: "Harper Robinson", guests: "Manager", roomtype: "Deluxe", amount: 1, bedtype: "Double bed", checkin: "01/07/2002", checkout: "05/07/2002" },
];


export {columns, users};
