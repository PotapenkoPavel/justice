import axios from 'axios';

import { apiConfig } from '../../config/api';
import {
  TRY_AUTHENTICATE, LOGIN, AUTH_SET_ERROR, AUTH_SET_LOADING, LOGOUT, REGISTER,
} from '../actionTypes/auth';

export const setLoading = (value) => ({
  type: AUTH_SET_LOADING,
  payload: value,
});

export const setError = (err) => ({
  type: AUTH_SET_ERROR,
  payload: err || null,
});

export const tryAuthenticate = () => async (dispatch) => {
  try {
    const dataFromLocalStorage = localStorage.getItem('auth');

    if (dataFromLocalStorage) {
      const { token } = JSON.parse(dataFromLocalStorage);

      const { status, data } = await axios.get(`${apiConfig.authURL}/verify-token`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (status === 200) {
        dispatch({
          type: TRY_AUTHENTICATE,
          payload: {
            token: data.token,
            user: data.user,
            isAuthenticated: true,
          },
        });
      }
    }
  } catch (err) {
    dispatch({
      type: AUTH_SET_ERROR,
      payload: err.response.data,
    });
  }
};

export const login = ({ email, password }) => async (dispatch) => {
  try {
    dispatch(setLoading(true));

    const response = await axios.post(`${apiConfig.authURL}/login`, {
      email, password,
    });

    if (response.status === 200) {
      const { token, user } = response.data;
      localStorage.setItem('auth', JSON.stringify({ token, user }));
      dispatch(setLoading(false));
      dispatch(setError(null));
      dispatch({
        type: LOGIN,
        payload: { token, user },
      });
    }
  } catch (err) {
    dispatch(setLoading(false));
    dispatch(setError(err.response.data));
  }
};

export const register = ({
  email, password, firstName, lastName,
}) => async (dispatch) => {
  try {
    dispatch(setLoading(true));

    const response = await axios.post(`${apiConfig.authURL}/register`, {
      email, password, firstName, lastName,
    });

    if (response.status === 200) {
      const { token, user } = response.data;
      localStorage.setItem('auth', JSON.stringify({ token, user }));
      dispatch(setLoading(false));
      dispatch(setError(null));
      dispatch({
        type: REGISTER,
        payload: { token, user },
      });
    }
  } catch (err) {
    dispatch(setLoading(false));
    dispatch(setError(err.response.data));
  }
};

export const logout = () => {
  localStorage.removeItem('auth');
  return {
    type: LOGOUT,
  };
};
