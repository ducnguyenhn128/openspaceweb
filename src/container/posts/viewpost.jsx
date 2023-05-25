import Button from "react-bootstrap/esm/Button";
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import Header from '../header'
import './styles.css'
import apiViewPost from "../../api/post/apiViewPost";
import apiLikePost from "../../api/post/apiLikePost";
import LikeButton from './../../components/LikeButton/LikeButton';
import apiGetUser from "../../api/user/apiGetUser";
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "../../reducers/actions";


const ViewPost = () => {
    const {id} = useParams();
    const [postData, setPostData] = useState({
        author: '', authorname: '', body: '', createdAt: '', favoritedCount: '', title: '', userLikeStatus: false, _id: ''
    })
    const [likeStatus, setLikeStatus] = useState(false)
    const dispatch = useDispatch()
    useEffect(() => {
        const fetchData = async () => {
            try {
                const data2 = await apiGetUser();
                // await console.log(`data2 : ${data2}`)
                //ACTION set State for user & stats
                dispatch(updateUser(data2))

                const data = await apiViewPost(id) //api get post data by id
                console.log(data)
                setPostData(data)
                setLikeStatus(data.userLikeStatus)
            } catch(err) {
                console.log(err)
            }
        }
        fetchData();
    }, [id])
    const userID = useSelector(state => state.user?._id || ''); // ****************noted
    // console.log(`userID : ${userID}`)
    const handleLikeButton = async () => {
        setLikeStatus(likeStatus => !likeStatus);
        // send API
        const postID = id;
        const info = {postID, userID} // send API to handle post like => DB
        console.log(info)
        try {
            await apiLikePost(info)
        } catch(err) {
            console.log(err)
        }
    }
    return (  
        <div>
            <Header />
            <div className="text-start mx-auto col-12 col-md-8 col-lg-6 viewpost">
                {/* user post */}
                <div className="d-flex">
                    <div className="user-comment-avt">
                        
                    </div>

                    <div className="viewpost_info"> 
                        <h5 className="mb-1"><b>{postData.fullname}</b> </h5>
                        <p>{postData.createdAt.slice(0,10)}</p>
                    </div>
                </div>
                <div className="mt-2">
                    <h3>{postData.title}</h3>
                </div>

                <div className="mt-4">
                    <p>{postData.body}</p>
                </div>

                {/* Post stats */}
                <div className="d-flex justify-content-between">
                    <div >
                        {postData.favoritedCount} likes
                    </div>
                    <div>
                        {/* 10 bình luận */}
                    </div>
                </div>

                <hr className="my-2"/>
                <LikeButton
                    likeStatus={likeStatus}
                    handleClick = {handleLikeButton}
                />
            </div>
        </div>
    );
}
 
export default ViewPost;


//