import {configureStore} from '@reduxjs/toolkit'
import FirstReducer from '../Action'

const store = configureStore({
  reducer: {
    First1: FirstReducer,
  },
})

export default store
