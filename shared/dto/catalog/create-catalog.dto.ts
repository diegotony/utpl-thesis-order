import { ApiModelProperty } from '@nestjs/swagger';

export class CreateCatalogDto {
    @ApiModelProperty()
    readonly name: string;
}