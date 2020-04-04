import axios from "axios";

import {
  USERS_LOADING,
  USERS_DATA,
  USERS_ERROR,
  URL_USERS
} from "../data";

const usersLoading = () => ({
  type: USERS_LOADING
});

const usersData = (payload) => ({
  type: USERS_DATA,
  payload
});

const usersError = () => ({
  type: USERS_ERROR
});

export const getUsers = () => {

  return (dispatch) => {
    dispatch(usersLoading());
    axios.get(URL_USERS)
      .then(({ data }) => {
        dispatch(usersData(data));
      })
      .catch((error) => {
        dispatch(usersError());
      })
  };
}