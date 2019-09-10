import { Test, TestingModule } from '@nestjs/testing';
import { PickController } from './pick.controller';

describe('Pick Controller', () => {
  let controller: PickController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PickController],
    }).compile();

    controller = module.get<PickController>(PickController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
