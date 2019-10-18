import { Controller, Get, Post, Put, Delete, Param, HttpCode, Body, UseFilters } from '@nestjs/common';
import { OrderService } from './order.service';
import { CreateOrderDto } from '../../shared/dto/order/create-order.dto';
import { Order } from '../../shared/dto/order/order.dto';
import { BillingService } from '../../src/services/billing/billing.service';
import { ApiImplicitParam } from '@nestjs/swagger';

@Controller('order')
export class OrderController {
    constructor(private readonly orderService: OrderService) { }

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
    @ApiImplicitParam({name:'id'})
    @HttpCode(200)
    async findOrder(@Param() params): Promise<Order> {
        return (await this.orderService.findOrder(params.id));
    }

    @Put(':id')
    @ApiImplicitParam({name:'id'})
    @HttpCode(202)
    async editOrder(@Param() params, @Body() dto: CreateOrderDto) {
        return (await this.orderService.editOrder(params.id, dto));
    }

    @Delete(':id')
    @ApiImplicitParam({name:'id'})
    @HttpCode(202)
    async deleteOrder(@Param() params): Promise<Order[]> {
        return (await this.orderService.deleteOrder(params.id));
    }
}
