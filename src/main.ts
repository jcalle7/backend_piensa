import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: '*', 
    methods: 'GET,HEAD,POST,PUT,DELETE,PATCH',
    credentials: true, 
  });

  await app.listen(3000);
}
bootstrap();
