type TypeProps = { count: number }

const CommentCount: React.FC<TypeProps> = ({ count }) => {
	if (!count) return <p>Комментариев нет</p>

	return (
		<div>
			<p>{count} комментариев</p>
		</div>
	)
}

export default CommentCount
