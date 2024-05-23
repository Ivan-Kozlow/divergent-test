import style from './PostDetailsScreen.module.scss'
import { useParams } from 'react-router-dom'

import { useAppSelector } from '@/app/store/store'

import ButtonToBack from '@/shared/ButtonToBack/ButtonToBack'
import CommentsList from '@/widget/CommentsList/CommentsList'

const PostDetailsScreen: React.FC = () => {
	const params = useParams()
	const currentPost = useAppSelector((state) => state.post.find((post) => post.id === Number(params.id)))

	return (
		<div className={style.container}>
			<ButtonToBack />
			<p>{currentPost?.title || 'Заголовок статьи'}</p>
			<p>{currentPost?.description || 'Описание статьи'}</p>

			<div className={style.separator} />
			<CommentsList comments={currentPost?.comments || []} />
		</div>
	)
}

export default PostDetailsScreen
