import React, {useState} from 'react'
import Form from 'react-bootstrap/Form';
import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import cover from '../photo/logoheader.jpg'
import { Link } from 'react-router-dom';
import apiLogin from '../../api/user/apiLogin';

const LogIn = () => {
    const navigate = useNavigate();
    const [newUser, setNewUser] = useState({})
    const [error, setError] = useState('');
    const handleChange = ({target}) => {
        const {name, value} = target;
        setNewUser(prev => ({
            ...prev,
            [name]: value
        }))
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        const {username, password} = newUser;
        const formData = {username, password};
        // reset Form 
        setNewUser({})

        try {
            // Sending API, then navigate if login success
            const response = await apiLogin(formData);
            console.log(response)
            if (response.status === 200) {
                navigate('/profile')
            }
        } catch(err) {
            console.error(error);
            setError('Username or password is incorrect.');
        } 
    }
    
    return (
        <div className='SignIn col-4 mx-auto mt-4'>
             <img src = {cover} alt='cover-logo' style={{width: '300px'}}/>
            <h2 className="mb-3 mt-3">Log In</h2>
            {/* Username or password is incorrect. */}
            {error && <p className='text-danger'>{error}</p>} 
            <Form className='col-9 mx-auto ' onSubmit={handleSubmit}>

                <Form.Group className="mb-3">
                    <Form.Control type="text" placeholder="Username" 
                        name='username'
                        onChange={handleChange}
                        value = {newUser.username || ''}
                    />
                </Form.Group>


                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control type="password" placeholder="Password" 
                        name='password'
                        onChange={handleChange}
                        value = {newUser.password || ''}
                    />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Sign In to your account
                </Button>
                <div class='mt-3'>
                    <Link to='/register'>Register now</Link>

                </div>
            </Form>
        </div>
    );
}
 
export default LogIn;


