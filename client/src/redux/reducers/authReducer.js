import {
  LOGIN, LOGOUT, AUTH_SET_ERROR, AUTH_SET_LOADING, REGISTER, SET_CREDENTIALS,
} from '../actionTypes/auth';

const initialState = {
  isAuthenticated: false,
  token: null,
  error: null,
  isLoading: false,
};

// eslint-disable-next-line default-param-last
export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state, token: action.payload, isAuthenticated: true, isLoading: false,
      };
    case REGISTER:
      return {
        ...state, token: action.payload, isAuthenticated: true, isLoading: false,
      };
    case LOGOUT:
      return {
        ...state, token: null, isAuthenticated: false,
      };
    case SET_CREDENTIALS:
      return { ...state, token: action.payload, isAuthenticated: true };
    case AUTH_SET_LOADING:
      return { ...state, isLoading: action.payload };
    case AUTH_SET_ERROR:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};

export default authReducer;
