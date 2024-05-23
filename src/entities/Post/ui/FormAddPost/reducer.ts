import { TypeInputsName } from './consts'

interface IState {
	title: string
	description: string
}
interface IAction {
	type: TypeInputsName | 'reset'
	payload: string
}

export const reducer = (state: IState, action: IAction) => {
	switch (action.type) {
		case 'reset':
			return {
				description: '',
				title: '',
			}
		case 'title':
			return {
				...state,
				title: action.payload,
			}
		case 'description':
			return {
				...state,
				description: action.payload,
			}
		default:
			return state
	}
}

export const actionCreatorReset = (): IAction => ({ type: 'reset', payload: '' })
export const actionCreatorChangeInput = (inputName: TypeInputsName, text: string): IAction => ({
	type: inputName,
	payload: text,
})
