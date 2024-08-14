const columns = [
  { name: "Room no.", uid: "roomNo", sortable: true },
  { name: "Room type", uid: "roomtype", sortable: true },
  { name: "Bed type", uid: "bedtype" },
  { name: "Status", uid: "status", sortable: true },
];

const statusOptions = [
  { name: "Vacant", uid: "vacant" },
  { name: "Occupied", uid: "occupied" },
  { name: "Assign Clean", uid: "assignClean" },
  { name: "Assign Dirty", uid: "assignDirty" },
  { name: "Vacant Clean", uid: "vacantClean" },
  { name: "Vacant Clean Inspected", uid: "vacantCleanInspected" },
  { name: "Vacant Clean Pick Up", uid: "vacantCleanPickUp" },
  { nama: "Occupied Clean", uid: "occupied clean" },
  { name: "Occupied Clean Inspected", uid: "occupiedCleanInspected" },
  { name: "Occupied Dirty", uid: "occupiedDirty" },
  { name: "Out of Order", uid: "outOfOrder" },
  { name: "Out of Service", uid: "outOfService" },
  { name: "Out of Inventory", uid: "outOfInventory" },
];

const users = [
  {
    roomNo: "0001",
    roomtype: "Deluxe",
    bedtype: "Single bed",
    status:
      statusOptions.find((option) => option.uid === "vacant")?.name ||
      "Unknown",
  },
  {
    roomNo: "0002",
    roomtype: "Deluxe",
    bedtype: "Double bed",
    status:
      statusOptions.find((option) => option.uid === "occupied")?.name ||
      "Unknown",
  },
  {
    roomNo: "0003",
    roomtype: "Standard",
    bedtype: "Single bed",
    status:
      statusOptions.find((option) => option.uid === "vacant")?.name ||
      "Unknown",
  },
  {
    roomNo: "0004",
    roomtype: "Standard",
    bedtype: "Double bed",
    status:
      statusOptions.find((option) => option.uid === "assignClean")?.name ||
      "Unknown",
  },
  {
    roomNo: "0005",
    roomtype: "Suite",
    bedtype: "King bed",
    status:
      statusOptions.find((option) => option.uid === "vacant")?.name ||
      "Unknown",
  },
  {
    roomNo: "0006",
    roomtype: "Suite",
    bedtype: "King bed",
    status:
      statusOptions.find((option) => option.uid === "occupied")?.name ||
      "Unknown",
  },
  {
    roomNo: "0007",
    roomtype: "Deluxe",
    bedtype: "Single bed",
    status:
      statusOptions.find((option) => option.uid === "outOfOrder")?.name ||
      "Unknown",
  },
  {
    roomNo: "0008",
    roomtype: "Deluxe",
    bedtype: "Double bed",
    status:
      statusOptions.find((option) => option.uid === "vacant")?.name ||
      "Unknown",
  },
  {
    roomNo: "0009",
    roomtype: "Standard",
    bedtype: "Single bed",
    status:
      statusOptions.find((option) => option.uid === "occupied")?.name ||
      "Unknown",
  },
  {
    roomNo: "0010",
    roomtype: "Standard",
    bedtype: "Double bed",
    status:
      statusOptions.find((option) => option.uid === "vacantClean")?.name ||
      "Unknown",
  },
  {
    roomNo: "0011",
    roomtype: "Suite",
    bedtype: "King bed",
    status:
      statusOptions.find((option) => option.uid === "vacant")?.name ||
      "Unknown",
  },
  {
    roomNo: "0012",
    roomtype: "Suite",
    bedtype: "King bed",
    status:
      statusOptions.find((option) => option.uid === "occupied")?.name ||
      "Unknown",
  },
  {
    roomNo: "0013",
    roomtype: "Deluxe",
    bedtype: "Single bed",
    status:
      statusOptions.find((option) => option.uid === "assignDirty")?.name ||
      "Unknown",
  },
  {
    roomNo: "0014",
    roomtype: "Deluxe",
    bedtype: "Double bed",
    status:
      statusOptions.find((option) => option.uid === "vacantCleanInspected")
        ?.name || "Unknown",
  },
  {
    roomNo: "0015",
    roomtype: "Standard",
    bedtype: "Single bed",
    status:
      statusOptions.find((option) => option.uid === "occupiedDirty")?.name ||
      "Unknown",
  },
  {
    roomNo: "0016",
    roomtype: "Standard",
    bedtype: "Double bed",
    status:
      statusOptions.find((option) => option.uid === "vacant")?.name ||
      "Unknown",
  },
  {
    roomNo: "0017",
    roomtype: "Suite",
    bedtype: "King bed",
    status:
      statusOptions.find((option) => option.uid === "outOfService")?.name ||
      "Unknown",
  },
  {
    roomNo: "0018",
    roomtype: "Suite",
    bedtype: "King bed",
    status:
      statusOptions.find((option) => option.uid === "vacant")?.name ||
      "Unknown",
  },
  {
    roomNo: "0019",
    roomtype: "Deluxe",
    bedtype: "Single bed",
    status:
      statusOptions.find((option) => option.uid === "occupiedCleanInspected")
        ?.name || "Unknown",
  },
  {
    roomNo: "0020",
    roomtype: "Deluxe",
    bedtype: "Double bed",
    status:
      statusOptions.find((option) => option.uid === "vacant")?.name ||
      "Unknown",
  },
];

export { columns, users };
