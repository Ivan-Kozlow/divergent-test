import style from './FormAddPost.module.scss'
import { useReducer } from 'react'

import { INPUTS_ADD_POST, TypeInputsName } from './consts'
import { useAppDispatch } from '@/app/store/store'
import { postActions } from '@/app/store/reducers/Post'

import { reducer } from './reducer'

const FormAddPost: React.FC = () => {
	const dispatchState = useAppDispatch()
	const [state, dispatch] = useReducer(reducer, { title: '', description: '' })

	const handleCreatePost = () => {
		dispatchState(postActions.createPost(state))
	}

	const changeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
		dispatch({ type: e.target.name as TypeInputsName, payload: e.target.value })
	}

	return (
		<form className={style.form} onSubmit={(e) => e.preventDefault()}>
			<div className={style.inputs}>
				{INPUTS_ADD_POST.map(({ placeholder, name }) => (
					<input
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
