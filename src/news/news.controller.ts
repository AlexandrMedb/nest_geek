import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { NewsService } from './news.service';
import { CreateNewsDto } from './dto/create-news.dto';
import { UpdateNewsDto } from './dto/update-news.dto';
import {Role} from "../decorators/role.decorator";

@Controller('news')
export class NewsController {
  constructor(private readonly newsService: NewsService) {}

  @Post()
  @Role('news', 'create')
  create(@Body() createNewsDto: CreateNewsDto) {
    return this.newsService.create(createNewsDto);
  }

  @Get()
  @Role('news', 'read')
  findAll() {
    return this.newsService.findAll();
  }

  @Get(':id')
  @Role('news', 'read')
  findOne(@Param('id') id: string) {
    return this.newsService.findOne(+id);
  }

  @Patch(':id')
  @Role('news', 'update')
  update(@Param('id') id: string, @Body() updateNewsDto: UpdateNewsDto) {
    return this.newsService.update(+id, updateNewsDto);
  }


  @Delete(':id')
  @Role('news', 'delete')
  remove(@Param('id') id: string) {
    return this.newsService.remove(+id);
  }
}
