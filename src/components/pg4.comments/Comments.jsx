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

    const init = useSelector(store=>store.responseData.comments)
    useEffect(() => {   
        setValue(init);
      }, []);

    const handleClick = () => {
        dispatch({ type: "INPUT_USER_ENTRY", payload: userResponse })
        setValue('');
        history.push('/pg5'); //send to REVIEW
    }

    return (
        <Box className="displayField">
            <Card varient="outlined" className="feedbackCard" sx={{maxWidth: 450}}>
                <CardContent>Are there any comments you'd like to add?
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
        </Box>
    );
}