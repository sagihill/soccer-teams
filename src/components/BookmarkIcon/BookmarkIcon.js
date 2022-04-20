import React from "react";
import { connect } from "react-redux";
import { BookmarkIconContainer } from "./BookmarkIcon.styles";
import { IconsDirectory } from "./IconsDirectory";
import { toggleTeamBookmark } from "../../redux/teams/TeamActions";
import { handleRequest } from "../../redux/requests/RequestsActions";

const mapDispatchToProps = (dispatch) => {
  return {
    onBookmarkClick: (id, requests, tooManyRequests) => {
      dispatch(handleRequest(requests));
      if (tooManyRequests) {
        return;
      } else {
        dispatch(toggleTeamBookmark(id));
      }
    },
  };
};

const BookmarkIcon = ({
  isBookmarked,
  id,
  onBookmarkClick,
  requests,
  tooManyRequests,
}) => {
  const Icon = isBookmarked
    ? IconsDirectory.Bookmarked
    : IconsDirectory.NotBookmarked;

  return (
    <BookmarkIconContainer>
      <Icon
        className="icon"
        onClick={() => onBookmarkClick(id, requests, tooManyRequests)}
      />
    </BookmarkIconContainer>
  );
};

export default connect(null, mapDispatchToProps)(BookmarkIcon);
