import { ApiModelProperty } from "@nestjs/swagger";


export class CreateOrderDto {
    @ApiModelProperty()
    readonly _id: string;
    @ApiModelProperty()
    readonly table: string;
    @ApiModelProperty()
    readonly id_user: string;
    @ApiModelProperty()
    // readonly ids: Array<String>;
    // @ApiModelProperty()
    // readonly prices: Array<Number>;
    // @ApiModelProperty()
    // readonly quantitys: Array<Number>;
    // @ApiModelProperty()
    // readonly date: Date;
    @ApiModelProperty()
    readonly order: Array<any>;
}