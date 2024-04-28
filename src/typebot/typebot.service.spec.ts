import { Test, TestingModule } from '@nestjs/testing';
import { TypebotService } from './typebot.service';

describe('TypebotService', () => {
  let service: TypebotService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TypebotService],
    }).compile();

    service = module.get<TypebotService>(TypebotService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
