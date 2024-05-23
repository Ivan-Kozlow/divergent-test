export type TypeInputsName = 'title' | 'description'

interface IFormAddPost {
	name: TypeInputsName
	placeholder: string
}

export const INPUTS_ADD_POST: IFormAddPost[] = [
	{ name: 'title', placeholder: 'Заголовок поста' },
	{ name: 'description', placeholder: 'Описание' },
]

export const defaultFormReducerState = { title: '', description: '' }
