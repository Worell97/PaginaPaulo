import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes';
import 'bootstrap/dist/css/bootstrap.css';
import './global.css';

ReactDOM.render(
  <React.StrictMode>
    <Routes/>
  </React.StrictMode>,
  document.getElementById('root')
);
