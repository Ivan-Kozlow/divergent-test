import { toast } from 'react-toastify'

import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import { IPost } from '@/app/types/post.interface'
import { DATA } from '../../mock.data'
import { IActionPayloadCreatePost } from './types'

type TypeInitStatePost = IPost[]

const initialState: TypeInitStatePost = [...DATA]

const post = createSlice({
	name: 'post',
	initialState,
	reducers: {
		createPost(state, action: PayloadAction<IActionPayloadCreatePost>) {
			// FIXME добавить логику добавления результирующей последней строки
			const { title, description } = action.payload
			const newPost: IPost = { id: state.length + 1, title, description, comments: [] }
			state.push(newPost)
		},
		addCommentForPost(state, action: PayloadAction<{ postId: number; text: string }>) {
			const { postId, text } = action.payload
			const post = state.find((post) => post.id === postId)
			if (post) {
				post.comments.push({ id: post.comments.length + 1, text })
			} else {
				toast.error('Пост не найден')
			}
		},
	},
})

export const { reducer: postReducer, actions: postActions } = post
