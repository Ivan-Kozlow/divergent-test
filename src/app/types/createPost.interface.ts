import { IComment } from './post.interface'

export interface IFormPost {
	title: string
	description: string
	comment?: IComment
}
