import { createStore } from 'redux';
import { createSlice, configureStore } from '@reduxjs/toolkit';
import counterSliceReducer from './counterStore';
import authSliceReducer from './authStore';

const store = configureStore({
  reducer: { counter: counterSliceReducer, auth: authSliceReducer },
});

export default store;
