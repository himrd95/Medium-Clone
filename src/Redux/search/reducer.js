import { SEARCH_RES } from "./actionTypes";

const init = {
    data: []
}
const searchReducer = (state = init, { type, payload }) => {
  switch (type) {
    case SEARCH_RES: {
      return {
        ...state,
        data:payload,
      };
    }
    default:
      return state;
  }
};
export { searchReducer };
