import { Module } from '@nestjs/common';
import { PremioService } from './premio.service';
import { PremioController } from './premio.controller';

@Module({
  controllers: [PremioController],
  providers: [PremioService],
})
export class PremioModule {}
