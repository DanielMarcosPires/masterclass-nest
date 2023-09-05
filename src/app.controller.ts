import { Body, Controller, Get, Post } from '@nestjs/common';
import { PrismaService } from './DataBase/prisma.service';
import {randomUUID} from 'node:crypto'
import { CreateTeamMemberBody } from './dtos/create-team-member-body';
import { RocketMembersRepository } from './Repositories/rocket-members-repository';

@Controller('app')
export class AppController {
  constructor(
    private rocketMembersRepository:RocketMembersRepository
  ){}
  @Post('hello')
  async getHello(@Body() body: CreateTeamMemberBody){
    
    const {name, 'function': memberFunction} = body;

    await this.rocketMembersRepository.create(name,memberFunction)
  }
}
