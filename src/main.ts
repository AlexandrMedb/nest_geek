import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {ValidationPipe} from "@nestjs/common";
import { join } from 'path';
import {NestExpressApplication} from "@nestjs/platform-express";
import * as expressHbs from 'express-handlebars';
import * as hbs from 'hbs';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.useGlobalPipes(new ValidationPipe());

  app.useStaticAssets(join(process.cwd(), 'public'), {
    fallthrough: true,
  });

  app.setBaseViewsDir(join(process.cwd(), 'views'));
  app.engine(
      'hbs',
      expressHbs.engine({
        layoutsDir: join(process.cwd(), 'views/layouts'),
        defaultLayout: 'layout',
        extname: 'hbs',
      }),
  );
  hbs.registerPartials(process.cwd() + '/views/partials');

  app.setViewEngine('hbs');

  await app.listen(3000);
}
bootstrap();
