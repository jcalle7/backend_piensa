import { IsString } from 'class-validator';

export class LoginDto {
  @IsString()
  username: string;

  //@IsString()
  //email: string;

  @IsString()
  password: string;
}
