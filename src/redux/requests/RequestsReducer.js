import {
  ADD_NEW_REQUEST,
  TOO_MANY_REQUESTS,
  CLEAR_TOO_MANY_REQUESTS,
  CLEAR_REQUESTS,
} from "./RequestsActions.types";

const initialStateTeams = {
  requests: [],
  initTimestamp: new Date(),
  tooManyRequests: false,
  error: null,
};

export const requestsReducer = (state = initialStateTeams, action = {}) => {
  switch (action.type) {
    case ADD_NEW_REQUEST:
      return Object.assign({}, state, {
        requests: [...state.requests, { requestedAt: new Date() }],
      });
    case TOO_MANY_REQUESTS:
      return Object.assign({}, state, {
        tooManyRequests: true,
      });
    case CLEAR_TOO_MANY_REQUESTS:
      return Object.assign({}, state, {
        tooManyRequests: false,
      });
    case CLEAR_REQUESTS:
      return Object.assign({}, state, {
        requests: action.payload,
      });

    default:
      return state;
  }
};
