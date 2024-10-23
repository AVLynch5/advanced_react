import { CreditCard } from "./creditCard"

export type Order = {
    id: number,
    username: string,
    password: string,
    first: string,
    last: string,
    phone: string,
    email: string,
    imageURL: string,
    creditCard: CreditCard,
    adminUser: boolean,
    isServer: boolean,
}