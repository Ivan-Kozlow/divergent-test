import { createBrowserRouter } from 'react-router-dom'

import { PostDetailsScreen } from '@/screens/PostDetails'
import { PostScreen } from '@/screens/Posts'

export const router = createBrowserRouter([
	{
		path: '/',
		element: <PostScreen />,
	},
	{
		path: '/details/:id',
		element: <PostDetailsScreen />,
	},
])
