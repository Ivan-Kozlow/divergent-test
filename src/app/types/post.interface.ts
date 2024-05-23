export interface IComment {
	id: number
	text: string
}

export interface IPost {
	id: number
	title: string
	description: string
	comments: IComment[]
}
