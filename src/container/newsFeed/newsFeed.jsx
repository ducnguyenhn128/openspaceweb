// This element fetch data to display all posts
// Option: Display posts from Global or User's Following
// BE: postRouter
import React, {useEffect, useState} from 'react'
import FilterListIcon from '@mui/icons-material/FilterList';
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/esm/Button";
import TopCreators from './topCreators';
import { useSelector } from 'react-redux';
import InfiniteScroll from 'react-infinite-scroll-component';
import Header from "../header";
import FeedPost from "./feedPost";
import PopularTags from "./popularTags";
import './styles.css'
import apiNewsFeed from '../../api/post/apiNewsFeed';
const NewsFeed = () => {
    const [newsFeedGlobal, setNewsFeedGlobal] = useState(true)
    const navigate = useNavigate()
    const [allPosts, setAllPosts] = useState([]) ;
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);
    
    const avatar = useSelector(state => state.user.avatar)   // case default avatar

    const fetchMorePosts = async (pageNumber) => {
        console.log(`now page number is ${pageNumber}`)
        try {
          const response = await apiNewsFeed(newsFeedGlobal, pageNumber);
          const newPosts = response;
          if (newPosts && newPosts.length > 0) {
            setAllPosts((prevPosts) => [...prevPosts, ...newPosts]);
            setPage(pageNumber);
            setHasMore(true);
          } else {
            setHasMore(false);
          }
        } catch (error) {
          console.error('Error loading more posts:', error);
        }
      };
    useEffect(() => {
        const fetchData = async () => {
            try {
                const initialPosts = await apiNewsFeed(newsFeedGlobal, 1);
                console.log(`First page`)
                console.log(initialPosts)
                setAllPosts(initialPosts);
            } catch(err) {
                console.log(err)
                navigate('/login')
            }
        }
        fetchData();
    }, [newsFeedGlobal, navigate])

    // Handle Button Click: switch NewsFeed between Your Following & Globally
    const switchNewsFeed = () => {
        setNewsFeedGlobal(newsFeedGlobal => !newsFeedGlobal)
    }
    return (
        <div>
            <Header className='header'/>
            <div className="newsfeed_body bg-light">
                {/* Left Column */}
                <div className='text-start bg-light left_column '>
                    <PopularTags />
                </div>
                
                {/* Center */}
                <div className='col-12 col-md-6 col-xxl-4  bg-light'>
                    {/* Write a post */}
                    <div className='post-article'>
                        <div className='user-avt'>
                            <img src={avatar} alt='avt' />
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
                        <InfiniteScroll
                            dataLength={allPosts.length}
                            next={() => fetchMorePosts(page + 1)}
                            hasMore={hasMore}
                            loader={<h4>Loading...</h4>}
                        >
                                {/* render a list: All posts in newsfeed */}
                                {allPosts.map((post) => (
                                    <li key={post._id}><FeedPost info = {post}/> </li>
                                ))}
                        </InfiniteScroll>
                    </div>
                </div>

                {/* Right column */}
                <div class='col-2 text-start bg-light right_column mt-2'>
                    <TopCreators />
                </div>
            </div>  
        </div>
    );
}

export default NewsFeed;

// Logic lazy load
// Dependance:  <InfiniteScroll> from import InfiniteScroll from 'react-infinite-scroll-component';
// First, fetch 10 post (in the use Effect)
// Then in InfiniteScroll check hasMore is true => it call next => fecth more post
// Function Fecth More Post call API at page 2, receive data, => allPosts => render ..
// When Function Fecth More Post call API but receive no data  => set has more is false => no load anymore
// Notice that the API endpoint at backend has to receice page number, and has abilty to send post at a specific page