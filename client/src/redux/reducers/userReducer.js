import {
  DELETE_USER_AVATAR, SET_USER, UPDATE_USER_AVATAR, UPDATE_USER_INFORMATION,
} from '../actionTypes/user';

const initialState = {
  _id: null,
  firstName: '',
  lastName: '',
  description: '',
  avatar: null,
  isLoading: false,
  error: null,
};

// eslint-disable-next-line default-param-last
export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return { ...state, ...action.payload.user };
    case UPDATE_USER_INFORMATION:
      return { ...state, ...action.payload };
    case UPDATE_USER_AVATAR:
      return { ...state, avatar: action.payload };
    case DELETE_USER_AVATAR:
      return { ...state, avatar: null };
    default:
      return state;
  }
};
