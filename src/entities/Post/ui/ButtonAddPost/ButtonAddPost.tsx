import style from './ButtonAddPost.module.scss'

type TypeProps = {
	onClick: () => void
	isShowForm: boolean
}

const ButtonAddPost: React.FC<TypeProps> = ({ onClick, isShowForm }) => {
	return (
		<button onClick={onClick} className={style.button}>
			<span className={style.text}>{isShowForm ? 'Скрыть' : 'Добавить пост'}</span>
		</button>
	)
}

export default ButtonAddPost
