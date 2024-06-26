import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { setup } from './setup';

declare const module: any;
async function bootstrap() {
  const logger = new Logger('EntryPoint');
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Chillwave')
    .setDescription(
      'Chillwave is an open-source video sharing platform created for content creators to upload their videos and engage with users through interactive features.',
    )
    .setVersion('1.0-Alpha')
    .addTag('User')
    .addTag('Auth')
    .addTag('Creator')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);

  const PORT = 5002;

  setup(app);

  await app.listen(PORT);

  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }
  logger.log(`Server running on http://localhost:${PORT}`);
}
bootstrap();
