import {useEffect, useState} from 'react'
import { useNavigate } from "react-router-dom";
import axios from "axios";
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

const URL0 = process.env.REACT_APP_URL0;
const URL1 = URL0 + '/api/check-login'

const Homepage = () => {
    // First, check log in status
    const navigate = useNavigate();
    useEffect(() => {
        const checkLoginStatus = async () => { 
            try {
                const response = await axios.get(URL1, {
                    withCredentials: true // with cookie
                });
                console.log(response.data)
                if (response.data === 'Invalid Token') {
                    console.log('Not Login');
                    navigate('/login')
                } else {
                    // setLogInState(true);
                    navigate('/feed')
                }
            } catch(err) {
                console.log(err);
                navigate('/login')
            }
        }
        checkLoginStatus();
    }, [navigate])

    
    return (
        <div>
            Loading ....
            <Box>
                <CircularProgress />
            </Box>
        </div>
    );
}
 
export default Homepage;