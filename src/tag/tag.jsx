import React, {useState, useEffect} from 'react';
import Header from '../header';
import axios from 'axios';
import FeedPost from '../newsFeed/feedPost';


const TagPage = () => {
    const URL0 = process.env.REACT_APP_URL0;
    const [posts, setPosts] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(URL0);
                const data = response.data;
                setPosts(data)
            } catch(err) {
                console.log(err)
            }
        }

        fetchData();
    }, [URL0]);
    return (  
        <div>
            <Header />
        </div>
    );
}
 
export default TagPage;

// do not require login