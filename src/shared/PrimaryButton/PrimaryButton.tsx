import style from './PrimaryButton.module.scss'

type TypeProps = {
	text: string
	onClick?: () => void
}

const PrimaryButton: React.FC<TypeProps> = ({ text, onClick }) => {
	return (
		<button className={style.button} onClick={onClick}>
			{text}
		</button>
	)
}

export default PrimaryButton
