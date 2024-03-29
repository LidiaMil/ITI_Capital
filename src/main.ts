import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { WsAdapter } from '@nestjs/platform-ws';
import config from './config/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  console.log(config.app)
  const options = new DocumentBuilder()
    .setTitle('ITI_Capital')
    .setDescription('The API description')
    .setVersion('1.0')
    .addTag('security')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);

  app.useWebSocketAdapter(new WsAdapter(app));

  await app.listen(process.env.PORT || 3000);
  console.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();
