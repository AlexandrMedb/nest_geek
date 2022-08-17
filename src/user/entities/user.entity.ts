import {IsIn, IsNumber, IsString, MinLength} from "class-validator";


export const userRoles=['admin', 'user'] as const


export class User {
    @IsNumber()
    id:number
    @IsString()
    @MinLength(3)
    name:string
    @IsString()
    @IsIn(userRoles)
    role: typeof userRoles[number]
}

