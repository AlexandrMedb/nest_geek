export const userRoles=['admin', 'user'] as const


export class User {
    id:number
    name:string
    role: typeof userRoles[number]
}
