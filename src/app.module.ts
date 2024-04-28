import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PremioModule } from './premio/premio.module';
import { TypebotModule } from './typebot/typebot.module';
import { WhatsappModule } from './whatsapp/whatsapp.module';

@Module({
  imports: [PremioModule, TypebotModule, WhatsappModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
