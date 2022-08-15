import UserApi from '../../services/user';
import {
  FETCH_USER, REMOVE_USER,
  USER_SET_ERROR,
  USER_SET_LOADING,
  SET_USER,
  UPDATE_USER_AVATAR,
  UPDATE_USER_INFORMATION, DELETE_USER_AVATAR,
} from '../actionTypes/user';

export const setError = (message) => ({
  type: USER_SET_ERROR,
  payload: message,
});

export const setLoading = (value) => ({
  type: USER_SET_LOADING,
  payload: value,
});

export const setUser = (user) => ({
  type: SET_USER,
  payload: user,
});

export const removeUser = () => ({
  type: REMOVE_USER,
});

export const fetchUser = (id, token) => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const { status, data: user } = await UserApi.getUser(id, token);

    if (status === 200) {
      dispatch({
        type: FETCH_USER,
        payload: user,
      });
    }
  } catch (err) {
    dispatch(setLoading(false));
    dispatch(setError(err.response.data.message));
  }
};

export const updateUserInformation = (firstName, lastName, description, userId, token) => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const { status } = await UserApi.updateUserInformation(userId, { firstName, lastName, description }, token);

    if (status === 200) {
      dispatch({
        type: UPDATE_USER_INFORMATION,
        payload: { firstName, lastName, description },
      });
    }
  } catch (err) {
    dispatch(setLoading(false));
    dispatch(setError(err.response.data.message));
  }
};

export const updateUserAvatar = (userId, file, token) => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const { status, data } = await UserApi.updateUserAvatar(userId, file, token);

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
  } catch (error) {
    dispatch(setLoading(false));
    dispatch(setError(error.message));
  }
};

export const deleteUserAvatar = (userId, token) => async (dispatch) => {
  try {
    dispatch(setLoading(true));

    const { status } = await UserApi.deleteUserAvatar(userId, token);

    if (status === 204) {
      dispatch({
        type: DELETE_USER_AVATAR,
      });
    }
  } catch (err) {
    dispatch(setLoading(false));
    dispatch(setError(err.response.data.message));
  }
};
