import { Test, TestingModule } from '@nestjs/testing';
import { DecodeController } from './decode.controller';
import { DecodeService } from './decode.service';

describe('DecodeController', () => {
  let controller: DecodeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DecodeController],
      providers: [DecodeService],
    }).compile();

    controller = module.get<DecodeController>(DecodeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
