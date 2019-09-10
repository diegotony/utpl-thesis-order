import { Module } from '@nestjs/common';
import { PickController } from './pick.controller';
import { PickService } from './pick.service';

@Module({
  controllers: [PickController],
  providers: [PickService]
})
export class PickModule {}
