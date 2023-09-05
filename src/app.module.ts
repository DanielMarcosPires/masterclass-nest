import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { PrismaService } from './DataBase/prisma.service';
import { RocketMembersRepository } from './Repositories/rocket-members-repository';
import { PrismaRocketMembersRepository } from './Repositories/prisma/prisma-rocket-members-respository';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [PrismaService,{
    provide:RocketMembersRepository,
    useClass:PrismaRocketMembersRepository,
  }
],
})
export class AppModule {}
