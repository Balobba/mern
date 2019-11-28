import {
  GET_POSTS,
  POST_ERROR,
  UPDATE_LIKES,
  DELETE_POST,
  ADD_POST,
  GET_POST,
  ADD_COMMENT,
  REMOVE_COMMENT
} from "../actions/types";

const initialState = {
  posts: [],
  post: null,
  loading: true,
  error: {}
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_POSTS:
      return {
        ...state,
        posts: payload,
        loading: false
      };

    case GET_POST:
      return {
        ...state,
        post: payload,
        loading: false
      };

    case ADD_POST:
      return {
        ...state,
        // Notes: Adds payload (new post) to a copy of the old posts-array
        posts: [payload, ...state.posts],
        loading: false
      };

    case DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter(post => post._id !== payload),
        loading: false
      };

    case POST_ERROR:
      return {
        ...state,
        error: payload,
        loading: false
      };

    case UPDATE_LIKES:
      return {
        ...state,
        // Notes: Check to see if post ID matches the payload post ID before manipulating likes
        posts: state.posts.map(post =>
          post._id === payload.id ? { ...post, likes: payload.likes } : post
        ),
        loading: false
      };

    case ADD_COMMENT:
      return {
        ...state,
        post: { ...state.post, comments: payload },
        loading: false
      };

    case REMOVE_COMMENT:
      return {
        ...state,
        post: {
          ...state.post,
          comments: state.post.comments.filter(
            // Notes: Filter out comment with specific id (id comes from the payload from the action!)
            comment => comment._id !== payload
          )
        },
        loading: false
      };

    default:
      return state;
  }
}
