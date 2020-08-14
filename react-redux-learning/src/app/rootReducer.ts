import { combineReducers } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import internationalisationReducer from '../features/internationalisation/internationalisationSlice';

// Using combineReducers also provided type support.
const rootReducer = combineReducers({
  counterReducer: counterReducer,
  internationalisationReducer: internationalisationReducer
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
