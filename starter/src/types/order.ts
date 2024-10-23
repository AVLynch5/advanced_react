import { CreditCard } from "./creditCard";
import { Item } from "./item";

export type Order = {
    id: number,
    userId: number,
    orderTime: Date,
    pickupTime: Date,
    area: string,
    location: string,
    tax: number,
    tip: number,
    creditCard: CreditCard,
    items: Item[],
    status: string,
}