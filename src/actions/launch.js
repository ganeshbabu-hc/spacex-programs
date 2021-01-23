import { SEARCH_SUCCESS, SET_MESSAGE, SEARCH_FAIL } from "./types";
import LaunchService from "../services/launchService";

export const searchLaunchPrograms = (year) => (dispatch) => {
  return LaunchService.search().then(
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
