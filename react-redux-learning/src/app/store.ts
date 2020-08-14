import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './rootReducer';

// Now we've handled typing configure and export the store as in JS.
const store = configureStore({
  reducer: rootReducer
});

export default store
