import { combineReducers, configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import internationalisationReducer from '../features/internationalisation/internationalisationSlice';

// Add type support by getting the type of combineReducers.
// Using combineReducers is a good idea anyway.
const rootReducer = combineReducers({
  counterReducer: counterReducer,
  internationalisationReducer: internationalisationReducer
});

export type RootState = ReturnType<typeof rootReducer>;

// Now we've handled typing configure and export the store as in JS.
const store = configureStore({
  reducer: rootReducer
});

export default store
