import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
import * as serviceWorker from './serviceWorker';
import logo from './images/logo.png'

ReactDOM.render(
<BrowserRouter>
  <div>
    <img className='logo' src={logo} alt='Logo' />
  </div>
  <App />
</BrowserRouter>, document.getElementById('root'));

serviceWorker.unregister();

