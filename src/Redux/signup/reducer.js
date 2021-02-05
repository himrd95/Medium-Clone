// import { getAuth, setAuth } from "../Utils/blogLocalStorage";
import { getAuth, setAuth } from "../../Components/Utils/blogLocalStorage";
import {
  FB_REQ,
  FB_SUC,
  GOOGLE_AUTH,
  GET_REQ,
  GET_FAIL,
  GET_SUC,
  GET_DATA,
} from "./actionTypes";

const initState = {
  image: "",
  isauth: setAuth("auth") || false,
  data: [],
  blog: [],
};

const reducer = (state = initState, { type, isauth, res, payload, data }) => {
  switch (type) {
    case GOOGLE_AUTH: {
      getAuth("auth", true);
      return {
        ...state,
        isauth: res,
      };
    }

    case FB_REQ: {
      return {
        ...state,
      };
    }

    case FB_SUC: {
      return {
        ...state,
        isauth: res,
      };
    }

    case GET_SUC: {
      return {
        ...state,
        blog: payload,
      };
    }

    case GET_REQ: {
      return {
        ...state,
      };
    }

    case GET_FAIL: {
      return {
        ...state,
      };
    }

    case GET_DATA: {
      return {
        ...state,
        data: payload,
      };
    }
    default:
      return state;
  }
};

export { reducer };
