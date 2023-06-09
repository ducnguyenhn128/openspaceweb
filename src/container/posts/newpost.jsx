// Post a new article
import React, {useState, useEffect} from 'react';
import { Button, Form } from 'react-bootstrap';
import processHashtag from './processHashtagInput';
import { useNavigate } from 'react-router-dom';
import Header from '../header';
import apiNewPost from '../../api/post/apiNewPost';
import apiGetUser from '../../api/user/apiGetUser';
import getTimeNow from '../../utils/getTimeNow';
const NewPost = () => {
    const [fullname, setFullname] = useState('')
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [hashtag, setHashtag] = useState('')
    const [sampletag, setSampletag] = useState(['news', 'sport'])
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    // Get user Infomatiom
    useEffect(() => {
        const fetchFullname = async () => {
            const response = await apiGetUser();  //api
            setFullname(response.fullname)
        }
        fetchFullname();
    }, [])
    
    // Handle Form
    const handleTitleChange = (e) => {
        setTitle(e.target.value)
    }
    const handleBodyChange = (e) => {
        setBody(e.target.value.replace(/\r?\n/g, '\n')) // include "enter new line"
    }
    const handleHashtagChange = (e) => {
        setHashtag(e.target.value)
        const regex = /^[a-z0-9,]*$/i;  //accept only character, number, and comma
        if (regex.test(e.target.value) || e.target.value === '') {
            setHashtag(e.target.value);
        };
        const sample = processHashtag(e.target.value);   // hashtag => array
        setSampletag(sample)
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);  // loading state
        const createdAt = new Date();

        const formData = new FormData();
        formData.append('title', title)
        formData.append('body', body)
        formData.append('createdAt', createdAt)
        formData.append('tagList', hashtag)   
        formData.append('img', e.target.elements.img.files[0]);
        // console.log(formData)
        try {
            const response = await apiNewPost(formData);
            console.log(response)
        } catch(err) {
            console.log(err);
        } finally {
            // reset the form field
            setTitle('');
            setBody('');
            setHashtag('')
            setLoading(false); // loading state
            navigate('/feed') // return to the news feed
        }
    }

    return (
        <div className='mb-4'>
            <Header/>
            <h3 style={{marginTop: '80px'}}>NEW POST</h3>
            <h4>{fullname}</h4>
            <Form className='col-6 mx-auto mt-5' onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control type="text" placeholder="Title" 
                        onChange={handleTitleChange}
                        value={title}
                        name='title'
                        required
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control as="textarea" rows={8} placeholder="Write a new post ..." 
                        onChange={handleBodyChange}
                        value={body}
                        name='body'
                        required
                    />
                </Form.Group>
                
                <Form.Group controlId="formFile" className="text-start mb-3">
                    <Form.Label>Photo</Form.Label>
                    <Form.Control type="file" enctype="multipart/form-data" name="img"/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control type="text" placeholder="hashtag" 
                        onChange={handleHashtagChange}
                        value={hashtag}
                        name='hashtag'
                    />
                </Form.Group>


                <p>{sampletag[3]}</p>
                <p className='text-start fw-lighter bg-light p-3 rounded'>Guideline: Hashtag seperate by a comma: ex: news, sport ...</p>
                {/* List of tag will be apply */}
                <div className='d-flex p-3 mb-3 bg-light rounded'>
                    {sampletag.map(tag => (
                        <div className='bg-secondary text-white me-2 p-2 rounded'> 
                            {tag}
                        </div>
                    ))}
                </div>
                <Button variant="success" type="submit" disabled={loading}>
                    {loading ? 'Loading...' : 'Submit your post'}
                </Button>
            </Form>
            {/* Tag */}
        </div>
    );
}
export default NewPost;