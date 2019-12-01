import { Model } from "mongoose";
import { Injectable, HttpException, HttpStatus, Inject } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Order } from "../../shared/dto/order/order.dto";
import { CreateOrderDto } from "../../shared/dto/order/create-order.dto";

@Injectable()
export class OrderService {                                                                                                                                                                                                                                                                                                                                                                                                        
  constructor(@InjectModel("Order") private readonly orderModel: Model<CreateOrderDto>) {
  }

  async createOrder(createOrderDto: CreateOrderDto): Promise<Order> {
    try {
      const order = new CreateOrderDto();
      order.id_table = createOrderDto.id_table;
      order.id_user = createOrderDto.id_user;
      order.order = createOrderDto.order;
      order.total = createOrderDto.total;
      console.log(order)
      console.log(createOrderDto)

      const createdOrder = new this.orderModel(order);

      if (!createdOrder) {
        throw new HttpException("Upps error ..", HttpStatus.BAD_REQUEST);
      }

      return await createdOrder.save();
    } catch (error) {
      throw new HttpException(
        `Callback post Order ${error.message}`,
        HttpStatus.BAD_REQUEST
      );
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
    return await this.orderModel.findByIdAndUpdate(idOrder, dto, {
      new: true,
      runValidators: true
    });
  }

  async updateStatusPaypal(idOrder: string) {
    return await this.orderModel.findByIdAndUpdate(idOrder, {'pago':'Completado'}, {
      new: true,
      runValidators: true
    });
  }

}
