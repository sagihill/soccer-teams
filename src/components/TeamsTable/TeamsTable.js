import React, { useEffect } from "react";
import { TableComponent } from "./TeamsTable.styles";
import { TableRow } from "../TableRow/TableRow";
import { TableHeaders } from "../TableHeaders/TableHeaders";

export const TeamsTable = ({
  teams,
  onGetTeams,
  bookmarkedTeams,
  requests,
  tooManyRequests,
}) => {
  useEffect(function (params) {
    onGetTeams();
  }, []);

  return (
    <TableComponent>
      <TableHeaders />
      {teams
        .sort((a, b) => a.id - b.id)
        .map((team) => {
          const isBookmarked = bookmarkedTeams.has(team.id);
          return (
            <TableRow
              key={team.id}
              team={team}
              isBookmarked={isBookmarked}
              requests={requests}
              tooManyRequests={tooManyRequests}
            />
          );
        })}
    </TableComponent>
  );
};
