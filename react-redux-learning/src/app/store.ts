import { combineReducers, configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';

// Add type support by getting the type of combineReducers.
// Using combineReducers is a good idea anyway.
const rootReducer = combineReducers({
  counterReducer: counterReducer
});

export type RootState = ReturnType<typeof rootReducer>;

// Now we've handled typing configure and export the store as in JS.
const store = configureStore({
  reducer: rootReducer
});

export default store
