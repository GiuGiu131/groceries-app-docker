export type AvailableItem = {
  id: string;
  name: string;
  price: number | null | undefined;
  category: string | null | undefined;
};

export type ShoppingItem = {
  id: string;
  inventoryItem: { id: string } | null | undefined;
};

export type Category = {
  id: string;
  name: string;
  items: AvailableItem[];
};
