import { Module } from '@nestjs/common';
import { PremioService } from './premio.service';
import { PremioController } from './premio.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [PremioController],
  providers: [PremioService,PrismaService],
})
export class PremioModule {}
