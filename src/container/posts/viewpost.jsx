import Button from "react-bootstrap/esm/Button";
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import Header from '../header'
import './styles.css'
import apiViewPost from "../../api/post/apiViewPost";


const ViewPost = () => {
    const {id} = useParams();
    const {postData, setPostData} = useState()
    const [author, setAuthor] = useState('')
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('Lorem ipsum');
    const [createdAt, setCreatedAt] = useState('')
    const [totalLike, setTotalLike] = useState(0)
    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await apiViewPost(id) //api
                console.log(data)
                setAuthor(data.author)
                setTitle(data.post.title)
                setBody(data.post.body)
                setCreatedAt(data.post.createdAt.slice(0,10))  // handle time
                setTotalLike(data.post.favoritedCount)
            } catch(err) {
                console.log(err)
            }
        }
        fetchData();
    }, [id])
    return (  
        <div>
            <Header />
            <div className="text-start mx-auto col-6 viewpost">
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
                </div>

                {/* Post stats */}
                <div className="d-flex justify-content-between">
                    <div >
                        {totalLike}
                    </div>
                    <div>
                        {/* 10 bình luận */}
                    </div>
                </div>

                <hr className="my-2"/>
                <div className="d-flex justify-content-between">
                    <Button className="col-3 "> Like</Button>

                </div>
            </div>
        </div>
    );
}
 
export default ViewPost;


//