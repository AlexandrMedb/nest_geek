import {HttpException, HttpStatus, Injectable, NotFoundException} from '@nestjs/common';
import { CreateNewsDto } from './dto/create-news.dto';
import { UpdateNewsDto } from './dto/update-news.dto';
import {comments, news, users} from "../fakeDb/fakeDb";
import {CommentsService} from "../comments/comments.service";
import {News} from "./entities/news.entity";

@Injectable()
export class NewsService {
  constructor(private readonly commentsService: CommentsService) {}

  create(createNewsDto: CreateNewsDto) {
    const {text,title, thumbnail}=createNewsDto;


    const new_id=news?.length?Math.max(...news.map(el=>el.id))+1:0

    news.push({text,title, date:new Date().toISOString(), id:new_id, user_id:users[0].id, thumbnail})

    return 'This action adds a new news';
  }

  findAll() {
    return news;
  }

  findOne(id: number) {
    const _news= news.find(el=>id===el.id);
    if(!_news)  throw new NotFoundException();
    return _news
  }

  update(id: number, updateNewsDto: UpdateNewsDto) {
    return `This action updates a #${id} news`;
  }

  remove(id: number) {
    const newsIndex= news.findIndex(el=>id===el.id);
    if(!~newsIndex)  throw new NotFoundException();
    comments.forEach((el)=> {
      try {
        if (el.news_id === id) this.commentsService.remove(el.id)
      } catch (er){
        console.log(er);}

    })

    users.splice(newsIndex,1)
    return `This action removes a #${id} news`;
  }
}
