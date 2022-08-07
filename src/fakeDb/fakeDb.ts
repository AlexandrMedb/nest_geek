import {News} from "../news/entities/news.entity";
import {Comment} from "../comments/entities/comment.entity";
import {User, userRoles} from "../user/entities/user.entity";
import {CommentsToComment} from "../comments-to-comments/entities/comments-to-comment.entity";

const fakeDataLength = 5


export const users = Array.from({length: fakeDataLength}, (v, k): User => ({
    id: k,
    name:'user' + k,
    role:userRoles[k%2],

}))

export const news = Array.from({length: fakeDataLength}, (v, k): News => ({
    id: k,
    user_id: k,
    title: `news` + k,
    date: '2022-08-07T07:19:05.326Z',
    text: `text${k}`
}))


export const comments = Array.from({length: fakeDataLength}, (v, k): Comment => ({
    id: k,
    user_id: k,
    news_id: k,
    comment: 'comment'+k,
    date: '2022-08-07T07:19:05.326Z'
}))


export const commentsToComments = Array.from({length: fakeDataLength}, (v, k): CommentsToComment => ({
    id: k,
    user_id: k,
    parent_comment_id:k,
    news_id: k,
    comment: 'CommentsToComment'+k,
    date: '2022-08-07T07:19:05.326Z'
}))