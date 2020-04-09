import {
  POSTS_LOADING,
  POSTS_DATA,
  POSTS_ERROR
} from "../data";

const INITIAL_DATA = {
  isLoadingPosts: false,
  isErrorPosts: false,
  postsData: []
};

export const postsReducer = (state = INITIAL_DATA, action) => {
  switch (action.type) {
    case POSTS_LOADING: {
      return {
        ...state,
        isErrorPosts: false,
        isLoadingPosts: true
      };
    }
    case POSTS_DATA: {
      return {
        ...state,
        isLoadingPosts: false,
        isErrorPosts: false,
        postsData: action.payload
      };
    }
    case POSTS_ERROR: {
      return {
        ...state,
        isLoadingPosts: false,
        isErrorPosts: true,
      };
    }
    default: {
      return state;
    }
  }
}