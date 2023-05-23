import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './styles.css'

import React, { useState } from 'react';

const MyInfo = () => {
    return (  
        <div className="d-flex">
            {/* Navigation */}
            
            {/* Right column: Profile picture, info ... */}
            <div className="col-9 bg-light">
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
                        
                        <div>
                            Full Name
                        </div>
                    </div>
                    
                </div>
                {/* Form change Infomation */}
                <Form className='col-6 mx-auto my-5' >
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Control type="text" placeholder="Username" 
                            // onChange={handleChange}
                            // value={newPass.currentpass || ''}
                            name='username'
                        />
                    </Form.Group>


                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Control type="text" placeholder="Fullname" 
                            // onChange={handleChange}
                            // value={newPass.newpass || ''}
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