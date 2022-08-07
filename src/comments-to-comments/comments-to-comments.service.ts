import {HttpException, HttpStatus, Injectable, NotFoundException} from '@nestjs/common';
import { CreateCommentsToCommentDto } from './dto/create-comments-to-comment.dto';
import { UpdateCommentsToCommentDto } from './dto/update-comments-to-comment.dto';
import {comments, commentsToComments, news, users} from "../fakeDb/fakeDb";
import {CommentsService} from "../comments/comments.service";

@Injectable()
export class CommentsToCommentsService {
  create(createCommentsToCommentDto: CreateCommentsToCommentDto) {
    const {comment, parent_comment_id, news_id} = createCommentsToCommentDto

    if (!comments.find(el => parent_comment_id === el.id)) throw new HttpException('comment not found', HttpStatus.BAD_REQUEST);
    if (!news.find(el => news_id === el.id)) throw new HttpException('news not found', HttpStatus.BAD_REQUEST);
    if (comment?.length < 3) throw new HttpException('comment too short', HttpStatus.BAD_REQUEST);

    const new_id = commentsToComments?.length ? Math.max(...commentsToComments.map(el => el.id)) + 1 : 0
    //user[0] instead of auth user
    comments.push({comment, news_id, date: new Date().toISOString(), id: new_id, user_id: users[0].id})

    return 'This action adds a new commentsToComment';
  }

  findAll() {
    return commentsToComments;
  }

  findOne(id: number) {
    const comment = commentsToComments.find(el => id === el.id);
    if (!comment) throw new NotFoundException();
    return comment
  }

  update(id: number, updateCommentsToCommentDto: UpdateCommentsToCommentDto) {
    return `This action updates a #${id} commentsToComment`;
  }

  remove(id: number) {
    const commentIndex = commentsToComments.findIndex(el => id === el.id);
    if (!~commentIndex) throw new NotFoundException();
    commentsToComments.splice(commentIndex, 1)
    return `This action removes a #${id} commentsToComments`;
  }
}
