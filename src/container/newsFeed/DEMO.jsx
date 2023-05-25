// This element fetch data to display all posts
// Option: Display posts from Global or User's Following
// BE: postRouter
import React, { useEffect, useState} from 'react'
import InfiniteScroll from 'react-infinite-scroll-component';
import './styles.css'

import apiNewsFeed from '../../api/post/apiNewsFeed';

const Demo = () => {
    const [newsFeedGlobal, setNewsFeedGlobal] = useState(true);
    const [allPosts, setAllPosts] = useState([]);
    const [page, setPage] = useState(1);
  
    const fetchMorePosts = async (pageNumber) => {
      try {
        const response = await apiNewsFeed(newsFeedGlobal, pageNumber); // Make an API request with the updated page number
        const newPosts = response.data;
        setAllPosts((prevPosts) => [...prevPosts, ...newPosts]); // Append the new posts to the existing list
        setPage(pageNumber); // Update the page counter
      } catch (error) {
        console.error('Error loading more posts:', error);
      }
    };
  
    const fetchPostsFromAPI = async (pageNumber) => {
      try {
        const response = await apiNewsFeed(newsFeedGlobal, pageNumber); // Make an API request with the provided page number
        return response.data; // Return the fetched posts
      } catch (error) {
        console.error('Error loading posts:', error);
        throw error; // Rethrow the error to handle it in the component
      }
    };
  
    useEffect(() => {
      const fetchPosts = async () => {
        try {
          const initialPosts = await fetchPostsFromAPI(1); // Fetch posts for the initial page
          setAllPosts(initialPosts);
        } catch (error) {
          console.error('Error loading posts:', error);
        }
      };
      fetchPosts();
    }, []);
  
    return (
      <InfiniteScroll
        dataLength={allPosts.length} // Total number of posts
        next={() => fetchMorePosts(page + 1)} // Function to load more posts
        hasMore={true} // Set to false when all posts are loaded
        loader={<h4>Loading...</h4>} // JSX element to display while loading
      >
        {allPosts.map((post) => (
          <div key={post._id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </div>
        ))}
      </InfiniteScroll>
    );
  };
  
  export default Demo;