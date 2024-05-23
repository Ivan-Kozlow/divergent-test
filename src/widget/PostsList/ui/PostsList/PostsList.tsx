import style from './PostsList.module.scss'

import { useAppSelector } from '@/app/store/store'

import { Post } from '@/entities/Post'

const PostsList: React.FC = () => {
	const posts = useAppSelector((state) => state.post)

	return (
		<div className={style.posts__container}>
			{posts.map((post) => (
				<Post
					key={post.id}
					title={post.title}
					description={post.description}
					comments={post.comments}
					id={post.id}
				/>
			))}
		</div>
	)
}

export default PostsList
