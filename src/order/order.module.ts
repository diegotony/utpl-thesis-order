import { Module, HttpModule } from '@nestjs/common';
import {MongooseModule} from '@nestjs/mongoose';
import {OrderController} from './order.controller';
import {OrderService} from './order.service';
import {OrderSchema} from '../schemas/order.schema';
import { BillingService } from '../../src/services/billing/billing.service';
@Module({
    imports: [HttpModule,MongooseModule.forFeature([{ name: 'Order', schema: OrderSchema }])],
    controllers: [OrderController],
    providers: [OrderService,BillingService],
})
export class OrderModule {}
