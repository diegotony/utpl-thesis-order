import { Controller, Get, Post, Put, Delete, Param, HttpCode, Body, UseFilters } from '@nestjs/common';
import { OrderService } from './order.service';
import { CreateOrderDto } from 'shared/dto/order/create-order.dto';
import { Order } from 'shared/dto/order/order.dto';
import { MongoExceptionFilter } from 'src/exceptions/exception-mongo.service';

@Controller('order')
export class OrderController {
    constructor(private readonly orderService: OrderService) {}

    @Post()
    @HttpCode(201)
    @UseFilters(MongoExceptionFilter)
    async createPick(@Body() dto: CreateOrderDto) {
        return (await this.orderService.createOrder(dto));
    }

    @Get()
    @HttpCode(200)
    async findAll(): Promise<Order[]> {
        return (await this.orderService.findOrders())
            .map(v => ({
                _id: v._id, menu: v.menu, table: v.table, user: v.user, status: v.status
            }));
    }

    @Get(':id')
    @HttpCode(200)
    async findOrder( @Param() params ): Promise<Order> {
        return (await this.orderService.findOrder(params.id));
    }

    @Put(':id')
    @HttpCode(202)
    @UseFilters(MongoExceptionFilter)
    async editOrder(@Param() params, @Body() dto: CreateOrderDto) {
        return (await this.orderService.editOrder(params.id, dto));
    }

    @Delete(':id')
    @HttpCode(202)
    async deleteOrder(@Param() params): Promise<Order[]> {
        return (await this.orderService.deleteOrder(params.id));
    }
}
