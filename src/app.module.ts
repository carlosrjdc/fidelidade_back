import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PremioModule } from './premio/premio.module';

@Module({
  imports: [PremioModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
