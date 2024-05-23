import style from './CommentsList.module.scss'

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
			</div>
		)

	return (
		<div className={style.container}>
			<div className={style.comments__container}>
				<h3 className={style.title}>Комментарии</h3>
				{comments.map((comment) => (
					<p key={comment.id} className={style.comment}>
						{comment.text}
					</p>
				))}
			</div>
		</div>
	)
}

export default CommentsList
