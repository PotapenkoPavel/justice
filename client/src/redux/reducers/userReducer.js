import {
  DELETE_USER_AVATAR,
  FETCH_USER,
  REMOVE_USER,
  SET_USER,
  UPDATE_USER_AVATAR,
  UPDATE_USER_INFORMATION,
  USER_SET_ERROR,
  USER_SET_LOADING,
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
    case REMOVE_USER:
      return { ...initialState };
    case FETCH_USER: {
      let { description } = action.payload;
      if (description === null) description = '';
      return {
        ...state, ...action.payload, description, isLoading: false,
      };
    }
    case UPDATE_USER_INFORMATION:
      return { ...state, ...action.payload, isLoading: false };
    case UPDATE_USER_AVATAR:
      return { ...state, avatar: action.payload, isLoading: false };
    case DELETE_USER_AVATAR:
      return { ...state, avatar: null, isLoading: false };
    case USER_SET_LOADING:
      return { ...state, isLoading: action.payload };
    case USER_SET_ERROR:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};
