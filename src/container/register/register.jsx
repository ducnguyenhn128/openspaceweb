import React, {useState} from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";
import './styles.css';
import cover from '../photo/logoheader.jpg'
import formValidation from '../../utils/formValidation';
import apiRegister from './../../api/user/apiRegister';

const URL0 = process.env.REACT_APP_URL0;
const Register = () => {
    const [newUser, setNewUser] = useState({})
    const navigate = useNavigate();
    const handleChange = ({target}) => {
        const {name, value} = target;
        setNewUser(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const {username, email, password, fullname, confirmPass} = newUser;
        const formData = {username, email, password, fullname};
        // console.log(formData)
        // formValidation(email, password, newUser.confirmPass)
        if (formValidation(email, password, confirmPass) === true) {
            // reset Form 
            setNewUser({})
            try {
                // send data
                const data = await apiRegister(formData)
                // Handle the response data
                console.log(data);
                // Redirect to the homepage after creating the user
                navigate('/')
            } catch(err) {
                console.log(err)
            }
        }
    }

    return (
        <div className='register col-6 mx-auto mt-4'>
            <img src = {cover} alt='cover-logo' style={{width: '300px'}}/>
            <h2 className="mb-3 mt-3">Register an account here</h2>
            <Form className='col-9 mx-auto' onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                    <Form.Control type="text" placeholder="Username" 
                        name='username'
                        onChange={handleChange}
                        value = {newUser.username || ''}
                    />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Control type="text" placeholder="Fullname" 
                        name='fullname'
                        onChange={handleChange}
                        value = {newUser.fullname || ''}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="email" placeholder="Email Address" 
                        name='email'
                        onChange={handleChange}
                        value = {newUser.email || ''}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control type="password" placeholder="Password" 
                        name='password'
                        onChange={handleChange}
                        value = {newUser.password || ''}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control type="password" placeholder="Confirm Password" 
                        name='confirmPass'
                        onChange={handleChange}
                        value = {newUser.confirmPass || ''}
                    />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>

            <div className='mt-3'>
                <a href='/login' >Already has account, login here</a>
            </div>
        </div>
    );
}
 
export default Register;