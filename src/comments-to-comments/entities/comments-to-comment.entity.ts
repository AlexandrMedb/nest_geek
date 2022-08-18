import {IsDate, IsNumber, IsString, Length} from "class-validator";

export class CommentsToComment {
    @IsNumber()
    id:number
    @IsNumber()
    news_id:number
    @IsNumber()
    parent_comment_id:number
    @IsNumber()
    user_id:number
    @IsString()
    @Length(10,100)
    comment:string
    @IsDate()
    date:string
}
