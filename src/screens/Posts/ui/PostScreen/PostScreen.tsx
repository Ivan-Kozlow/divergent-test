import style from './PostScreen.module.scss'
import { useState } from 'react'

import { PostsList } from '@/widget/PostsList'
import { ButtonAddPost, FormAddPost, Header } from '@/entities/Post'
import { TablePostsStatistics } from '@/widget/TablePostsStatistics'

const PostScreen: React.FC = () => {
	const [isShowForm, setIsShowForm] = useState(false)
	const handleShowFormPost = () => {
		setIsShowForm((prev) => !prev)
	}

	return (
		<div>
			<Header />
			<div className={style.posts__container}>
				<PostsList />
				{isShowForm && <FormAddPost />}
				<ButtonAddPost onClick={handleShowFormPost} isShowForm={isShowForm} />
				<TablePostsStatistics />
			</div>
		</div>
	)
}

export default PostScreen
