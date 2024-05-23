import style from './Table.module.scss'

import { useAppSelector } from '@/app/store/store'

import { TableLines } from '@/entities/Table'

const TablePostsStatistics: React.FC = () => {
	const posts = useAppSelector((state) => state.post)

	return (
		<div className={style.container}>
			{posts.map((post) => (
				<TableLines
					key={post.id}
					title={post.title}
					countSymbols={post.description.length}
					countComments={post.comments.length}
				/>
			))}
		</div>
	)
}

export default TablePostsStatistics
