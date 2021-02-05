import {
  GET_TRENDINGS,
  GET_TRENDINGS_SUCCESS,
  GET_TRENDINGS_FAILURE,
  POST_SUC,
} from "./actionList";

const initState = {
  details: {
    data: [],
    isLoading: false,
    isError: false,
  },
};

export const trendReducer = (state = initState, { type, payload, recent }) => {
  switch (type) {
    case GET_TRENDINGS: {
      return {
        ...state,
        details: { data: [], isLoading: true },
      };
    }
    case GET_TRENDINGS_SUCCESS: {
      const { response } = payload;
      return {
        ...state,
        details: { data: [...response], isLoading: false },
      };
    }
    case GET_TRENDINGS_FAILURE: {
      return {
        ...state,
        details: { isError: true },
      };
    }

    case POST_SUC: {
      return {
        ...state,
        recent: payload,
      };
    }
    default:
      return state;
  }
};
