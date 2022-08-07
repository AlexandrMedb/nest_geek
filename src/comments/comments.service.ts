import {HttpException, HttpStatus, Inject, Injectable, NotFoundException, Scope} from '@nestjs/common';
import {CreateCommentDto} from './dto/create-comment.dto';
import {UpdateCommentDto} from './dto/update-comment.dto';
import {comments, commentsToComments, news, users} from "../fakeDb/fakeDb";
import {CommentsToCommentsService} from "../comments-to-comments/comments-to-comments.service";


@Injectable()
export class CommentsService {
    constructor(private readonly CommentsToCommentsService: CommentsToCommentsService) {
    }


    create(createCommentDto: CreateCommentDto) {
        const {comment, news_id} = createCommentDto

        if (!news.find(el => news_id === el.id)) throw new HttpException('news not found', HttpStatus.BAD_REQUEST);
        if (comment?.length < 3) throw new HttpException('comment too short', HttpStatus.BAD_REQUEST);

        const new_id = comments?.length ? Math.max(...comments.map(el => el.id)) + 1 : 0
        //user[0] instead of auth user
        comments.push({comment, news_id, date: new Date().toISOString(), id: new_id, user_id: users[0].id})

        return 'This action adds a new comment';
    }

    findAll() {
        return comments;
    }

    findOne(id: number) {
        const comment = comments.find(el => id === el.id);
        if (!comment) throw new NotFoundException();
        return comment
    }

    update(id: number, updateCommentDto: UpdateCommentDto) {
        return `This action updates a #${id} comment`;
    }

    remove(id: number) {
        const commentIndex = comments.findIndex(el => id === el.id);
        if (!~commentIndex) throw new NotFoundException();
        commentsToComments.forEach((el) => {
            try {
                if (el.parent_comment_id === id) this.CommentsToCommentsService.remove(el.id)
            } catch (err) {

            }
        })


        comments.splice(commentIndex, 1)
        return `This action removes a #${id} comment`;
    }
}
