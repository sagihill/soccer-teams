import { getTeams as getTeamAPI } from "../services/TeamsService";
import { toggleTeamBookmark as toggleTeamBookmarkAPI } from "../services/TeamsService";
import {
  REQUEST_TEAMS_FAILED,
  REQUEST_TEAMS_SUCCESS,
  REQUEST_TEAMS_PENDING,
  TOGGLE_TEAM_BOOKMARK_PENDING,
  TOGGLE_TEAM_BOOKMARK_SUCCESS,
  TOGGLE_TEAM_BOOKMARK_FAILED,
  TOO_MANY_REQUESTS,
  CLEAR_TOO_MANY_REQUESTS,
  CLEAR_REQUESTS_COUNTER,
} from "./TeamActions.types";

export const getTeams = () => (dispatch) => {
  dispatch({ type: REQUEST_TEAMS_PENDING });
  getTeamAPI()
    .then((data) => dispatch({ type: REQUEST_TEAMS_SUCCESS, payload: data }))
    .catch((error) => dispatch({ type: REQUEST_TEAMS_FAILED, payload: error }));
};

export const toggleTeamBookmark =
  (id, requests, tooManyRequests) => (dispatch) => {
    const now = Date.now();
    const diff = now - requests.timestamp.getTime();
    const countDiff = now - requests.initTimestamp.getTime();

    if (countDiff >= 5000 && requests.counter >= 5) {
      dispatch({ type: TOO_MANY_REQUESTS });
    } else {
      dispatch({ type: CLEAR_TOO_MANY_REQUESTS });
      dispatch({ type: CLEAR_REQUESTS_COUNTER });
    }
    if (diff < 2000 || tooManyRequests) {
      dispatch({ type: TOO_MANY_REQUESTS });
    } else {
      dispatch({ type: CLEAR_TOO_MANY_REQUESTS });
      dispatch({ type: CLEAR_REQUESTS_COUNTER });
      dispatch({ type: TOGGLE_TEAM_BOOKMARK_PENDING });
      toggleTeamBookmarkAPI(id)
        .then((response) => response.json())
        .then((data) => {
          return dispatch({
            type: TOGGLE_TEAM_BOOKMARK_SUCCESS,
            payload: data.id,
          });
        })
        .catch((error) =>
          dispatch({ type: TOGGLE_TEAM_BOOKMARK_FAILED, payload: error })
        );
    }
  };
