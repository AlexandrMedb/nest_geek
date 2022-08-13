import {Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, UploadedFile} from '@nestjs/common';
import { NewsService } from './news.service';
import { CreateNewsDto } from './dto/create-news.dto';
import { UpdateNewsDto } from './dto/update-news.dto';
import {Role} from "../decorators/role.decorator";
import {FileInterceptor} from "@nestjs/platform-express";
import {diskStorage} from "multer";
import { extname } from 'path';

@Controller('news')
export class NewsController {
  constructor(private readonly newsService: NewsService) {}

  @Post()
  @UseInterceptors(
      FileInterceptor('file', {
        storage: diskStorage({
          destination: './public/thumbnails',
          filename: (req, file, cb) => {
            const randomName = Array(32)
                .fill(null)
                .map(() => Math.round(Math.random() * 16).toString(16))
                .join('');
            cb(null, `${randomName}${extname(file.originalname)}`);
          },
        }),
      }),
  )
  @Role('news', 'create')
  async create(
      @UploadedFile() file: Express.Multer.File,
      @Body() createNewsDto: CreateNewsDto) {
    return this.newsService.create({...createNewsDto, thumbnail:`thumbnails/${file?.filename}`});

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
