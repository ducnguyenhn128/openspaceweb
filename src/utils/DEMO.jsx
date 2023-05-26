import React, { useRef } from 'react';
import './styles.css'
import axios from 'axios';
const URL = 'http://localhost:8000/sandbox'



const Register2 = () => {
    const formRef = useRef(null);

    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        try {
            const response = await axios.post(URL, formData, {
                withCredentials: true,
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
            console.log(response.data)
            // Reset the form fields
            formRef.current.reset();
        } catch(err) {
            console.log(err)
        }
    }

    return (  
        <div>
            <form 
                ref={formRef}
                className='text-start col-4 mx-auto mt-5' 
                enctype="multipart/form-data" 
                onSubmit={handleSubmit}
            >
                <label>Upload</label> <br /> <br /> 

                <input type="file" name="avatar"></input> <br /> <br />
                <input type="submit" value="upload photo" accept="image/*"></input> <br />
            </form>
        </div>
    );
}
 
export default Register2;