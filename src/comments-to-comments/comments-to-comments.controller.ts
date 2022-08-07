import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CommentsToCommentsService } from './comments-to-comments.service';
import { CreateCommentsToCommentDto } from './dto/create-comments-to-comment.dto';
import { UpdateCommentsToCommentDto } from './dto/update-comments-to-comment.dto';

@Controller('comments-to-comments')
export class CommentsToCommentsController {
  constructor(private readonly commentsToCommentsService: CommentsToCommentsService) {}


  @Post()
  create(@Body() createCommentsToCommentDto: CreateCommentsToCommentDto) {
    return this.commentsToCommentsService.create(createCommentsToCommentDto);
  }

  @Get()
  findAll() {
    return this.commentsToCommentsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.commentsToCommentsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCommentsToCommentDto: UpdateCommentsToCommentDto) {
    return this.commentsToCommentsService.update(+id, updateCommentsToCommentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.commentsToCommentsService.remove(+id);
  }
}
