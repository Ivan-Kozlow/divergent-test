import style from './FormAddPost.module.scss'
import { useReducer } from 'react'

import { INPUTS_ADD_POST, TypeInputsName, defaultFormReducerState } from './consts'
import { useAppDispatch } from '@/app/store/store'
import { postActions } from '@/app/store/reducers/Post'

import { actionCreatorChangeInput, actionCreatorReset, reducer } from './reducer'

const FormAddPost: React.FC = () => {
	const dispatchStore = useAppDispatch()
	const [state, dispatch] = useReducer(reducer, defaultFormReducerState)

	const handleCreatePost = () => {
		dispatch(actionCreatorReset())
		dispatchStore(postActions.createPost(state))
	}

	const changeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
		dispatch(actionCreatorChangeInput(e.target.name as TypeInputsName, e.target.value))
	}

	return (
		<form className={style.form} onSubmit={(e) => e.preventDefault()}>
			<div className={style.inputs}>
				{INPUTS_ADD_POST.map(({ placeholder, name }) => (
					<input
						key={name}
						value={state[name]}
						className={style.input}
						type='text'
						name={name}
						placeholder={placeholder}
						onChange={changeInput}
					/>
				))}
			</div>
			<button
				type='button'
				className={style.button}
				onClick={handleCreatePost}
				disabled={!state.title || !state.description}
			>
				Добавить
			</button>
		</form>
	)
}

export default FormAddPost
