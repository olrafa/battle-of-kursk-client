import React from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import LoginContainer from "./LoginContainer";
import GamesLobbyContainer from "./GamesLobbyContainer";
import GamesBoardContainer from './GameBoardContainer';
import RomansLobbyContainer from "./RomansLobbyContainer";
import RomansBoardContainer from './RomansBoardContainer'
import RegisterContainer from "./RegisterContainer"


import '../App.css'

function Routes(props) {
  return (    
    <main className="App">
      <header className="App-header">
      </header>
      <div>
          <Route path="/" component={LoginContainer} />
          <Route path="/register" component={RegisterContainer} />
          <Route path="/games" exact component={GamesLobbyContainer} />
          <Route path='/games/:id' component={GamesBoardContainer} />
          <Route path='/romans' component={RomansLobbyContainer} />
          <Route path='/romans/:id' component={RomansBoardContainer} />

      </div>
    </main>
  );
}

const mapStateToProps = state => ({
  authenticated: !!state.currentUser
});

export default withRouter(connect(mapStateToProps)(Routes));