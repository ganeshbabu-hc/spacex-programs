import { SEARCH_SUCCESS, RESET_SEARCH } from "../actions/types";

const initialState = { programs: [], loading: true };

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case SEARCH_SUCCESS:
      return { programs: payload.programs, loading: payload.loading };
    case RESET_SEARCH:
      return { programs: [], loading: true };
    default:
      return state;
  }
}
