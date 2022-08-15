import { configureStore } from '@reduxjs/toolkit';

import authReducer from './reducers/authReducer';
import { userReducer } from './reducers/userReducer';
import { articleReducer } from './reducers/articleReducer';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer,
    article: articleReducer,
  },
  devTools: true,
});
