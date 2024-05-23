import { TypeInputsName } from './consts'

interface IState {
	title: string
	description: string
}
interface IAction {
	type: TypeInputsName
	payload: string
}

export const reducer = (state: IState, action: IAction) => {
	switch (action.type) {
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
