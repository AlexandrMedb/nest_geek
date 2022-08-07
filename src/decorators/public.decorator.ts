import { SetMetadata } from '@nestjs/common';
import {userRoles} from "../user/entities/user.entity";

export const Public = (role:typeof userRoles[number]) => SetMetadata('role', 'admin');
