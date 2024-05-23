import style from './TableLines.module.scss'

import { IPost } from '@/app/types/post.interface'

type TypeProps = {
	title: IPost['title']
	countSymbols: number
	countComments: number
}

const TableLines: React.FC<TypeProps> = ({ countComments, countSymbols, title }) => {
	return (
		<div className={style.container}>
			<div className={style.column}>{title}</div>
			<div className={style.column}>{countSymbols} символов</div>
			<div className={style.column}>{countComments} комментариев</div>
		</div>
	)
}

export default TableLines
