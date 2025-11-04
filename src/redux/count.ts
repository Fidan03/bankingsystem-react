import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface CounterState {
  amount: number,
  firstAccount: string,
  secondAccount: string,
  thirdAccount: string,
}

const initialState: CounterState = {
  amount: 0,
  firstAccount: 'nothing',
  secondAccount: 'nothing',
  thirdAccount: 'nothing',
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    setAmount: (state, action: PayloadAction<number>) => {
      state.amount = action.payload
    },
    setFirstAccount: (state, action: PayloadAction<string>) => {
      state.firstAccount = action.payload
    },
    setSecondAccount: (state, action: PayloadAction<string>) => {
      state.secondAccount = action.payload
    },
    setThirdAccount: (state, action: PayloadAction<string>) => {
      state.thirdAccount = action.payload
    },
  },
})

export const { setAmount, setFirstAccount, setSecondAccount, setThirdAccount } = counterSlice.actions
export default counterSlice.reducer