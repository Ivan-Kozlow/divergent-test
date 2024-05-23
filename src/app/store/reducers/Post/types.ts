import { IFormPost } from '@/app/types/createPost.interface'

export interface IActionPayloadCreatePost {
	title: IFormPost['title']
	description: IFormPost['description']
}
