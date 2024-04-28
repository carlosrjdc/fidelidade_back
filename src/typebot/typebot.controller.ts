import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TypebotService } from './typebot.service';
import { CreateTypebotDto } from './dto/create-typebot.dto';
import { UpdateTypebotDto } from './dto/update-typebot.dto';

@Controller('typebot')
export class TypebotController {
  constructor(private readonly typebotService: TypebotService) {}

  @Post()
  create(@Body() createTypebotDto: CreateTypebotDto) {
    return this.typebotService.create(createTypebotDto);
  }

  @Get()
  findAll() {
    return this.typebotService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.typebotService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTypebotDto: UpdateTypebotDto) {
    return this.typebotService.update(+id, updateTypebotDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.typebotService.remove(+id);
  }
}
