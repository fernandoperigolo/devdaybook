import { firestore } from '../utils/firebase'

export const CREATE_POST_SUCCESS = 'CREATE_POST_SUCCESS'
export const CREATE_POST_ERROR = 'CREATE_POST_ERROR'
export const SET_POST = 'SET_POST'
export const SET_POSTS = 'SET_POSTS'

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

function setPosts (posts) {
  return {
    type: SET_POSTS,
    posts,
  }
}

export function handleCreatePost (post) {
  return (dispatch, getState) => {
    const { user } = getState()
    return firestore.collection('posts').add({
      uid: user.userData.uid,
      title: post.createPostTitle,
      content: post.createPostContent,
      created: new Date(),
    }).then(() => {
      dispatch(setPost({
        uid: user.userData.uid,
        title: post.createPostTitle,
        content: post.createPostContent,
      }))
      return dispatch(createPostSuccess('Post created'))
    }).catch(err => {
      return dispatch(createPostError(err))
    })
  }
}

export function handleGetUserPosts (uid) {
  return (dispatch) => {
    return firestore.collection('posts').where('uid', '==', uid).orderBy('created', 'desc').get().then((querySnapshot) => {
      const posts = normalizeFirebaseCollectionToObjectBy('id', querySnapshot.docs)
      return dispatch(setPosts(posts))
    }).catch(error => {
      console.error('handleGetUserPosts error:', error.message)
    })
  }
}

function normalizeFirebaseCollectionToObjectBy(attr, object){
  return object.reduce((newObject, item) => {
    newObject[item[attr]] = item.data()
    return newObject
  }, {})
}
