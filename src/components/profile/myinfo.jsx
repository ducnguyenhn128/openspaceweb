import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import './styles.css'
import apiProfile from '../../api/apiProfile';

const MyInfo = () => {
    const user = useSelector(state => state.user);
    console.log(user._id)
    const username = user.username
    const currentFullname = useSelector(state => state.user.info.fullname)
    const [fullname, setFullname] = useState(currentFullname)
    const handleChange = (e) => {
        setFullname(e.target.value)
    }
    const handleSubmit = async () => {
        const formData = {...user, info: {...user.info, fullname: fullname}}
        await apiProfile.myinfo(formData, user._id);
    }
    return (  
        <div className="d-flex">
            <div className="col-12 bg-light">
                {/* Profile picture */}
                <div className='profile-myInfo-allphoto'>
                    {/* Cover photo */}
                    <div style={{backgroundColor: '#c9ebea', height: '250px'}} className='mx-auto col-12'>

                    </div>
                    <Button variant='secondary' className='mt-2'>Change Cover photo</Button>
                    {/* Profile picture */}
                    <div className='d-flex'>
                        <div className='mx-3'>
                            <div className='profile-myInfo-avt mb-3'>
                            </div>
                            <Button variant='success'>Change Avatar</Button>
                        </div>
                    </div>
                </div>
                {/* Form change Infomation */}
                <Form className='col-6 mx-auto my-5 text-start' onSubmit={handleSubmit}>
                    <Form.Label>Username</Form.Label>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Control type="text" placeholder= {username ? username : 'username'} 
                            // onChange={handleChange}
                            value={username ? username : 'username'}
                            name='username'
                        />
                    </Form.Group>

                    <Form.Label>Full Name</Form.Label>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Control type="text" placeholder="Fullname" 
                            onChange={handleChange}
                            value={fullname}
                            name='fullname'
                        />
                    </Form.Group>



                    <Button variant="success" type="submit">
                        Save
                    </Button>
                </Form>
            </div>
        </div>
    );
}
 
export default MyInfo;