import React, { useRef } from 'react';
import './styles.css'
import axios from 'axios';
import like_circle from '../components/photo/circle-like.svg'
import TotalLikes from '../components/TotalLikes/TotalLikes';
const URL = 'http://localhost:8000/sandbox'


const Register2 = () => {


    return (
        <div className='demo'>
            <p>demo</p>
            <TotalLikes like='10' clientLike={false} />
        </div>  
    );
}
 
export default Register2;