import { Controller, Get, Post, Put, Delete, Param, HttpCode, Body, UseFilters } from '@nestjs/common';
import { OrderService } from './order.service';
import { CreateOrderDto } from '../../shared/dto/order/create-order.dto';
import { Order } from '../../shared/dto/order/order.dto';
import { ApiImplicitParam, ApiUseTags } from '@nestjs/swagger';
import { MessagePattern, EventPattern, Ctx, RedisContext } from '@nestjs/microservices';

@ApiUseTags('decree')
@Controller('decree')
export class OrderController {
    constructor(private readonly orderService: OrderService) { }

    @EventPattern('holiEvent')
    async holiEvent() {
        console.log("holi")
    }

    @MessagePattern('holiPattern' )
    async holiPattern(): Promise<any> {
        // console.log("pattern")
        return await "holi pssttern"
    }


    @EventPattern('stateOrder')
    async stateOrder(data:any) {
        console.log(data)
        this.orderService.updateStatusPaypal(data)
    }
    

    @MessagePattern('findOrder' )
    async findById(id_order: string): Promise<any> {
        console.log(id_order)
        return await this.orderService.findOrder(id_order)
    }

    @Post()
    @HttpCode(201)
    async createOrder(@Body() dto: CreateOrderDto) {
        return (await this.orderService.createOrder(dto));
    }

    
    @Get()
    @HttpCode(200)
    async findAll(): Promise<Order[]> {
        return (await this.orderService.findOrders())
    }

    @Get(':id')
    @ApiImplicitParam({ name: 'id' })
    @HttpCode(200)
    async findOrder(@Param() params): Promise<Order> {
        return (await this.orderService.findOrder(params.id));
    }

    @Put(':id')
    @ApiImplicitParam({ name: 'id' })
    @HttpCode(202)
    async editOrder(@Param() params, @Body() dto: CreateOrderDto) {
        return (await this.orderService.editOrder(params.id, dto));
    }

    @Delete(':id')
    @ApiImplicitParam({ name: 'id' })
    @HttpCode(202)
    async deleteOrder(@Param() params): Promise<Order[]> {
        return (await this.orderService.deleteOrder(params.id));
    }

}
