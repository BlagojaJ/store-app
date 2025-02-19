import { createSlice } from '@reduxjs/toolkit';

export interface CounterState {
  data: number;
  title: string;
}

const initialState: CounterState = {
  data: 42,
  title: 'Yarc with Redux toolkit',
};

export const counterSlice = createSlice({
  name: 'counter',
  reducers: {
    increment: (state, action) => {
      state.data += action.payload;
    },
    decrement: (state, action) => {
      state.data += action.payload;
    },
  },
  initialState,
});

export const { increment, decrement } = counterSlice.actions;
