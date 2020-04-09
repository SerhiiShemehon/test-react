import axios from "axios";

import {
  PHOTOS_LOADING,
  PHOTOS_DATA,
  PHOTOS_ERROR,
  URL_PHOTOS
} from "../data";

const photosLoading = () => ({
  type: PHOTOS_LOADING
});

const photosData = (payload) => ({
  type: PHOTOS_DATA,
  payload
});

const photosError = () => ({
  type: PHOTOS_ERROR
});

export const getPhotos = () => {

  return (dispatch) => {
    dispatch(photosLoading());
    axios.get(URL_PHOTOS)
      .then(({ data }) => {
        dispatch(photosData(data));
      })
      .catch((error) => {
        dispatch(photosError());
      })
  };
}