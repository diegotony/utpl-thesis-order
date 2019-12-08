import { Controller, Get, HttpCode } from "@nestjs/common";
import { AppService } from "./app.service";
import { ApiUseTags } from "@nestjs/swagger";


@ApiUseTags()
@Controller()
export class AppController{
  constructor(private readonly appService: AppService){} 
  @Get()
  @HttpCode(200)
  async hello(){
    return ( await this.appService.hello())
  }
}