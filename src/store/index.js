import { createStore } from 'redux';
import { createSlice, configureStore } from '@reduxjs/toolkit';

const initialCounterState = { counter: 0, showCounter: true };
const counterSlice = createSlice({
  name: 'counter',
  initialState: initialCounterState,
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

const authInitialState = { isAuthenticated: false };
const authSlice = createSlice({
  name: 'authentication',
  initialState: authInitialState,
  reducers: {
    login(state) {
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
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
  reducer: { counter: counterSlice.reducer, auth: authSlice.reducer },
});

export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;

export default store;
