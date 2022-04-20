import {
  TOO_MANY_REQUESTS,
  ADD_NEW_REQUEST,
  CLEAR_REQUESTS,
  CLEAR_TOO_MANY_REQUESTS,
} from "./RequestsActions.types";

export const handleRequest = (requests) => (dispatch) => {
  let currentRequests = [...requests];
  const now = Date.now();

  const firstRequest = getFirstRequest(currentRequests);
  const diffFromFirst = now - firstRequest?.requestedAt?.getTime();
  if (firstRequest && diffFromFirst > 10000) {
    currentRequests = filterFirstRequest(currentRequests);
    dispatch({ type: CLEAR_REQUESTS, payload: currentRequests });
  }

  if (currentRequests.length >= 10) {
    dispatch({ type: TOO_MANY_REQUESTS });
    return;
  }

  const lastRequest = getLastRequest(currentRequests);
  const diffFromLast = now - lastRequest?.requestedAt?.getTime();

  if (lastRequest && diffFromLast < 1000) {
    dispatch({ type: TOO_MANY_REQUESTS });
    return;
  }

  dispatch({ type: ADD_NEW_REQUEST });
  dispatch({ type: CLEAR_TOO_MANY_REQUESTS });
};

const filterFirstRequest = (requests) => {
  let filtered = [...requests.sort((a, b) => a.requestedAt - b.requestedAt)];

  filtered.shift();

  return filtered;
};

const getLastRequest = (requests) => {
  let filtered = requests.sort((a, b) => a.requestedAt - b.requestedAt);
  const last = filtered[filtered.length - 1];
  return last;
};

const getFirstRequest = (requests) => {
  let filtered = requests.sort((a, b) => a.requestedAt - b.requestedAt);
  const first = filtered[0];
  return first;
};
