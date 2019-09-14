import { Model } from 'mongoose';
import { Order } from 'shared/dto/order/order.dto';
import { CreateOrderDto } from 'shared/dto/order/create-order.dto';
export declare class OrderService {
    private readonly orderModel;
    constructor(orderModel: Model<Order>);
    createOrder(createOrderDto: CreateOrderDto): Promise<Order>;
    findOrders(): Promise<Order[]>;
    findOrder(idOrder: string): Promise<Order>;
    deleteOrder(idOrder: string): Promise<Order[]>;
    editOrder(data: any): Promise<any>;
}
