import React, { Component } from "react";
import { connect } from "react-redux";
import ErrorBoundary from "../components/ErrorBoundary/ErrorBoundary";
import { TeamsTable } from "../components/TeamsTable/TeamsTable";
import { getTeams } from "../redux/teams/actions";
import { AppComponent } from "./App.styles";

const mapStateToProps = (state) => {
  return {
    teams: state.teamsReducer.teams,
    bookmarkedTeams: state.teamsReducer.bookmarkedTeams,
    isPending: state.teamsReducer.isPending,
    requests: state.teamsReducer.requests,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onGetTeams: () => dispatch(getTeams()),
  };
};

class App extends Component {
  render() {
    return (
      <AppComponent>
        <ErrorBoundary>
          <TeamsTable {...this.props} />
        </ErrorBoundary>
      </AppComponent>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
