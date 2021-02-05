import {
  FB_FAIL,
  FB_REQ,
  FB_SUC,
  GET_DATA,
  GET_FAIL,
  GET_REQ,
  GET_SUC,
  GOOGLE_AUTH,
} from "./actionTypes";
import axios from "axios";

const googleAuth = (res) => {
  return {
    type: GOOGLE_AUTH,
    res,
  };
  //   return async (dispatch) => {
  // return (dispatch) => {
  //   if (typeof res === undefined) {
  //     res = [];
  //   }
  //   dispatch({ type: GOOGLE_AUTH, res });
  // };
};

const fbRequest = () => {
  return {
    type: FB_REQ,
  };
};

const fbSuccess = (res) => {
  return {
    type: FB_SUC,
    res,
  };
};

const fbFail = (err) => {
  console.log("fail");
  return {
    type: FB_FAIL,
    err,
  };
};

const fbAuth = (res) => {
  //   dispatch(fbRequest());
  //   dispatch(fbSuccess(payload));
  //   console.log(payload);
  //   dispatch(fbFail());
  console.log(res);
};

const searchSuc = (payload) => {
  return {
    type: GET_SUC,
    payload,
  };
};

const getRequest = () => {
  return {
    type: GET_REQ,
  };
};

const getFail = () => {
  return {
    type: GET_FAIL,
  };
};

const getSearch = (payload) => (dispatch) => {
  dispatch(getRequest());
  return axios
    .get("https://protected-mesa-68876.herokuapp.com/medium")
    .then((res) => {
      dispatch(searchSuc(res.data));
      // console.log(res.data);
    })
    .catch((err) => {
      console.log(err);
      dispatch(getFail(err));
    });
};

const setUser = (profileObj) => {
  return axios
    .post("https://protected-mesa-68876.herokuapp.com/users", {
      profileObj,
    })
    .then((res) => {
      console.log(res);
    })
    .catch((err) => console.log(err));
};

const profileSuc = (payload) => {
  return {
    type: GET_DATA,
    payload,
  };
};

const getProfile = (payload) => (dispatch) => {
  return axios
    .get("https://protected-mesa-68876.herokuapp.com/users")
    .then((res) => {
      console.log(res.data[0].profileObj);
      dispatch(profileSuc(res.data[res.data.length - 1].profileObj));
      // dispatch(profileSuc(payload));
    })
    .catch((err) => console.log(err));
};
export { googleAuth, fbAuth, fbSuccess, getSearch, setUser, getProfile };
