import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { Provider } from 'react-redux';

const testData =
{
    feeling: 1,
    understanding: 2,
    support: 5,
    comments: "no comment",
}

const responseData = (state = {}, action) => {
    const entry = action.payload
    if (action.type === "INPUT_USER_ENTRY") {
        return { ...state, ...entry}; 
    }
    if (action.type === "CLEAR_FORM") {
        return {};
    }  
    return state;
}

const storeInstance = createStore(
    combineReducers({
        responseData
    }),
    applyMiddleware(logger)
);




ReactDOM.render(
    <Provider store={storeInstance}>
        <App />
    </Provider>,
    document.getElementById('root')
    );
registerServiceWorker();


