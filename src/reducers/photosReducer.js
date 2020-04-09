import {
  PHOTOS_LOADING,
  PHOTOS_DATA,
  PHOTOS_ERROR
} from "../data";

const INITIAL_DATA = {
  isLoadingPhotos: false,
  isErrorPhotos: false,
  photosData: []
};

export const photosReducer = (state = INITIAL_DATA, action) => {
  switch (action.type) {
    case PHOTOS_LOADING: {
      return {
        ...state,
        isErrorPhotos: false,
        isLoadingPhotos: true
      };
    }
    case PHOTOS_DATA: {
      return {
        ...state,
        isLoadingPhotos: false,
        isErrorPhotos: false,
        photosData: action.payload
      };
    }
    case PHOTOS_ERROR: {
      return {
        ...state,
        isLoadingPhotos: false,
        isErrorPhotos: true,
      };
    }
    default: {
      return state;
    }
  }
}