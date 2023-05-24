import Button from "react-bootstrap/esm/Button";
import './comment'
import UserComment from "./comment";
import YourComment from "./yourComment";
import { useEffect, useState } from "react";
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Header from '../header'
import './styles.css'
import apiViewPost from "../../api/post/apiViewPost";

// const URL0 = process.env.REACT_APP_URL0;

const ViewPost = () => {
    const {id} = useParams();
    // const URL =  URL0 + '/post/' + id ;
    const [author, setAuthor] = useState('Philippe Bernard Victor Troussier')
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('Lorem ipsum');
    const [createdAt, setCreatedAt] = useState('')
    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await apiViewPost(id) //api
                console.log(data)  
                setAuthor(data.author)
                setTitle(data.post.title)
                setBody(data.post.body)
                setCreatedAt(data.post.createdAt.slice(0,10))  // handle time
            } catch(err) {
                console.log(err)
            }
        }
        fetchData();
    }, [id])
    return (  
        <div>
            <Header />
            <div className="text-start mx-auto col-6 mt-4 p-3 viewpost">
                {/* user post */}
                <div className="d-flex">
                    <div className="user-comment-avt">

                    </div>

                    <div className="viewpost_info"> 
                        <h5 className="mb-1"><b>{author}</b> </h5>
                        <a href="#">{createdAt}</a>
                    </div>
                </div>
                <div className="mt-4">
                    <h3>{title}</h3>
                </div>

                <div className="mt-4">
                    <p>{body}</p>
                    {/* <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.</p> */}
                </div>

                {/* Post stats */}
                <div className="d-flex justify-content-between">
                    <div >
                        55 likes
                    </div>
                    <div>
                        10 bình luận
                    </div>
                </div>

                <hr className="my-2"/>
                <div className="d-flex justify-content-between">
                    <Button className="col-3 "> Like</Button>
                    <Button className="col-3">Comment</Button>
                    <Button className="col-3">Share</Button>        
                </div>
                <hr className="my-2"/>
                {/* All comment here */}
                {/* Render a list */}
                <YourComment />
                {/* <UserComment /> */}
                    {/* Your comment */}
            </div>
        </div>
    );
}
 
export default ViewPost;