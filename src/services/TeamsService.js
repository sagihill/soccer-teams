export const getTeams = () => {
  return fetch(`${process.env["REACT_APP_BE_BASE_URL"]}/teams`)
    .then((resp) => resp.json())
    .then((teams) => {
      return teams;
    });
};

export const toggleTeamBookmark = (id) => {
  return fetch(
    `${process.env["REACT_APP_BE_BASE_URL"]}/teams/bookmark/${id}`,
    {
      method: "PATCH",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    }
  );
};
