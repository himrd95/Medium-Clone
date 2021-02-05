import axios from "axios";
import { getSearch } from "../signup/action";
import { BOOK_SUC } from "./actionTypes";

const patchBook = (id) => {
  return {
    type: BOOK_SUC,
    id,
  };
};

const patchReq = (id) => (dispatch) => {
  return axios
    .patch(`https://protected-mesa-68876.herokuapp.com/medium/${id}`, {
      book: true,
    })
    .then((res) => {
      console.log(res);
      dispatch(patchBook(id));
    })
    .catch((err) => console.log(err));
};

const patchFalse = (id) => (dispatch) => {
  return axios
    .patch(`https://protected-mesa-68876.herokuapp.com/medium/${id}`, {
      book: false,
    })
    .then((res) => {
      console.log(res);
      dispatch(patchBook());
      dispatch(getSearch());
    })
    .catch((err) => console.log(err));
};

export { patchReq, patchFalse };
