import {
  USERS_LOADING,
  USERS_DATA,
  USERS_ERROR
} from "../data";

const INITIAL_DATA = {
  isLoadingUsers: false,
  isErrorUsers: false,
  usersData: []
};

export const usersReducer = (state = INITIAL_DATA, action) => {
  switch (action.type) {
    case USERS_LOADING: {
      return {
        ...state,
        isErrorUsers: false,
        isLoadingUsers: true
      };
    }
    case USERS_DATA: {
      return {
        ...state,
        isLoadingUsers: false,
        isErrorUsers: false,
        usersData: action.payload
      };
    }
    case USERS_ERROR: {
      return {
        ...state,
        isLoadingUsers: false,
        isErrorUsers: true,
      };
    }
    default: {
      return state;
    }
  }
}