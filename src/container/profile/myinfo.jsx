import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import React, { useRef, useState } from 'react';
import './styles.css'
import apiProfile from '../../api/user/apiProfile';
import apiAvatar from '../../api/user/apiAvatar';
import { useSelector } from 'react-redux';
import { Navigate, useNavigate } from 'react-router-dom';

const MyInfo = () => {

    const user = useSelector(state => state.user)
    console.log(user)
    const [visible, setVisible] = useState(false)
    const formRef = useRef(null);
    const navigate = useNavigate();
    // Change infomation 
    const [fullname, setFullname] = useState('');
    const handleChange = (e) => {
        setFullname(e.target.value)
    }
    const handleSubmit = async () => {
        const formData = {...user, info: {...user.info, fullname: fullname}}
        await apiProfile.myinfo(formData, user._id);
    }
    // ====================================================
    // Change Avatar
    const handleSubmit2 = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);

        try {
            const response = await apiAvatar(formData);
            console.log(response)
            if (response.status === 200) {
                navigate('/profile')
            }
            // Reset the form fields
            formRef.current.reset();
        } catch(err) {
            console.log(err)
        }
    }
    const openUploadAvt = () => {
        setVisible(true)
    }
    // =====================================================
    return (  
        <div className="d-flex">
            <div className="col-4 bg-light p-4">
                {/* Profile picture */}
                <div className='profile-myInfo-allphoto'>
                    {/* Profile picture */}
                    <div className='mx-3'>
                        <div className='profile-myInfo-avt'>
                            <img src={user.avatar} alt='avatar'></img>
                        </div>
                        <Button variant='success' onClick={openUploadAvt}>
                            Change Avatar
                        </Button>
                    </div>
                    
                    {/* Form change avatar */}
                    {visible && <form 
                        ref={formRef}
                        className='profile-change-avt text-start col-4' 
                        enctype="multipart/form-data" 
                        onSubmit={handleSubmit2}
                    >
                        
                        <input type="file" name="avatar"></input> <br /> <br />
                        <input type="submit" value="Submit Avatar" accept="image/*"></input> <br />
                    </form>}
                </div>
            </div>

            {/* Form change Infomation */}
            <Form className='col-6 mx-auto my-5 py-4 text-start' onSubmit={handleSubmit}>
                <Form.Label>Username</Form.Label>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control type="text" placeholder= {user.username} 
                        value=''
                        name='username'
                    />
                </Form.Group>

                <Form.Label>Full Name</Form.Label>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control type="text" placeholder={user.fullname} 
                        onChange={handleChange}
                        value=''
                        name='fullname'
                    />
                </Form.Group>
                <Button variant="success" type="submit">
                    Save
                </Button>
            </Form>
        </div>
    );
}
 
export default MyInfo;