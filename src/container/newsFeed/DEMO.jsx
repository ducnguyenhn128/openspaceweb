// This element fetch data to display all posts
// Option: Display posts from Global or User's Following
// BE: postRouter
import React, { useEffect, useState} from 'react'
import InfiniteScroll from 'react-infinite-scroll-component';
import './styles.css'
import apiNewsFeed from '../../api/post/apiNewsFeed';
import apiGetPost from '../../api/sandbox/getPost';
import FeedPost from './feedPost';

const Demo = () => {
  const [allPosts, setAllPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const fetchMorePosts = async (pageNumber) => {
    console.log(`now page number is ${pageNumber}`)
    try {
      const response = await apiGetPost(pageNumber);
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
    const fetchPosts = async () => {
      try {
        const initialPosts = await apiGetPost(1);
        console.log(initialPosts)
        setAllPosts(initialPosts);
      } catch (error) {
        console.error('Error loading posts:', error);
      }
    };
    fetchPosts();
  }, []);

  return (
    <InfiniteScroll
      dataLength={allPosts.length}
      next={() => fetchMorePosts(page + 1)}
      hasMore={hasMore}
      loader={<h4>Loading...</h4>}
    >
      <div className='col-6 mx-auto'>
        {allPosts.map((post) => (
          <li key={post._id}><FeedPost info = {post}/>  </li>
        ))}
      </div>
    </InfiniteScroll>
  );
};

export default Demo;