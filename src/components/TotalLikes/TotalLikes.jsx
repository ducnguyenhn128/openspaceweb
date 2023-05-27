import React from 'react';
import './styles.css'
import circle_like from '../../components/photo/circle-like.svg'

const TotalLikes = (props) => {
    const {like = 0, clientLike = false} = props
    let text = ''
    if (clientLike === true && like > 1) {
        text = `You & ${like} others`
    }
    if (clientLike === true && like == 1) {
        text = `You & 1 other`
    }

    if (clientLike === false && like !== '0') {
        text = `${like}`
    }

    if (clientLike === false && like == 0) {
        text = `Become first people like this post`
    }


    return (  
        <div className='total_like'>
            <img src={circle_like} alt='a'
                className='total_like_icon'
                style={{width: '25px', marginRight: '4px'}} />
            
            <div className='total_like_number'>
                {text}
            </div>
        </div>
    );
}
 
export default TotalLikes;

// (like > 1) ? 'others' : 'other' 