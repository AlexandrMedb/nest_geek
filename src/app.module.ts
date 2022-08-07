import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NewsModule } from './news/news.module';
import { CommentsModule } from './comments/comments.module';
import { CommentsToCommentsModule } from './comments-to-comments/comments-to-comments.module';
import { UserModule } from './user/user.module';
import {APP_GUARD} from "@nestjs/core";
import {RoleGuard} from "./guards/role/role.guard";

@Module({
  imports: [NewsModule, CommentsModule, CommentsToCommentsModule, UserModule],
  controllers: [AppController],
  providers: [AppService, {provide:APP_GUARD, useClass:RoleGuard}],
})
export class AppModule {}
