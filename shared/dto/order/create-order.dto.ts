import { ApiModelProperty } from "@nestjs/swagger";

export class CreateOrderDto {
    @ApiModelProperty()
    id_table: string;
    @ApiModelProperty()
    id_user: string;
    @ApiModelProperty()
    order: Array<any>;
}