import { Module } from '@nestjs/common';
import { CommentsService } from './comments.service';
import { CommentsController } from './comments.controller';
import {CommentsToCommentsModule} from "../comments-to-comments/comments-to-comments.module";

@Module({
  controllers: [CommentsController],
  providers: [CommentsService],
  imports:[CommentsToCommentsModule],
  exports:[CommentsService]
})
export class CommentsModule {}

