import {News} from "../entities/news.entity";
import {OmitType} from "@nestjs/mapped-types";

export class CreateNewsDto extends OmitType(News, ['user_id', 'id', 'date'] as const) {}
