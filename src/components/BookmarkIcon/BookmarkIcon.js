import React from "react";
import { connect } from "react-redux";
import { BookmarkIconContainer } from "./BookmarkIcon.styles";
import { IconsDirectory } from "./IconsDirectory";
import { toggleTeamBookmark } from "../../redux/teams/actions";

const mapDispatchToProps = (dispatch) => {
  return {
    onBookmarkClick: (id, requests) =>
      dispatch(toggleTeamBookmark(id, requests)),
  };
};

const BookmarkIcon = ({ isBookmarked, id, onBookmarkClick, requests }) => {
  const Icon = isBookmarked
    ? IconsDirectory.Bookmarked
    : IconsDirectory.NotBookmarked;

  return (
    <BookmarkIconContainer>
      <Icon className="icon" onClick={() => onBookmarkClick(id, requests)} />
    </BookmarkIconContainer>
  );
};

export default connect(null, mapDispatchToProps)(BookmarkIcon);
