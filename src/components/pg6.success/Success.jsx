import React from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch, Provider } from 'react-redux';
import { HashRouter as Router, Route, useHistory } from 'react-router-dom';
import logger from 'redux-logger';
import { createStore, combineReducers, applyMiddleware } from 'redux';

//MUI imports
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';


export default function Success() {
    const history = useHistory();
    const dispatch = useDispatch();
    const responseData = useSelector(store=>store.responseData)
    console.log(responseData);

    const handleClick = () => {
        history.push('/'); //send to home
     }
    return (
        <>
            <Card sx={{width:275}}>
                <CardContent>
                 Feedback submitted!
                </CardContent>
                <CardActions>
                    <Button onClick={handleClick}>NEW FORM</Button>
                </CardActions>
            </Card>
        </>
    );
}