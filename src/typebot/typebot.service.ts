import { Injectable } from '@nestjs/common';
import { CreateTypebotDto } from './dto/create-typebot.dto';
import { UpdateTypebotDto } from './dto/update-typebot.dto';

@Injectable()
export class TypebotService {
  create(createTypebotDto: CreateTypebotDto) {
    return 'This action adds a new typebot';
  }

  findAll() {
    return `This action returns all typebot`;
  }

  findOne(id: number) {
    return `This action returns a #${id} typebot`;
  }

  update(id: number, updateTypebotDto: UpdateTypebotDto) {
    return `This action updates a #${id} typebot`;
  }

  remove(id: number) {
    return `This action removes a #${id} typebot`;
  }
}
