import { Controller, Post, Body, Get } from '@nestjs/common';
import { SensorService } from './sensor.service';
import { CreateSensorDataDto } from './dto/create-sensor-data.dto';

@Controller('sensor')
export class SensorController {
  constructor(private readonly sensorService: SensorService) {}

  @Post()
  async create(@Body() createSensorDataDto: CreateSensorDataDto) {
    return this.sensorService.create(createSensorDataDto);
  }
  
  @Get()
  async findAll() {
    return this.sensorService.findAll();
  }
  
  @Get('latest')
  async findLatest() {
    return this.sensorService.findLatest();
  }

  @Post('toggle-valve')
  async toggleValve(@Body() body: { status: boolean }) {
    
    const newStatus = body.status;

    await this.sensorService.updateValveStatus(newStatus);
     
    return { status: newStatus };
  }

  @Get('valve-status')
  async getValveStatus() {
    const status = await this.sensorService.getValveStatus();
    return this.sensorService.getValveStatus();
  }
}