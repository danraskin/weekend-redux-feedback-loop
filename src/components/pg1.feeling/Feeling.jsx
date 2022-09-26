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
    
    const [error, setError] = useState(false);
    const [helperText, setHelperText] = useState('');
    const [value, setValue] = useState(0);

    const userResponse = { feeling: value };
    const init = useSelector(store=>store.responseData.feeling);

    useEffect(() => {   
        setValue(init);
      }, []);


    const handleClick = () => {
        if (value === 0) {
            setHelperText('Make sure to fill out this form!')
            setError(true);
        } else {
            dispatch({ type: "INPUT_USER_ENTRY", payload: userResponse })
            history.push('/pg2'); //SEND TO UNDERSTANDING
        }
    }

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