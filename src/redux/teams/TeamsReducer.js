import {
  REQUEST_TEAMS_PENDING,
  REQUEST_TEAMS_SUCCESS,
  REQUEST_TEAMS_FAILED,
  TOGGLE_TEAM_BOOKMARK_PENDING,
  TOGGLE_TEAM_BOOKMARK_SUCCESS,
  TOGGLE_TEAM_BOOKMARK_FAILED,
} from "./TeamActions.types";

const initialStateTeams = {
  teams: [],
  bookmarkedTeams: new Set(),
  isPending: true,
  error: null,
};

export const teamsReducer = (state = initialStateTeams, action = {}) => {
  let bookmarkedTeams = state.bookmarkedTeams;
  switch (action.type) {
    case REQUEST_TEAMS_PENDING:
      return Object.assign({}, state, { isPending: true });
    case REQUEST_TEAMS_SUCCESS:
      action.payload.forEach((team) => {
        if (team.bookmark && !bookmarkedTeams.has(team.id)) {
          bookmarkedTeams.add(team.id);
        }
      });
      return Object.assign({}, state, {
        teams: action.payload,
        isPending: false,
        bookmarkedTeams,
      });
    case REQUEST_TEAMS_FAILED:
      return Object.assign({}, state, {
        error: action.payload,
        isPending: false,
      });

    case TOGGLE_TEAM_BOOKMARK_PENDING:
      return Object.assign({}, state, {
        isPending: true,
      });
    case TOGGLE_TEAM_BOOKMARK_SUCCESS:
      bookmarkedTeams = state.bookmarkedTeams;
      const isDeleted = bookmarkedTeams.delete(action.payload);
      if (!isDeleted) {
        bookmarkedTeams.add(action.payload);
      }
      return Object.assign({}, state, {
        bookmarkedTeams,
        isPending: false,
      });
    case TOGGLE_TEAM_BOOKMARK_FAILED:
      return Object.assign({}, state, {
        error: action.payload,
        isPending: false,
      });

    default:
      return state;
  }
};
