import { configureStore } from '@reduxjs/toolkit'
import dataReducer from './features/menuSlice'

export default configureStore({
  reducer: {
    menu: dataReducer,
  },
})