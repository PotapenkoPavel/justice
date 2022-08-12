import axios from 'axios';
import {
  DELETE_USER_AVATAR,
  SET_ERROR,
  SET_LOADING,
  SET_USER,
  UPDATE_USER_AVATAR,
  UPDATE_USER_INFORMATION,
} from '../actionTypes/user';

export const setError = (message) => ({
  type: SET_ERROR,
  payload: {
    message,
  },
});

export const setLoading = (value) => ({
  type: SET_LOADING,
  payload: value,
});

export const setUser = (user) => async (dispatch) => {
  if (!user) {
    return dispatch({
      type: SET_USER,
    });
  }

  return dispatch({
    type: SET_USER,
    payload: user,
  });
};

export const fetchUser = (id) => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const { status, data: user } = await axios.get(`http://localhost:5050/api/user/${id}`);

    if (status === 200) dispatch(setUser(user));

    dispatch(setLoading(false));
  } catch (error) {
    dispatch(setLoading(false));
    dispatch(setError(error.message));
  }
};

export const updateUserInformation = (firstName, lastName, description, userId, token) => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const { status } = await axios.patch(`http://localhost:5050/api/user/${userId}`, {
      firstName,
      lastName,
      description,
    }, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (status === 200) {
      dispatch({
        type: UPDATE_USER_INFORMATION,
        payload: { firstName, lastName, description },
      });
    }
    dispatch(setLoading(false));
  } catch (error) {
    dispatch(setLoading(false));
    dispatch(setError(error.message));
  }
};

export const deleteUserAvatar = (userId, token) => async (dispatch) => {
  try {
    const { status } = await axios.delete(`http://localhost:5050/api/user/${userId}/avatar`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (status === 204) {
      dispatch({
        type: DELETE_USER_AVATAR,
      });
    }

    dispatch(setLoading(false));
  } catch (error) {
    dispatch(setLoading(false));
    dispatch(setError(error.message));
  }
};

export const updateUserAvatar = (file, userId, token) => async (dispatch) => {
  try {
    const { status, data } = await axios.patch(`http://localhost:5050/api/user/${userId}/avatar`, {
      avatar: file,
    }, {
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: `Bearer ${token}`,
      },
    });

    if (status === 200) {
      const { imageBase64, contentType } = data;

      dispatch({
        type: UPDATE_USER_AVATAR,
        payload: {
          imageBase64,
          contentType,
        },
      });
    }
    dispatch(setLoading(false));
  } catch (error) {
    dispatch(setLoading(false));
    dispatch(setError(error.message));
  }
};
