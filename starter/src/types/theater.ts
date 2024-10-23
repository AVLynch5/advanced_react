import { Table } from "./table";

export type Theater = {
    id: number,
    name: string,
    tables: Table[],
}