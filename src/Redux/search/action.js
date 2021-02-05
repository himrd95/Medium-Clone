import axios from "axios";
import { SEARCH_RES } from "./actionTypes";

const getSearch = (payload) => {
  return {
    type: SEARCH_RES,
    payload,
  };
};
const searchSuc = (query) => (dispatch) => {
  return axios
    .get(`https://protected-mesa-68876.herokuapp.com/medium?q=${query}`)
    .then((res) => {
      console.log(res.data);
      dispatch(getSearch(res.data));
    })
    .catch((err) => {
      console.log(err);
    });
};

export { searchSuc };
