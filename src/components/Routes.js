import React from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import LoginContainer from "./LoginContainer";
import GamesLobbyContainer from "./GamesLobbyContainer";
import GamesBoardContainer from './GameBoardContainer'
import RegisterContainer from "./RegisterContainer"

import '../App.css'

function Routes(props) {
  return (    
    <main className="App">
      <header className="App-header">
      </header>
      <div>
        <Route exact path="/login" component={LoginContainer} />
        <Route path="/register" component={RegisterContainer} />
        <Route path="/games" exact component={GamesLobbyContainer} />
        <Route path='/games/:id' component={GamesBoardContainer} />
      </div>
    </main>
  );
}

const mapStateToProps = state => ({
  authenticated: !!state.currentUser
});

export default withRouter(connect(mapStateToProps)(Routes));