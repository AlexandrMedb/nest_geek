 import { Module } from '@nestjs/common';
import { CommentsToCommentsService } from './comments-to-comments.service';
import { CommentsToCommentsController } from './comments-to-comments.controller';

@Module({
  controllers: [CommentsToCommentsController],
  providers: [CommentsToCommentsService],
  exports: [CommentsToCommentsService]
})
export class CommentsToCommentsModule {}
