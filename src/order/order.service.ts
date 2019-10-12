import { Model } from 'mongoose';
import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Order } from 'shared/dto/order/order.dto';
import { CreateOrderDto } from 'shared/dto/order/create-order.dto';
import { BillingService } from '../../src/services/billing/billing.service';

@Injectable()
export class OrderService {
    constructor(@InjectModel('Order') private readonly orderModel: Model<Order>,private billingService: BillingService) { }

    async createOrder(createOrderDto: CreateOrderDto): Promise<Order> {
        try {
            const createdOrder = new this.orderModel(createOrderDto);
            if (!createdOrder){
                throw new HttpException('Upps error ..', HttpStatus.BAD_REQUEST)
            }
            createdOrder.save();
            console.log(createdOrder)
            let data = {
                id_user: createdOrder.id_user,
                id_order: createdOrder._id,
                total: 4,
            }
            this.billingService.createBillings(data).subscribe((res)=>{
                console.log(res)
            })
            return await createdOrder;
        } catch (error) {
            throw new HttpException(`Callback getUser ${error.message}`, HttpStatus.BAD_REQUEST);
        }
       
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
    async editOrder(idOrder: string, dto: CreateOrderDto) {
        return await this.orderModel.findByIdAndUpdate(idOrder, dto, { new: true, runValidators: true });
    }
}
