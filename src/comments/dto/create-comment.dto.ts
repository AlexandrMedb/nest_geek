import {OmitType} from "@nestjs/mapped-types";
import {Comment} from "../entities/comment.entity";

export class CreateCommentDto extends OmitType(Comment, ['user_id', 'id', 'date'] as const) {}
