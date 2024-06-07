export type Inventory = {
  createdAt: Date;
  id: string;
  item: string | null;
  lastUpdated: Date | null;
  quantityAvailable: number | null;
  updatedAt: Date;
};
