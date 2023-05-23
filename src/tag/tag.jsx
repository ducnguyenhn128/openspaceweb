import React, {useState, useEffect} from 'react';
import Header from '../header';
import axios from 'axios';
import FeedPost from '../newsFeed/feedPost';
import { useParams } from 'react-router-dom';
import './styles.css'

const TagPage = () => {
    const URL0 = process.env.REACT_APP_URL0;
    const {tag} = useParams();
    const URL = URL0 + '/tag/' + tag ;
    const [posts, setPosts] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(URL);
                const data = response.data;
                console.log(data)
                setPosts(data)
            } catch(err) {
                console.log(err)
            }
        }

        fetchData();
    }, [URL]);

    // Render a list: All post in newsfeed
    const allPostsWithTag = posts.map((el, index) => (
        <li key={index}> <FeedPost info = {el}/> </li>
    ));
    return (  
        <div>
            <Header />
            <div className='allPostsWithTag col-12 col-md-6 mx-auto'>
                {allPostsWithTag}
            </div>
        </div>
    );
}
 
export default TagPage;

// do not require login