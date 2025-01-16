import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { PrismaModule } from 'src/prisma/prisma.module';  // Asegúrate de que PrismaModule esté importado si usas Prisma

@Module({
  imports: [PrismaModule],  // Asegúrate de que PrismaModule esté importado aquí si usas Prisma
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
