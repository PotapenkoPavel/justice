import axios from 'axios';

import { apiConfig } from '../../config/api';
import {
  TRY_AUTHENTICATE, LOGIN, AUTH_SET_ERROR, AUTH_SET_LOADING, LOGOUT, REGISTER,
} from '../actionTypes/auth';
import { fetchUser, setUser } from './user';

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

      dispatch(setLoading(true));

      const { status, data: { userId } } = await axios.get(`${apiConfig.authURL}/verify-token`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (status === 200) {
        dispatch(setLoading(false));
        dispatch(fetchUser(userId));
        dispatch({
          type: TRY_AUTHENTICATE,
          payload: {
            token,
            isAuthenticated: true,
          },
        });
      }
    }
  } catch (err) {
    dispatch(setLoading(false));
    dispatch(setError(err.response.data));
  }
};

export const login = ({ email, password }) => async (dispatch) => {
  try {
    dispatch(setLoading(true));

    const response = await axios.post(`${apiConfig.authURL}/login`, {
      email, password,
    });

    if (response.status === 200) {
      const { token, userId } = response.data;
      localStorage.setItem('auth', JSON.stringify({ token, userId }));
      dispatch(setLoading(false));
      dispatch(fetchUser(userId));
      dispatch({
        type: LOGIN,
        payload: { token },
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
      const { token, userId } = response.data;
      localStorage.setItem('auth', JSON.stringify({ token, userId }));
      dispatch(setLoading(false));
      dispatch(setError(null));
      dispatch(fetchUser(userId));
      dispatch({
        type: REGISTER,
        payload: { token },
      });
    }
  } catch (err) {
    dispatch(setLoading(false));
    dispatch(setError(err.response.data));
  }
};

export const logout = () => (dispatch) => {
  localStorage.removeItem('auth');

  dispatch(setUser());
  dispatch({
    type: LOGOUT,
  });
};
