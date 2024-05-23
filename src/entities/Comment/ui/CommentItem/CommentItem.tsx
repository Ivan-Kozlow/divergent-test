import style from './CommentItem.module.scss'

type TypeProps = {
	id: number
	text: string
}

const CommentItem: React.FC<TypeProps> = ({ id, text }) => {
	return (
		<p key={id} className={style.comment}>
			{text}
		</p>
	)
}

export default CommentItem
