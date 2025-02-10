import { IsBoolean, IsString, IsInt, IsDate, IsNumber } from 'class-validator';

export class CreateSensorDataDto {
  @IsDate()
  timestamp: Date;

  @IsBoolean()
  leak_status: boolean;

  @IsBoolean()
  high_consumption: boolean;

  @IsBoolean()
  valve_status: boolean;

  @IsString()
  location: string;

  @IsInt()
  user_id: number;

  @IsNumber()
  flowRate: number; 
  
  @IsNumber()
  totalLiters: number;
}