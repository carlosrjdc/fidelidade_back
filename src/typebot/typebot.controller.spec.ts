import { Test, TestingModule } from '@nestjs/testing';
import { TypebotController } from './typebot.controller';
import { TypebotService } from './typebot.service';

describe('TypebotController', () => {
  let controller: TypebotController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TypebotController],
      providers: [TypebotService],
    }).compile();

    controller = module.get<TypebotController>(TypebotController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
