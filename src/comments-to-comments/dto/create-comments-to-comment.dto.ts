import {OmitType} from "@nestjs/mapped-types";
import {CommentsToComment} from "../entities/comments-to-comment.entity";

export class CreateCommentsToCommentDto extends OmitType(CommentsToComment, ['user_id', 'id', 'date'] as const) {}
