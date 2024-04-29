import { Injectable } from '@nestjs/common';
import { CreatePremioDto } from './dto/create-premio.dto';
import { UpdatePremioDto } from './dto/update-premio.dto';
import axios from 'axios';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class PremioService {

  constructor(private readonly prisma:PrismaService) {}

  create(createPremioDto: CreatePremioDto) {
    return 'This action adds a new premio';
  }

  findAll() {

    const info = [
      {
        id: 1,
        label: "corte cabelo",
        points: 120
      },
      {
        id: 2,
        label: "Barba",
        points: 100
      },
      {
        id: 3,
        label: "completo",
        points: 320
      }
    ]

    let message = "Lista de serviços:\n";

    info.forEach(service => {
      message += `${service.id} | ${service.label} - ${service.points}  \n`;
    });

    axios.post('https://rabbit-api-evolution.kvhgik.easypanel.host/message/sendText/carlos', {
      "number": "5521979617942",
      "options": {
        "delay": 1200,
        "presence": "composing"
      },
      "textMessage": {
        "text": message
      }
    }, {
      headers: {
        "apikey": "2a33b3f9-f6a8-4f0b-92b1-f6fda7bc1a85"
      }
    })
    return `This action returns all premio`;
  }

  findOne(id: number) {
    axios.post('https://rabbit-api-evolution.kvhgik.easypanel.host/message/sendText/carlos', {
      "number": "5521979617942",
      "options": {
        "delay": 1200,
        "presence": "composing"
      },
      "textMessage": {
        "text": `premio ${id} selecionado\n\n*Deseja confirmar o restate?* \n\n*Sim*\n*Não*\n`
      }
    }, {
      headers: {
        "apikey": "2a33b3f9-f6a8-4f0b-92b1-f6fda7bc1a85"
      }
    })
    return `This action returns a #${id} premio`;
  }

  update(id: number, updatePremioDto: UpdatePremioDto) {
    return `This action updates a #${id} premio`;
  }

  remove(id: number) {
    return `This action removes a #${id} premio`;
  }
}
