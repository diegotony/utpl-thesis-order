import { Pick } from "../pick/pick.dto";

export class CreateOrderDto {
    readonly table: string;
    readonly id_user: string;
    readonly items: Array<Pick>;
    readonly date: Date;
}