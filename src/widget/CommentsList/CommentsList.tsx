import style from './CommentsList.module.scss'

import { CommentItem, FormAddComment } from '@/entities/Comment'
import { IComment } from '@/app/types/post.interface'

type TypeProps = {
	comments: IComment[]
}

const CommentsList: React.FC<TypeProps> = ({ comments }) => {
	if (!comments.length)
		return (
			<div className={style.comments__container}>
				<span className={style.title}>Комментарии</span>
				<span className={style.none__comments}>Пока что пусто</span>
				<FormAddComment />
			</div>
		)

	return (
		<div className={style.container}>
			<div className={style.comments__container}>
				<h3 className={style.title}>Комментарии</h3>
				{comments.map((comment) => (
					<CommentItem key={comment.id} text={comment.text} id={comment.id} />
				))}
				<FormAddComment />
			</div>
		</div>
	)
}

export default CommentsList
