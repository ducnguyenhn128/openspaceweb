// This element fetch data to display all posts
// Option: Display posts from Global or User's Following
// BE: postRouter
import React, {useEffect, useState} from 'react'
import FilterListIcon from '@mui/icons-material/FilterList';
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/esm/Button";
import MessageFriend from "./messageFriends";
import Header from "../header";
import FeedPost from "./feedPost";
import PopularTags from "./popularTags";
import './styles.css'

import apiNewsFeed from '../../api/post/apiNewsFeed';
const NewsFeed = () => {
    const [newsFeedGlobal, setNewsFeedGlobal] = useState(true)
    const navigate = useNavigate()
    const [allPosts, setAllPosts] = useState([]) ;
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await apiNewsFeed(newsFeedGlobal)  //api
                // do not delete
                console.log(response.data) 
                setAllPosts(response.data)
            } catch(err) {
                console.log(err)
                navigate('/login')
            }
        }
        fetchData();
    }, [newsFeedGlobal, navigate])

    // Render a list: All post in newsfeed
    const newsfeed1 = allPosts.map((el, index) => (
        <li key={index}> <FeedPost info = {el}/> </li>
    ));
    
    // Handle Button Click: switch NewsFeed between Your Following & Globally
    const switchNewsFeed = () => {
        setNewsFeedGlobal(newsFeedGlobal => !newsFeedGlobal)
    }
    return (
        <div>
            <Header />
            <div className="mt-1 d-flex justify-content-between bg-light">
                {/* Left Column */}
                <div className='text-start bg-light left_column '>
                    <PopularTags />
                </div>
                
                {/* Center */}
                <div className='col-12 col-md-6  bg-light'>
                    {/* Write a post */}
                    <div class='mt-3 p-3 bg-white d-flex'>
                        <div className='user-avt'>

                        </div>

                        <Button variant="light" className="flex-fill text-start"  onClick = {() => {navigate('/post')}} >
                            Write your post ...
                        </Button>

                    </div>
                    {/* Filter */}
                    <div class="d-flex bg-white my-3 p-3 border border-dark-subtle rounded">
                        <Button variant='light' onClick={switchNewsFeed}>
                            <FilterListIcon className='me-2'/>
                            {newsFeedGlobal === false ? 'Your following' : 'Globally'}
                        </Button>
                    </div>

                    {/* All Posts in News Feed */}
                    <div className='bg-light newsfeed1'>
                        {newsfeed1}
                    </div>
                </div>
                {/* Right column */}
                <div class='col-2 text-start bg-light right_column mt-2'>
                    <p>Người liên hệ</p>
                    {/* Render a list */}
                    <MessageFriend />
                    <MessageFriend />
                    <MessageFriend />
                    <MessageFriend />
                    <MessageFriend />
                    <MessageFriend />

                </div>
            </div>  
        </div>
    );
}

export default NewsFeed;