import { Module } from '@nestjs/common';
import { PickController } from './pick.controller';
import { PickService } from './pick.service';
import {MongooseModule} from '@nestjs/mongoose';
import { PickSchema } from 'src/schemas/pick.schema';
@Module({
  imports: [MongooseModule.forFeature([{ name: 'Pick', schema: PickSchema }])],
  controllers: [PickController],
  providers: [PickService],
})
export class PickModule {}
