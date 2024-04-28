import { Module } from '@nestjs/common';
import { TypebotService } from './typebot.service';
import { TypebotController } from './typebot.controller';

@Module({
  controllers: [TypebotController],
  providers: [TypebotService],
})
export class TypebotModule {}
