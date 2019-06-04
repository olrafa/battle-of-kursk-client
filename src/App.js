import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import './App.css';
import LoginContainer from './components/LoginContainer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h1>Battel Of Kursk</h1>
      </header>
      {/* below this is a template */}
      <main>
        <Route exact path="/" component={LoginContainer} />
        {/* <Route path="/practice" component={} />
        <Route path="/game1" component={} />
        <Route path="/game2" component={} />
        <Route path="/game3" component={} /> */}
      </main>
    </div>
  );
}

export default App;
