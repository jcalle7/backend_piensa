import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateSensorDataDto } from './dto/create-sensor-data.dto';

@Injectable()
export class SensorService {
  constructor(private prisma: PrismaService) {}

  async create(createSensorDataDto: CreateSensorDataDto) {
    return this.prisma.sensorData.create({
      data: createSensorDataDto,
    });
  }

  async findAll() {
    return this.prisma.sensorData.findMany();
  }

  async findLatest() {
    return this.prisma.sensorData.findFirst({
      orderBy: {
        timestamp: 'desc',
      },
    });
  }
}