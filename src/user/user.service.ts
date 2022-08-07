import {HttpException, HttpStatus, Injectable, NotFoundException} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import {users} from "../fakeDb/fakeDb";
import {userRoles} from "./entities/user.entity";

@Injectable()
export class UserService {
  create(createUserDto: CreateUserDto) {
    const{role, name}=createUserDto
    if(!userRoles.includes(role)) throw  new HttpException('Forbidden role', HttpStatus.BAD_REQUEST);
    if(!name) throw new HttpException('Empty name', HttpStatus.BAD_REQUEST);
    const new_id=users?.length?Math.max(...users.map(el=>el.id))+1:0
    users.push({...createUserDto, id:new_id})
    return 'This action adds a new user';
  }

  findAll() {
    return users;
  }

  findOne(id: number) {
    const user= users.find(el=>id===el.id);
    if(!user)  throw new NotFoundException();
    return user
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    const userIndex= users.findIndex(el=>id===el.id);
    if(~userIndex)  throw new NotFoundException();
    users.splice(userIndex,1)
    return `This action removes a #${id} user`;
  }
}
