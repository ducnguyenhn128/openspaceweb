import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers/reducers'; // Import your root reducer

const store = configureStore({
  reducer: rootReducer,
  // Additional configuration options can be specified here
});

export default store;

