import React from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch, Provider } from 'react-redux';
import { HashRouter as Router, Route, useHistory } from 'react-router-dom';
import logger from 'redux-logger';
import { createStore, combineReducers, applyMiddleware } from 'redux';

//import MUI
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import MuiInput from '@mui/material/Input';

export default function Comments() {
    const dispatch = useDispatch();
    const history = useHistory();
    const [value, setValue] = useState('');

    const userResponse = { comments: value };

    const handleClick = () => {
        dispatch({ type: "INPUT_USER_ENTRY", payload: userResponse })
        setValue('');
        history.push('/pg5'); //send to REVIEW
    }

    return (
        <>
            <Card varient="outlined" sx={{maxWidth: 275}}>
            <CardContent>
                <MuiInput
                    value={value}
                    size="small"
                    sx ={{width: 250}}
                    onChange={event=>setValue(event.target.value)}

                />
            </CardContent>
            <CardActions>
                <Button onClick={handleClick} size="small">SUBMIT</Button>
            </CardActions>
        </Card>

        <Box sx={{ width: 300 }}>

        </Box>
    </>
    );
}