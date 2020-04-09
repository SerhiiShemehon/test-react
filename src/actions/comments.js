import axios from "axios";

import {
  COMMENTS_LOADING,
  COMMENTS_DATA,
  COMMENTS_ERROR,
  URL_COMMENTS
} from "../data";

const commentsLoading = () => ({
  type: COMMENTS_LOADING
});

const commentsData = (payload) => ({
  type: COMMENTS_DATA,
  payload
});

const commentsError = () => ({
  type: COMMENTS_ERROR
});

export const getСomments = () => {

  return (dispatch) => {
    dispatch(commentsLoading());
    axios.get(URL_COMMENTS)
      .then(({ data }) => {
        dispatch(commentsData(data));
      })
      .catch((error) => {
        dispatch(commentsError());
      })
  };
}