import style from './Post.module.scss'
import { useNavigate } from 'react-router-dom'

import { CommentCount, PostDescription, PostHeader } from '@/entities/Post'
import { IPost } from '@/app/types/post.interface'
import PrimaryButton from '@/shared/PrimaryButton/PrimaryButton'

type TypeProps = IPost

const Post: React.FC<TypeProps> = ({ title, comments, description, id }) => {
	const navigate = useNavigate()

	return (
		<div className={style.container}>
			<PostHeader title={title} />
			<PostDescription description={description} />
			<div className={style.bottom__container}>
				<CommentCount count={comments.length} />
				<PrimaryButton onClick={() => navigate(`/details/${id}`)} text='Подробнее' />
			</div>
		</div>
	)
}

export default Post
