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


export default function Review() {
    const history = useHistory();
    const dispatch = useDispatch();
    const responseData = useSelector(store=>store.responseData);

    const handleEditClick = () => {
        history.push('/');
    }

    const handleClick = () => {
        axios({
            method: 'POST',
            url: '/feedback',
            data: responseData
        }).then((response)=> {
            console.log(response);
            dispatch({ type: 'CLEAR_FORM' });  //clear reducers
            history.push('/pg6'); //send to success!
        }).catch((error) => {
            console.log('error in postOrder: ',error);
            alert('Unable to submit. Did you submit reponses to each question?');
        })
    }

    return (
        <Box className="displayField">
            <Card sx={{width:275}}>
                <CardContent>
                    <ul>
                        <li>Feeling: {responseData.feeling}</li>
                        <li>Understanding: {responseData.understanding}</li>
                        <li>Support: {responseData.support}</li>
                        <li>Comments: {responseData.comments}</li>
                    </ul>
                </CardContent>
                <CardActions>
                    <Button onClick={handleEditClick}>Change responses?</Button>
                    <Button onClick={handleClick}>CONFIRM</Button>
                </CardActions>
            </Card>
        </Box>
    );
}