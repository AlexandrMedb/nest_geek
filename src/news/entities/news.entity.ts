import {IsDate, IsNumber, IsString, MinLength} from "class-validator";

export class News {
    @IsNumber()
    id: number
    @IsNumber()
    user_id: number
    @IsString()
    @MinLength(10)
    title: string
    @IsDate()
    date: string
    @IsString()
    @MinLength(10)
    text: string
    @IsString()
    thumbnail: string
}
