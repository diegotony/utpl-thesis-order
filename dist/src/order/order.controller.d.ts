import { OrderService } from './order.service';
import { CreateOrderDto } from 'shared/dto/order/create-order.dto';
import { Order } from 'shared/dto/order/order.dto';
export declare class OrderController {
    private readonly orderService;
    constructor(orderService: OrderService);
    createPick(dto: CreateOrderDto): Promise<Order>;
    findAll(): Promise<Order[]>;
    findOrder(idOrder: any): Promise<Order>;
    editOrder(data: any): Promise<any>;
    deleteOrder(idOrder: any): Promise<Order[]>;
}
