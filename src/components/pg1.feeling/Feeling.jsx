import React from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch, Provider } from 'react-redux';
import { HashRouter as Router, Route, useHistory } from 'react-router-dom';
import logger from 'redux-logger';
import { createStore, combineReducers, applyMiddleware } from 'redux';

//MUI imports
import { 
    RadioGroup, 
    FormControl, 
    FormControlLabel, 
    FormLabel, 
    FormHelperText, 
    Radio, 
    Box, 
    Button, 
    CardActions, 
    CardContent, 
    Card 
} from '@mui/material';

export default function Feeling() {
    const dispatch = useDispatch();
    const history = useHistory();
    
    const [error, setError] = useState(false); //error value determines error display on user submit if no value selected
    const [helperText, setHelperText] = useState(''); //error text
    const [value, setValue] = useState(0); //value is radio-button value. default is 0; user must seelct 1-5

    const userResponse = { feeling: value }; //data struture for user response
    const init = useSelector(store=>store.responseData.feeling);//initial value is is called from store/reducer.

    useEffect(() => {   
        setValue(init);
      }, []);


    const handleClick = () => {
        if (value === 0) { //user must select value 1-5
            setHelperText('Make sure to fill out this form!')
            setError(true); //if bad attempt, error display is triggered
        } else {}
            dispatch({ type: "INPUT_USER_ENTRY", payload: userResponse }) //dispatches value to reducer
            history.push('/pg2'); //SEND USER TO UNDERSTANDING
        }

    //sets value from radio button; resets error message AND error status.
    const handleChange = (event) => {
        setValue(event.target.value);
        setHelperText(' ');
        setError(false);
    };

    return (
        <Box className="displayField">
            <Card varient="outlined" className="feedbackCard" sx={{maxWidth: 450}}>
                <CardContent>
                    <FormControl sx={{ m: 3 }} error={error} variant="standard">
                        <FormLabel>How are you feeling this week?</FormLabel>
                            <RadioGroup
                                value={value}
                                onChange={handleChange}
                                row
                            >
                                <FormControlLabel value="1" control={<Radio />} label="1" />
                                <FormControlLabel value="2" control={<Radio />} label="2" />
                                <FormControlLabel value="3" control={<Radio />} label="3" />
                                <FormControlLabel value="4" control={<Radio />} label="4" />
                                <FormControlLabel value="5" control={<Radio />} label="5" />
                            </RadioGroup>
                        <FormHelperText>{helperText}</FormHelperText>
                    </FormControl>
                    </CardContent>
                <CardActions>
                    <Button onClick={handleClick} size="small">SUBMIT</Button>
                </CardActions>
            </Card>
        </Box>
  );
}