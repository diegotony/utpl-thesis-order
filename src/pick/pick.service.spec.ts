import { Test, TestingModule } from '@nestjs/testing';
import { PickService } from './pick.service';

describe('PickService', () => {
  let service: PickService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PickService],
    }).compile();

    service = module.get<PickService>(PickService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
