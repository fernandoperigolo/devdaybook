import { auth } from '../utils/firebase'

export const CREATE_USER_SUCCESS = 'CREATE_USER_SUCCESS'
export const CREATE_USER_ERROR = 'CREATE_USER_ERROR'
export const LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS'
export const LOGIN_USER_ERROR = 'LOGIN_USER_ERROR'
export const SET_USER = 'SET_USER'
export const LOGOUT_USER_SUCCESS = 'LOGOUT_USER_SUCCESS'
export const LOGOUT_USER_ERROR = 'LOGOUT_USER_ERROR'
export const CLEAR_ALL_MESSAGES = 'CLEAR_ALL_MESSAGES'

function createUserSuccess (msg) {
  return {
    type: CREATE_USER_SUCCESS,
    msg,
  }
}

function createUserError (err) {
  return {
    type: CREATE_USER_ERROR,
    err,
  }
}

function loginUserSuccess (msg) {
  return {
    type: LOGIN_USER_SUCCESS,
    msg,
  }
}

function loginUserError (err) {
  return {
    type: LOGIN_USER_ERROR,
    err,
  }
}

export function setUser (user) {
  return {
    type: SET_USER,
    user,
  }
}

function logoutUserSuccess (msg) {
  return {
    type: LOGOUT_USER_SUCCESS,
    msg,
  }
}

function logoutUserError (err) {
  return {
    type: LOGOUT_USER_ERROR,
    err,
  }
}

function clearAllMessages (err) {
  return {
    type: CLEAR_ALL_MESSAGES,
  }
}

export function handleCreateUser (user) {
  return (dispatch) => {
    // call firebase create
    auth.createUserWithEmailAndPassword(user.createAccountEmail, user.createAccountPassword).then(credential => {
      return auth.currentUser.updateProfile({
        displayName: user.createAccountName,
      }).then(() => {
        return credential.user
      })
    }).then((user) => {
      dispatch(setUser(user))
      dispatch(clearAllMessages())
      dispatch(createUserSuccess('Account created'))
    }).catch(error => {
      console.error('handleCreateAccountFormSubmit:', error.message)
      dispatch(createUserError('Error on Create User'))
    }) 
  }
}

export function handleLogin (email, password) {
  return (dispatch) => {
    // call firebase login
    auth.signInWithEmailAndPassword(email, password).then(credential => {
      dispatch(clearAllMessages())
      dispatch(loginUserSuccess('Welcome back'))
    }).catch(error => {
      console.error('signInWithEmailAndPassword:', error.message)
      dispatch(loginUserError(error.message))
    })
  }
}

export function handleLogout () {
  return (dispatch, getState) => {
    // call firebase log out
    auth.signOut().then(something => {
      dispatch(setUser())
      dispatch(clearAllMessages())
      dispatch(logoutUserSuccess('You logged out'))
    }).catch(error => {
      dispatch(logoutUserError('Error when logout'))
    }) 
  }
}

export function onAuthStateChanged () {
  return (dispatch, getState) => {
    auth.onAuthStateChanged(user => {
      if (user) {
        return dispatch(setUser(user))
      } else {
      }
    })
  }
}
