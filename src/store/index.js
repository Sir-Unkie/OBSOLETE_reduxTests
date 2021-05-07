import { createStore } from 'redux';
import { createSlice, configureStore } from '@reduxjs/toolkit';

const initialState = { counter: 0, showCounter: true };
const counterSlice = createSlice({
  name: 'counter',
  initialState: initialState,
  reducers: {
    increment(state, action) {
      state.counter++;
    },
    decrement(state, action) {
      state.counter--;
    },
    increase(state, action) {
      state.counter += action.payload;
    },
    toggleCounter(state, action) {
      state.showCounter = !state.showCounter;
    },
  },
});

// const counterReducer = (state = initialState, action) => {
//   if (action.type === 'increment') {
//     return { ...state, counter: state.counter + action.value };
//   }
//   if (action.type === 'decrement') {
//     return { ...state, counter: state.counter - action.value };
//   }
//   if (action.type === 'toggle') {
//     return { ...state, showCounter: !state.showCounter };
//   }
//   return state;
// };

// const store = createStore(counterSlice.reducer);
const store = configureStore({
  reducer: counterSlice.reducer,
});

export const counterActions = counterSlice.actions;

export default store;
