import {createSlice} from '@reduxjs/toolkit'

const initialState = {
  lista: [],
  ishighlight: false,
}

const First = createSlice({
  name: 'User',
  initialState,
  reducers: {
    submitting1: (state, action) => {
      console.log(action.payload)
      return {
        ...state,
        lista: [...state.lista, action.payload],
      }
    },
    clicking2: (state, action) => {
      console.log('sehore')
      return {
        ...state,

        ishighlight: !state.ishighlight,
      }
    },
    clicking1: (state, action) => {
      console.log('sammy')
      return {
        ...state,
        lista: state.lista.map(post => {
          if (post.id === action.payload) {
            return {...post, isLiked: !post.isLiked}
          }
          return post
        }),
      }
    },
  },
})

export const {submitting1, clicking1, clicking2} = First.actions
export default First.reducer
