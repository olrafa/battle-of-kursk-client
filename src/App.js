import React from 'react';
import { Route } from 'react-router-dom';
//import { connect } from 'react-redux';
import './App.css';
import LoginContainer from './components/LoginContainer';
import GamesLobbyContainer from './components/GamesLobbyContainer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h1>Battle of Kursk</h1>
      </header>
      {/* below this is a template */}
      <main>
        <Route exact path="/" component={LoginContainer} />
        <Route exact path="/games" component={GamesLobbyContainer} />

      </main>
    </div>
  );
}

export default App;
