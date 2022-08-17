import { Global, Module } from '@nestjs/common';
import { MailService } from './mail.service';
import { MailerModule } from '@nestjs-modules/mailer';
import { join } from 'path';
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';
import { MailController } from './mail.controller';
import {password} from "../../private/password";


@Global()
@Module({
  imports: [
    MailerModule.forRoot({
      transport: `smtps://torasov.alexandrg@mail.ru:${password}@smtp.mail.com`,
      defaults: {
        from: '"NestJS робот" <torasov.alexandr@mail.ru>',
      },
      template: {
        dir: join(__dirname, 'templates'),
        adapter: new HandlebarsAdapter(),
        options: {
          strict: true,
        },
      },
    }),
  ],
  controllers: [MailController],
  providers: [MailService],
  exports: [MailService],
})
export class MailModule {}
