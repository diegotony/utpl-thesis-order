import { Controller } from '@nestjs/common';
import { OrderService } from './order.service';
import { CreateOrderDto } from 'shared/dto/order/create-order.dto';
import { Order } from 'shared/dto/order/order.dto';
import { MessagePattern } from '@nestjs/microservices';

@Controller('order')
export class OrderController {
    constructor(private readonly orderService: OrderService) {}

    @MessagePattern({ cmd: 'createOrder' })
    async createPick(dto: CreateOrderDto) {
        return (await this.orderService.createOrder(dto));
    }

    @MessagePattern({ cmd: 'findOrders' })
    async findAll(): Promise<Order[]> {
        return (await this.orderService.findOrders())
            .map(v => ({
                _id: v._id, menu: v.menu, table: v.table, user: v.user, status: v.status
            }));
    }

    @MessagePattern({ cmd: 'findOrder' })
    async findOrder(idOrder): Promise<Order> {
        return (await this.orderService.findOrder(idOrder));
    }

    @MessagePattern({ cmd: 'editOrder' })
    async editOrder(data) {
        return (await this.orderService.editOrder(data));
    }

    @MessagePattern({ cmd: 'deleteOrder' })
    async deleteOrder(idOrder): Promise<Order[]> {
        return (await this.orderService.deleteOrder(idOrder));
    }
}
