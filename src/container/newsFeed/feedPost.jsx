// This element use to render a single feedpost, which will be render on the newsfeed (render a list of posts)
// This element receive props (data) to render infomation
import React, {useState} from 'react';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import apiLikePost from '../../api/post/apiLikePost';
import { useSelector } from 'react-redux';
import LikeButton from '../../components/LikeButton/LikeButton';

const FeedPost = (props) => {
    // props: author (name), tile, body, createdAt, userLikeStatus
    // props: tagList
    const info = props.info;
    const {author, title, body, createdAt, authorname, _id, favoritedCount, userLikeStatus} = info;
    const [likeStatus, setLikeStatus] = useState(userLikeStatus)
    // time of post (display yyyy-mm-dd)
    const time = createdAt && typeof createdAt === 'string' ? createdAt.slice(0, 10) : '';
    const author_page = '/user/' + author;
    const post_link = '/post/' + _id;
    const userID = useSelector(state => state.user._id)  // client ID
    const formattedBody = body.replace(/\n/g, "<br>"); // format body display right when enter new line

    const handleLikeButton = async () => {
        setLikeStatus(likeStatus => !likeStatus);
        // send API
        const postID = _id
        const info = {postID, userID} // send API to handle post like => DB
        // console.log(info)
        try {
            const response = await apiLikePost(info)
        } catch(err) {
            console.log(err)
        }
    }

    return (  
        <div className="newsfeed_post text-start">
            {/* Author && Time && More Setting */}
            <div className="d-flex">
                <div className="user-comment-avt">
                </div>
                {/* Author and Time */}
                <div className="viewpost_info flex-grow-1"> 
                    {/* <h5 className="mb-1"><b>{authorname}</b> </h5> */}
                    <h5 className="mb-1">
                        <a href={author_page} className='fs-5 fw-bold'>{authorname}</a> 
                    </h5>
                    <a href={post_link}>{time}</a>
                </div>

                {/* More: Delete, History */}
                <div>
                    <MoreHorizIcon />
                </div>
            </div>
            {/* Title */}
            <div className="mt-4">
                <h3>{title}</h3>
            </div>
            {/* Body */}
            <div className="mt-4">
                {/* body: enter in new line */}
                <p dangerouslySetInnerHTML={{ __html: formattedBody }}></p>
            </div>

            {/* Post stats */}
            <div className="d-flex justify-content-between">
                <div >
                    {favoritedCount}
                </div>
                <div>
                    {/* 10 bình luận */}
                </div>
            </div>
            {/* Action: Like */}
            <div className="d-flex justify-content-between mt-3">
                {/* <button className="like_button" onClick={handleLikeButton}>
                    <ThumbUpIcon fontSize="small" className='me-1 me-1' 
                        style={ likeStatus ? {color: '#198754'} : {color: '#666666'}}
                    /> 
                    <div style={ likeStatus ? {color: '#198754'} : {color: '#666666'}} > 
                        {likeStatus ? 'Liked' : 'Like'}
                    </div>

                </button >    */}
                <LikeButton 
                    handleClick={handleLikeButton}
                    likeStatus = {likeStatus}
                />
            </div>
        </div>
    );
}
 
export default FeedPost;
