import { PartialType } from '@nestjs/mapped-types';
import { CreateTypebotDto } from './create-typebot.dto';

export class UpdateTypebotDto extends PartialType(CreateTypebotDto) {}
