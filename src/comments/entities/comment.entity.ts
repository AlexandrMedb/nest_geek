import {IsDate, IsNumber, IsString, Length, MinLength} from "class-validator";

export class Comment {
    @IsNumber()
    id:number
    @IsNumber()
    news_id:number
    @IsNumber()
    user_id: number
    @IsString()
    @Length(10,100)
    comment:string
    @IsDate()
    date:string
}
