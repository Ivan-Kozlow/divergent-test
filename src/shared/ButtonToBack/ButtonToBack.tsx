import style from './ButtonToBack.module.scss'
import { Link } from 'react-router-dom'

const ButtonToBack: React.FC = () => {
	return (
		<Link to={'/'} className={style.link}>
			Назад
		</Link>
	)
}

export default ButtonToBack
