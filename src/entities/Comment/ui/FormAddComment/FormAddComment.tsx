import style from './FormAddComment.module.scss'

// TODO вынести логику добавления поста и коммента в папку feature
const FormAddComment: React.FC = () => {
	return <form className={style.form} onSubmit={(e) => e.preventDefault()}></form>
}

export default FormAddComment
