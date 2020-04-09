import {
  COMMENTS_LOADING,
  COMMENTS_DATA,
  COMMENTS_ERROR
} from "../data";

const INITIAL_DATA = {
  isLoadingComments: false,
  isErrorComments: false,
  commentsData: []
};

export const commentsReducer = (state = INITIAL_DATA, action) => {
  switch (action.type) {
    case COMMENTS_LOADING: {
      return {
        ...state,
        isErrorComments: false,
        isLoadingComments: true
      };
    }
    case COMMENTS_DATA: {
      return {
        ...state,
        isLoadingComments: false,
        isErrorComments: false,
        commentsData: action.payload
      };
    }
    case COMMENTS_ERROR: {
      return {
        ...state,
        isLoadingComments: false,
        isErrorComments: true,
      };
    }
    default: {
      return state;
    }
  }
}