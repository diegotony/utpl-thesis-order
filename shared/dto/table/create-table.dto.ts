import { ApiModelProperty } from "@nestjs/swagger";

export class CreateTableDto {
    @ApiModelProperty()
    readonly name: string;
}