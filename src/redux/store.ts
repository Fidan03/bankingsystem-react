import { configureStore } from '@reduxjs/toolkit'
import { counterSlice } from './count'

export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    account: counterSlice.reducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store