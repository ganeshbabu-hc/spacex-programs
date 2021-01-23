import { UPDATE_FILTER } from "../actions/types";

const initialState = {
  launchYear: null,
  successFulLaunch: null,
  successFulLaing: null
};

export default function (state = initialState, action) {
  const { type } = action;
  switch (type) {
    case UPDATE_FILTER:
      return {
        ...state
      };
    default:
      return state;
  }
}
