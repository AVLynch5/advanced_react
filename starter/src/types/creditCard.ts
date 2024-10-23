export type CreditCard = {
    expiryMonth: number,
    expiryYear: number,
    PAN?: string,
    pan?: string,
    cvv?: number,
}

/**
 * Another implementation of CreditCard for type User and type Order
export type CreditCardBase = {
    expiryMonth: number,
    expiryYear: number,
}
export type OrderCreditCard = CreditCardBase & {
    PAN: string,
    cvv: number,
}
export type UserCreditCard = CreditCardBase & {
    pan: string,
}
 */