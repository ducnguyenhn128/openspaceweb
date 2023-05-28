import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './styles.css'
import React, { useState } from 'react';
import passwordValidation from '../../utils/passwordValidations';
import apiChangePassword from '../../api/user/apiChangePassword';
import { useNavigate } from 'react-router-dom';
const Password = () => {
    const [newPass, setNewPass] = useState({})
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true)
        console.log(newPass);
        if (passwordValidation(newPass.newpass, newPass.confirm)) {
           try {
            const response = await apiChangePassword(newPass.newpass)
           } catch (err) {
                alert(err)
           } finally {
                setLoading(false)
                alert('Password saved')
                navigate('/profile')
           }
        };

    }

    const handleChange = ({target}) => {
        const {name, value} = target;
        setNewPass(prev => ({
            ...prev,
            [name] : value
        }))
    }
    return (
        <div className="d-flex">

        <div className="col-9 bg-light">
            <div className='register col-6 mx-auto'>
                <h2 className="mb-3 mt-3">Change your password</h2>
                <Form className='col-9 mx-auto mb-3' onSubmit={handleSubmit} >
                    <Form.Group className="mb-3" controlId="password">
                        <Form.Control type="password" placeholder="Current Password" 
                            onChange={handleChange}
                            value={newPass.currentpass || ''}
                            name='currentpass'
                            required
                        />
                    </Form.Group>


                    <Form.Group className="mb-3" controlId="password2">
                        <Form.Control type="password" placeholder="New Password" 
                            onChange={handleChange}
                            value={newPass.newpass || ''}
                            name='newpass'
                            required
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="password3">
                        <Form.Control type="password" placeholder="Confirm Password" 
                            onChange={handleChange}
                            value={newPass.confirm || ''}
                            name='confirm'
                            required
                        />
                    </Form.Group>

                    <Button variant="success" type="submit">
                    {loading ? 'Loading...' : 'Save'}
                    </Button>
                </Form>
            </div>
        </div>
    </div>
    );
}
 
export default Password;

// Done