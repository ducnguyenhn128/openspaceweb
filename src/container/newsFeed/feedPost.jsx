// This element use to render a single feedpost, which will be render on the newsfeed (render a list of posts)
// This element receive props (data) to render infomation
import React, {useState} from 'react';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import apiLikePost from '../../api/post/apiLikePost';
import { useSelector } from 'react-redux';
import LikeButton from '../../components/LikeButton/LikeButton';
import './styles.css'
import TotalLikes from '../../components/TotalLikes/TotalLikes';
const FeedPost = (props) => {
    // props: author (name), tile, body, createdAt, userLikeStatus, authorname,
    // props: _id, favoritedCount, userLikeStatus, author_avatar, image,   tagList
    // const info = props.info;
    const { author, title, body, createdAt, authorname, _id, 
        favoritedCount, userLikeStatus, author_avatar, image
    } = props.info;
    const [likeStatus, setLikeStatus] = useState(userLikeStatus)
    // time of post (display yyyy-mm-dd)
    const time = createdAt && typeof createdAt === 'string' ? createdAt.slice(0, 10) : '';
    const author_page = '/user/' + author;
    const post_link = '/post/' + _id;
    const userID = useSelector(state => state.user?._id || '')  // client ID ************ noted
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
                    <img src={author_avatar} alt='author_avatar' />
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
            {/* Image */}
            <div className='newsfeed_post_img' 
                style={image === '' ?  {display: "none"} : {display: "block"}}
            >
                <img src={image} alt='img'/>
            </div>
            {/* Body */}
            <div className="mt-4">
                {/* body: enter in new line */}
                <p dangerouslySetInnerHTML={{ __html: formattedBody }}></p>
            </div>

            {/* Post stats */}            
            <TotalLikes like={favoritedCount} clientLike = {likeStatus}/>
            {/* like = 0, clientLike = false */}

            <div className='likeStats_line'></div>

            {/* Action: Like */}
            <div className="d-flex justify-content-between mt-2">
                <LikeButton 
                    handleClick={handleLikeButton}
                    likeStatus = {likeStatus}
                />
            </div>
        </div>
    );
}
 
export default FeedPost;
