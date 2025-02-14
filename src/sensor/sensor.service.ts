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

  async updateValveStatus(status: boolean) {
    return this.prisma.sensorData.updateMany({
      data: { valve_status: status },
    });
  }

  async getValveStatus() {
    // Obtener el estado actual de la válvula
    const latestData = await this.prisma.sensorData.findFirst({
      orderBy: { timestamp: 'desc' },
    });
    return latestData?.valve_status || false; // Devuelve false si no hay datos
  }
}