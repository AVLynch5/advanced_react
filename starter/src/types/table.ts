import { Seat } from "./seat";

export type Table = {
    id: number,
    table_number: number,
    row: number,
    column: number,
    seats: Seat[],
}