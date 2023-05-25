import React, {useState, useEffect} from 'react';
import Header from '../header';
import FeedPost from '../newsFeed/feedPost';
import { useParams } from 'react-router-dom';
import './styles.css'
import apiGetPostsWithTag from '../../api/tag/apiGetPostsWithTag';

const TagPage = () => {
    const {tag} = useParams();
    const [posts, setPosts] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await apiGetPostsWithTag(tag);
                console.log(data)
                setPosts(data)
            } catch(err) {
                console.log(err)
            }
        }
        fetchData();
    }, [tag]);

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
// This component shows all post with a specific tag
// do not require login