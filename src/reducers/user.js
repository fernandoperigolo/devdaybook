import {
  CREATE_USER_SUCCESS,
  CREATE_USER_ERROR,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_ERROR,
  LOGOUT_USER_SUCCESS,
  LOGOUT_USER_ERROR,
  SET_USER,
  CLEAR_ALL_MESSAGES,
} from '../actions/user'

const defaultState = {
  createAccountSuccess: null,
  createAccountError: null,
  loginSuccess: null,
  loginError: null,
  logoutSuccess: null,
  logoutError: null,
  userData: null,
}

export default function user(state = defaultState, action) {
  switch(action.type) {
    case CREATE_USER_SUCCESS:
      return {
        ...state,
        createAccountSuccess: action.msg,
      }
    case CREATE_USER_ERROR:
      return {
        ...state,
        createAccountError: action.err,
      }
    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        loginSuccess: action.msg,
      }
    case LOGIN_USER_ERROR:
      return {
        ...state,
        loginError: action.err,
      }
    case LOGOUT_USER_SUCCESS:
      return {
        ...state,
        logoutSuccess: action.msg,
      }
    case LOGOUT_USER_ERROR:
      return {
        ...state,
        logoutError: action.err,
      }
    case SET_USER:
      return {
        ...state,
        userData: action.user ? {
          ...action.user,
        } : null,
      }
    case CLEAR_ALL_MESSAGES:
      return {
        ...state,
        createAccountSuccess: null,
        createAccountError: null,
        loginSuccess: null,
        loginError: null,
        logoutSuccess: null,
        logoutError: null,
      }
    default:
      return state
  }
}