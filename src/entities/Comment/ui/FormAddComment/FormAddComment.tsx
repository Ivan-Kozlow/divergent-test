import style from './FormAddComment.module.scss'
import { useParams } from 'react-router-dom'
import { useState } from 'react'

import { INPUTS_ADD_COMMENT } from './consts'
import { useAppDispatch } from '@/app/store/store'
import { postActions } from '@/app/store/reducers/Post'

// TODO вынести логику добавления поста и коммента в папку feature
const FormAddComment: React.FC = () => {
	const [inputValue, setInputValue] = useState('')
	const dispatch = useAppDispatch()
	const postId = useParams<{ id: string }>()

	const changeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
		setInputValue(e.target.value)
	}

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		setInputValue('')
		dispatch(postActions.addCommentForPost({ postId: +postId.id!, text: inputValue }))
	}

	return (
		<form className={style.form} onSubmit={handleSubmit}>
			<div className={style.inputs}>
				{INPUTS_ADD_COMMENT.map(({ placeholder, name }) => (
					<input
						key={name}
						className={style.input}
						type='text'
						name={name}
						placeholder={placeholder}
						value={inputValue}
						onChange={changeInput}
					/>
				))}
			</div>
			<button type='submit' className={style.button} disabled={!inputValue}>
				Добавить
			</button>
		</form>
	)
}

export default FormAddComment
