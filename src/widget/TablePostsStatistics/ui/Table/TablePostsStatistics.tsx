import style from './Table.module.scss'

import { useAppSelector } from '@/app/store/store'

import { TableLine } from '@/entities/Table'

const TablePostsStatistics: React.FC = () => {
	const posts = useAppSelector((state) => state.post)

	return (
		<div className={style.container}>
			{posts.map((post) => (
				<TableLine
					key={post.id}
					title={post.title}
					countSymbols={post.description.length}
					countComments={post.comments.length}
				/>
			))}
			<div className={style.last__line}>
				<TableLine title='Всего постов' countSymbols={posts.length} countComments={posts.length} />
			</div>
		</div>
	)
}

export default TablePostsStatistics
