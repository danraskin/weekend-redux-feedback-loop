import React from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';
import { useState, useEffect } from 'react';
import { useSelector, useDisaptch, Provider } from 'react-redux';
import { HashRouter as Router, Route, useHistory } from 'react-router-dom';
import logger from 'redux-logger';
import { createStore, combineReducers, applyMiddleware } from 'redux';

function App() {

  return (

      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>

  );
}

export default App;
