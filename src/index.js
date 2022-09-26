import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { Provider } from 'react-redux';

const responseData = (
    state = {
        feeling: 0,
        understanding: 0,
        support: 0,
        comments: '',
    }, action
) => { //only one reducer is needed. new inputed (user-edited) values overwrite previous state.
    const entry = action.payload
    if (action.type === "INPUT_USER_ENTRY") {
        return { ...state, ...entry}; 
    }
    if (action.type === "CLEAR_FORM") { //form is cleared on submit on 'Review' page
        return {
            feeling: 0,
            understanding: 0,
            support: 0,
            comments: '',
        };
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


