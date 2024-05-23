import style from './PostHeader.module.scss'

type TypeProps = {
	title: string
}

const PostHeader: React.FC<TypeProps> = ({ title }) => {
	return <h2 className={style.title}>{title}</h2>
}

export default PostHeader
