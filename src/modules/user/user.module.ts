import { Module } from '@nestjs/common';

import { PrismaModule } from '@/prisma';

import { UserService } from './user.service';

@Module({
  imports: [PrismaModule],
  controllers: [],
  providers: [UserService],
  exports: [UserService],
})
export class UserModule {}
