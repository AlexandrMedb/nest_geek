import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NewsModule } from './news/news.module';
import { CommentsModule } from './comments/comments.module';
import { CommentsToCommentsModule } from './comments-to-comments/comments-to-comments.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [NewsModule, CommentsModule, CommentsToCommentsModule, UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
