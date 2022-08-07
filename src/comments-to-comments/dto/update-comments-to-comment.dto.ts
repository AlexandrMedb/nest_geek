import { PartialType } from '@nestjs/mapped-types';
import { CreateCommentsToCommentDto } from './create-comments-to-comment.dto';

export class UpdateCommentsToCommentDto extends PartialType(CreateCommentsToCommentDto) {}
