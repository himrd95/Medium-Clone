import {
  GET_TRENDINGS,
  GET_TRENDINGS_SUCCESS,
  GET_TRENDINGS_FAILURE,
  POST_SUC,
} from "./actionList";
import axios from "axios";

const getTrending = () => {
  return {
    type: GET_TRENDINGS,
    payload: {
      isLoading: true,
    },
  };
};

const getTrendingSuccess = (response) => {
  return {
    type: GET_TRENDINGS_SUCCESS,
    payload: {
      response,
      isLoading: true,
    },
  };
};

const getTrendingFailure = (error) => {
  return {
    type: GET_TRENDINGS_FAILURE,
    payload: {
      isError: error,
    },
  };
};

export const fetchTrending = () => (dispatch) => {
  dispatch(getTrending());
  return axios
    .get("https://protected-mesa-68876.herokuapp.com/medium")
    .then((res) => dispatch(getTrendingSuccess(res.data)))
    .catch((err) => dispatch(getTrendingFailure(err)));
};

const postBlogid = (payload) => {
  return {
    type: POST_SUC,
    payload,
  };
};

export const setRecent = (payload) => (dispatch) => {

  return axios
    .post(`https://protected-mesa-68876.herokuapp.com/users/`, {
      recent: payload,
    })
    .then((res) => {
      console.log(res);
      dispatch(postBlogid(payload));
    })
    .catch((err) => console.log(err));
};
