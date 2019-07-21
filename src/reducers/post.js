import {
  CREATE_POST_SUCCESS,
  CREATE_POST_ERROR,
  SET_POST,
  SET_POSTS,
} from '../actions/post'

const defaultState = {
  posts: null,
  createPostSuccess: null,
  createPostError: null,
}

export default function post(state = defaultState, action) {
  switch(action.type) {
    case CREATE_POST_SUCCESS:
      return {
        ...state,
        createPostSuccess: action.msg,
      }
    case CREATE_POST_ERROR:
      return {
        ...state,
        createPostError: action.err,
      }
    case SET_POST:
      return {
        ...state,
        posts: {
          ...state.posts,
          [action.post.id]: action.post,
        },
      }
    case SET_POSTS:
      return {
        ...state,
        posts: action.posts,
      }
    default:
      return state
  }
}
