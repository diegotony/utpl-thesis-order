import { Controller, Get, HttpCode } from "@nestjs/common";
import { AppService } from "./app.service";

@Controller('api/order/v1')
export class AppController{
  constructor(private readonly appService: AppService){} 
  @Get()
  @HttpCode(200)
  async hello(){
    return ( await this.appService.hello())
  }
}