import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import LoginContainer from "./LoginContainer";
import GamesLobbyContainer from "./GamesLobbyContainer";

import '../App.css'

function Routes(props) {
  return (    
    <main className="App">
      <header className="App-header">
        <h1>BATTLE OF KURSK</h1>
      </header>
      <div>
      {!props.authenticated && (
        <Switch>
          <Route path="/login" component={LoginContainer} />
          <Route path="" render={() => 
          <Redirect to="/login" />} />
        </Switch>
      )}

      {props.authenticated && (
        <Switch>
          <Route path="/games" exact component={GamesLobbyContainer} />
          <Route path="" render={() => 
          <Redirect to="/games" />} />
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