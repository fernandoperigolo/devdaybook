import { firestore } from '../utils/firebase'

export const CREATE_POST_SUCCESS = 'CREATE_POST_SUCCESS'
export const CREATE_POST_ERROR = 'CREATE_POST_ERROR'
export const SET_POST = 'SET_POST'

function createPostSuccess (msg) {
  return {
    type: CREATE_POST_SUCCESS,
    msg,
  }
}

function createPostError (err) {
  return {
    type: CREATE_POST_ERROR,
    err,
  }
}

function setPost (post) {
  return {
    type: SET_POST,
    post,
  }
}

export function handleCreatePost (post) {
  return (dispatch, getState) => {
    const { user } = getState()
    firestore.collection('posts').doc(user.userData.uid).set({
      title: post.title,
      content: post.content
    }).then(() => {
      dispatch(setPost(post))
      dispatch(createPostSuccess('Post created'))
    }).catch(err => {
      dispatch(createPostError('Error on create post'))
    })
  }
}
