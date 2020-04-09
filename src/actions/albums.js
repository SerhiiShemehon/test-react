import axios from "axios";

import {
  ALBUMS_LOADING,
  ALBUMS_DATA,
  ALBUMS_ERROR,
  URL_ALBUMS
} from "../data";

const albumsLoading = () => ({
  type: ALBUMS_LOADING
});

const albumsData = (payload) => ({
  type: ALBUMS_DATA,
  payload
});

const albumsError = () => ({
  type: ALBUMS_ERROR
});

export const getAlbums = () => {

  return (dispatch) => {
    dispatch(albumsLoading());
    axios.get(URL_ALBUMS)
      .then(({ data }) => {
        dispatch(albumsData(data));
      })
      .catch((error) => {
        dispatch(albumsError());
      })
  };
}