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
import Slider from '@mui/material/Slider';
import MuiInput from '@mui/material/Input';

export default function Understanding() {
    const dispatch = useDispatch();
    const history = useHistory();

    const [value, setValue] = useState(0);

    const userResponse = { understanding: value };

    const handleClick = () => {
        dispatch({ type: "INPUT_USER_ENTRY", payload: userResponse })
        history.push('/pg3'); //send to SUPPORT
    }

    return (
        <>
        <Card varient="outlined" sx={{maxWidth: 275}}>
            <CardContent>
                <MuiInput
                    sx={{width:42}}
                    value={value}
                    size="small"
                />
                <Slider
                    value={typeof value === 'number' ? value : 0}
                    onChange={(event) => setValue(event.target.value)}
                    step={1}
                    min={0}
                    max={5}
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