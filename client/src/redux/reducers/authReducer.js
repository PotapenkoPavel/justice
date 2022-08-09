import {
  LOGIN, LOGOUT, AUTH_SET_ERROR, AUTH_SET_LOADING, TRY_AUTHENTICATE, REGISTER,
} from '../actionTypes/auth';

const initialState = {
  isAuthenticated: false,
  token: null,
  user: null,
  error: null,
  isLoading: false,
};

// eslint-disable-next-line default-param-last
export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case TRY_AUTHENTICATE:
      return action.payload ? {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
        isAuthenticated: action.payload.isAuthenticated,
      } : { ...state };
    case LOGIN:
      return {
        ...state, user: action.payload.user, token: action.payload.token, isAuthenticated: true,
      };
    case REGISTER:
      return {
        ...state, user: action.payload.user, token: action.payload.token, isAuthenticated: true,
      };
    case LOGOUT:
      return {
        ...state, user: null, token: null, isAuthenticated: false,
      };
    case AUTH_SET_LOADING:
      return { ...state, isLoading: action.payload };
    case AUTH_SET_ERROR:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};

export default authReducer;
