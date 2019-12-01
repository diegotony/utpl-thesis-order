import { ApiModelProperty } from "@nestjs/swagger";

export class CreateOrderDto {
    @ApiModelProperty()
    id_user: string;
    @ApiModelProperty()
    id_table: string;
    @ApiModelProperty()
    order: Array<any>;
    @ApiModelProperty({enum:['Completado','Pendiente']})
    pago: string;
    @ApiModelProperty()
    total: number;

}