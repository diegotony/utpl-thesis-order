

export class CreateOrderDto {
    readonly table: string;
    readonly id_user: string;
    readonly ids: Array<String>;
    readonly prices: Array<Number>;
    readonly quantitys: Array<Number>;
    readonly date: Date;
}