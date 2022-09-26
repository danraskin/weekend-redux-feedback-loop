import React from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';
import { useState, useEffect } from 'react';
import { useSelector, useDisptach, Provider } from 'react-redux';
import { HashRouter as Router, Route, useHistory } from 'react-router-dom';
import logger from 'redux-logger';
import { createStore, combineReducers, applyMiddleware } from 'redux';

//import components
import './App.css';
import Header from '../Header/Header.jsx';
import Feeling from '../pg1.feeling/Feeling.jsx';
import Understanding from '../pg2.understanding/Understanding.jsx';
import Support from '../pg3.support/Support.jsx';
import Comments from '../pg4.comments/Comments.jsx';
import Review from '../pg5.review/Review.jsx';
import Success from '../pg6.success/Success.jsx';


function App() {

  return (
    <div className='App'>

     <Router>
      <Header />
      <Route exact path ="/">
        <Feeling />
      </Route>
      <Route exact path ="/pg2">
        <Understanding />
      </Route>
      <Route exact path ="/pg3">
        <Support />
      </Route>
      <Route exact path ="/pg4">
        <Comments />
      </Route>
      <Route exact path ="/pg5">
        <Review />
      </Route>
      <Route exact path ="/pg6">
        <Success />
      </Route>
     </Router>
      
    </div>
  );
}

export default App;
