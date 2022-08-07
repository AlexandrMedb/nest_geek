import {SetMetadata} from '@nestjs/common';
import {userRoles} from "../user/entities/user.entity";
import {users} from "../fakeDb/fakeDb";


const Rights = ['news', 'comments', 'commentsToComments', 'users'] as const
type Rights = typeof Rights[number]

const RightsCRUD = ['create', 'read', 'update', 'delete'] as const
type RightsCRUD = typeof RightsCRUD[number]

interface accessRight extends Partial<Record<Rights, RightsCRUD[]>> {
}

interface accessRights extends Record <typeof userRoles[number], accessRight> {
}

const roleSettings: accessRights = {
    admin: {},
    user: {
        news: ["read"],
        comments: [...RightsCRUD],
        commentsToComments: [...RightsCRUD]
    }
}


export const Role = (right: Rights, crud: RightsCRUD) => {
    //todo get user role
    const userRole = users[1].role
    if(userRole=='admin')  return SetMetadata('roleAccess', 'enable')

    try{
        const val=roleSettings[userRole][right].includes(crud)?'enable':'disable'
        return SetMetadata('roleAccess', val)
    }
    catch (err){
        return SetMetadata('roleAccess', 'disable')
    }

};
