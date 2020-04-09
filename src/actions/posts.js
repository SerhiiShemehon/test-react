import axios from "axios";

import {
  POSTS_LOADING,
  POSTS_DATA,
  POSTS_ERROR,
  URL_POSTS
} from "../data";

const postsLoading = () => ({
  type: POSTS_LOADING
});

const postsData = (payload) => ({
  type: POSTS_DATA,
  payload
});

const postsError = () => ({
  type: POSTS_ERROR
});

export const getPosts = () => {

  return (dispatch) => {
    dispatch(postsLoading());
    axios.get(URL_POSTS)
      .then(({ data }) => {
        dispatch(postsData(data));
      })
      .catch((error) => {
        dispatch(postsError());
      })
  };
}