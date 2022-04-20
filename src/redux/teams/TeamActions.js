import {
  toggleTeamBookmark as toggleTeamBookmarkAPI,
  getTeams as getTeamAPI,
} from "../../services/TeamsService";
import {
  REQUEST_TEAMS_FAILED,
  REQUEST_TEAMS_SUCCESS,
  REQUEST_TEAMS_PENDING,
  TOGGLE_TEAM_BOOKMARK_PENDING,
  TOGGLE_TEAM_BOOKMARK_SUCCESS,
  TOGGLE_TEAM_BOOKMARK_FAILED,
} from "./TeamActions.types";

export const getTeams = () => (dispatch) => {
  dispatch({ type: REQUEST_TEAMS_PENDING });
  getTeamAPI()
    .then((data) => dispatch({ type: REQUEST_TEAMS_SUCCESS, payload: data }))
    .catch((error) => dispatch({ type: REQUEST_TEAMS_FAILED, payload: error }));
};

export const toggleTeamBookmark = (id) => (dispatch) => {
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
};
