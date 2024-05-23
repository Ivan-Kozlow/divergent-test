import style from './Table.module.scss'
import { useMemo } from 'react'

import { useAppSelector } from '@/app/store/store'

import { TableLine } from '@/entities/Table'

const TablePostsStatistics: React.FC = () => {
	const posts = useAppSelector((state) => state.post)

	const countComments = useMemo(() => posts.reduce((acc, item) => acc + item.comments.length, 0), [posts])
	const countPostsSymbols = useMemo(() => posts.reduce((acc, item) => acc + item.description.length, 0), [posts])

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
				<TableLine title='Всего постов' countSymbols={countPostsSymbols} countComments={countComments} />
			</div>
		</div>
	)
}

export default TablePostsStatistics
