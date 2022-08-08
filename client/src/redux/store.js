import { combineReducers, configureStore } from '@reduxjs/toolkit';

import authReducer from './reducers/AuthSlice';
import { authApi } from './api/auth.api';

const rootReducer = combineReducers({
  [authApi.reducerPath]: authApi.reducer,
  authReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
