import { createSlice } from '@reduxjs/toolkit';
import { authApi } from '../api/auth.api';

const initialState = {
  isAuth: false,
  token: null,
  user: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addMatcher(
        authApi.endpoints.login.matchFulfilled,
        (state, action) => {
          if (action.payload.status === 200) {
            state.isAuth = true;
            state.token = action.payload;
          }
        },
      );
  },
});

export default authSlice.reducer;
