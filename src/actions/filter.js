import {
  SEARCH_SUCCESS,
  SET_MESSAGE,
  SEARCH_FAIL,
  RESET_SEARCH
} from "./types";
import LaunchService from "../services/launchService";

export const updateFilter = (filter) => (dispatch) => {
  dispatch({
    type: RESET_SEARCH
  });

  return LaunchService.search(filter).then(
    (data) => {
      dispatch({
        type: SEARCH_SUCCESS,
        payload: { programs: data, loading: false }
      });
      return Promise.resolve();
    },
    (error) => {
      const message = error.message || error.toString();
      dispatch({
        type: SEARCH_FAIL
      });

      dispatch({
        type: SET_MESSAGE,
        payload: message
      });

      return Promise.reject();
    }
  );
};
