import React from 'react';
import './styles.css'
import ThumbUpIcon from '@mui/icons-material/ThumbUp';



const LikeButton = (props) => {
    const {likeStatus = false, handleClick} = props
    return (  
        <button className="like_button" onClick={handleClick}>
            <ThumbUpIcon fontSize="medium" className='like_button_icon me-1' 
                style={ likeStatus ? {color: '#198754'} : {color: '#bab8b8'}}
            /> 
            <div style={ likeStatus ? {color: '#198754'} : {color: '#666666'}} > 
                {likeStatus ? 'Liked' : 'Like'}
            </div>

        </button>
    );
}
 
export default LikeButton;

// Like Button receive a props: Like Status to display right