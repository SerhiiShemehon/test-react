import {
  ALBUMS_LOADING,
  ALBUMS_DATA,
  ALBUMS_ERROR
} from "../data";

const INITIAL_DATA = {
  isLoadingAlbums: false,
  isErrorAlbums: false,
  albumsData: []
};

export const albumsReducer = (state = INITIAL_DATA, action) => {
  switch (action.type) {
    case ALBUMS_LOADING: {
      return {
        ...state,
        isErrorAlbums: false,
        isLoadingAlbums: true
      };
    }
    case ALBUMS_DATA: {
      return {
        ...state,
        isLoadingAlbums: false,
        isErrorAlbums: false,
        albumsData: action.payload
      };
    }
    case ALBUMS_ERROR: {
      return {
        ...state,
        isLoadingAlbums: false,
        isErrorAlbums: true,
      };
    }
    default: {
      return state;
    }
  }
}