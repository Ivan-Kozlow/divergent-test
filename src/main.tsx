import './main.css'
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'
import { RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom/client'

import { store } from './app/store/store.ts'

import { router } from './app/routes/route.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
	<Provider store={store}>
		<RouterProvider router={router} />
		<ToastContainer
			limit={4}
			position='bottom-right'
			theme='light'
			newestOnTop
			closeOnClick={false}
			draggable={false}
		/>
	</Provider>
)
