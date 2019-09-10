import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Order } from 'shared/dto/order/order.dto';
import { CreateOrderDto } from 'shared/dto/order/create-order.dto';

@Injectable()
export class OrderService {
    constructor(@InjectModel('Order') private readonly orderModel: Model<Order>) { }

    async createOrder(createOrderDto: CreateOrderDto): Promise<Order> {
        const createdOrder = new this.orderModel(createOrderDto);
        return await createdOrder.save();
    }
    async findOrders(): Promise<Order[]> {
        return await this.orderModel.find().exec();
    }

    async findOrder(idOrder: string): Promise<Order> {
        return await this.orderModel.findById(idOrder).exec();

    }

    async deleteOrder(idOrder: string): Promise<Order[]> {
        return await this.orderModel.findByIdAndRemove(idOrder);
    }
    async editOrder(data) {
        const id = data[0].id;
        const dto = data[0].dto;
        return await this.orderModel.findByIdAndUpdate(id, dto, { new: true, runValidators: true });
    }
}
