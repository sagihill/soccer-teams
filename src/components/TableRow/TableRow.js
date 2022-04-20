import React from "react";
import { RowComponent, ItemContainer } from "./TableRow.styles";
import { TeamLogo } from "../TeamLogo/TeamLogo";
import BookmarkIcon from "../BookmarkIcon/BookmarkIcon";

const wrapComponents = (components) => {
  
}

export const TableRow = ({ team, isBookmarked, requests, tooManyRequests }) => {
  return (
    <RowComponent>
      <ItemContainer>
        <TeamLogo url={team.crestImageUrl} />
      </ItemContainer>
      <ItemContainer>
        <span>{team.name}</span>
      </ItemContainer>
      <ItemContainer>
        <span>{team.yearFounded}</span>
      </ItemContainer>
      <ItemContainer>
        <BookmarkIcon
          isBookmarked={isBookmarked}
          id={team.id}
          requests={requests}
          tooManyRequests={tooManyRequests}
        />
      </ItemContainer>
    </RowComponent>
  );
};
