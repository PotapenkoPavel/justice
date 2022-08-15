import AuthApi from '../../services/auth';

import {
  LOGIN, AUTH_SET_ERROR, AUTH_SET_LOADING, LOGOUT, REGISTER, SET_CREDENTIALS,
} from '../actionTypes/auth';
import { fetchUser, removeUser } from './user';

export const setLoading = (value) => ({
  type: AUTH_SET_LOADING,
  payload: value,
});

export const setError = (err) => ({
  type: AUTH_SET_ERROR,
  payload: err || null,
});

export const setCredentials = (token, userId) => (dispatch) => {
  dispatch({
    type: SET_CREDENTIALS,
    payload: token,
  });

  dispatch(fetchUser(userId, token));
};

export const login = (email, password) => async (dispatch) => {
  try {
    dispatch(setLoading(true));

    const { status, data } = await AuthApi.login({ email, password });

    if (status === 200) {
      const { token, userId } = data;
      localStorage.setItem('auth', JSON.stringify({ token: data.token, userId: data.userId }));
      dispatch({
        type: LOGIN,
        payload: token,
      });
      dispatch(fetchUser(userId, token));
    }
  } catch (err) {
    dispatch(setLoading(false));
    dispatch(setError(err.response.data.message));
  }
};

export const register = (email, password, firstName, lastName) => async (dispatch) => {
  try {
    dispatch(setLoading(true));

    const { status, data } = await AuthApi.register({
      email, password, firstName, lastName,
    });

    if (status === 200) {
      const { token, userId } = data;

      localStorage.setItem('auth', JSON.stringify({ token, userId }));

      dispatch({
        type: REGISTER,
        payload: token,
      });

      dispatch(fetchUser(userId, token));
    }
  } catch (err) {
    dispatch(setLoading(false));
    dispatch(setError(err.response.data.message));
  }
};

export const logout = () => (dispatch) => {
  localStorage.removeItem('auth');

  dispatch({
    type: LOGOUT,
  });

  dispatch(removeUser());
};
