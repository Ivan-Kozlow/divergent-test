import style from './PostDescription.module.scss'

type TypeProps = {
	description: string
}

const PostDescription: React.FC<TypeProps> = ({ description }) => {
	return <div className={style.description}>{description}</div>
}

export default PostDescription
