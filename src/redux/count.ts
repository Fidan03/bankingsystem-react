import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface CounterState {
  amount: number
}

const initialState: CounterState = {
  amount: 0,
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    setAmount: (state, action: PayloadAction<number>) => {
      state.amount = action.payload
    },
  },
})

export const { setAmount } = counterSlice.actions
export default counterSlice.reducer