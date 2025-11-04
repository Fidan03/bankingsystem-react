import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface CounterState {
  amount: number,
  account: string,
}

const initialState: CounterState = {
  amount: 0,
  account: 'nothing',
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    setAmount: (state, action: PayloadAction<number>) => {
      state.amount = action.payload
    },
    setAccount: (state, action: PayloadAction<string>) => {
      state.account = action.payload
    },
  },
})

export const { setAmount } = counterSlice.actions
export default counterSlice.reducer