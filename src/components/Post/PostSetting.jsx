import React from 'react';
import './styles.css'
const PostSetting = () => {
    return (  
        <div className='post_setting'>
            <div className='post_setting_btn'>
                Edit Post
            </div>

            {/* <div>
                Delete post // option
            </div> */}

            <div className='post_setting_btn'>
                Go to Post
            </div>
        </div>
    );
}
 
export default PostSetting;

// edit - delete - gotopost