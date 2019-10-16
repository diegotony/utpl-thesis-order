import { ApiModelProperty } from '@nestjs/swagger';

export class CreateItemDto {
  @ApiModelProperty()
  readonly name: string;
  @ApiModelProperty()
  readonly description: string;
  @ApiModelProperty()
  readonly price: number;
  @ApiModelProperty()
  readonly catalog: string;
  }
