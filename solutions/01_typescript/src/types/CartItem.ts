export type CartItem = {
  id: number,
  itemId: number,
  name: string,
  category: string,
  price: number,
  imageURL: string,
  firstName?: string,  // Diner's name
  notes?: string,  // Special instructions
}

