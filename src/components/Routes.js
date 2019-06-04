import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import LoginContainer from "./LoginContainer";
import LobbyContainer from "./GameLobbyContainer";

import '../App.css'

function Routes(props) {
  return (    
    <main className="App">
      <header className="App-header">
        <h1>Battle of Kursk</h1>
      </header>
      <div>
      {!props.authenticated && (
        <Switch>
          <Route path="/login" component={LoginContainer} />
          <Route path="" render={() => <Redirect to="/login" />} />
        </Switch>
      )}

      {props.authenticated && (
        <Switch>
          <Route path="/" exact component={LobbyContainer} />
          <Route path="" render={() => <Redirect to="/" />} />
        </Switch>
      )}
      </div>
    </main>
  );
}

const mapStateToProps = state => ({
  authenticated: !!state.currentUser
});

export default withRouter(connect(mapStateToProps)(Routes));