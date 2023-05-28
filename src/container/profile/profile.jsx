import React , {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import apiUserRecentPost from '../../api/profile/apiUserRecentPost';
import FeedPost from '../newsFeed/feedPost';
import './styles.css'
const ProfileStas =  () => {
    const stats = useSelector(state => state.user.stats)
    const userID = useSelector(state => state.user._id)
    const [recentPost, setRecentPost] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            const response = await apiUserRecentPost(userID);
            console.log(response)
            setRecentPost(response)
        }
        fetchData();
    }, [userID])
    return (  
        <div className="d-flex">
            <div className="col-9 bg-light">
                {/* Statistic */}
                <div className="d-flex d-flex mt-3">  
                    <div className="profile-stats col-2 bg-secondary mx-3 p-1">
                        <h3 className='mb-1'>{stats.posts}</h3>
                        <div>Posts</div>
                    </div>
                     <div className="profile-stats col-2 bg-secondary mx-3 p-1">
                         <h3 className='mb-1'>{stats.follower}</h3>
                         <div>Followers</div>
                     </div>
                     <div className="profile-stats col-2 bg-secondary mx-3 p-1">
                         <h3 className='mb-1'>{stats.following}</h3>
                         <div>Followings</div>
                     </div>
                    
                 </div>
                 {/* Posts  */}
                 <div className='mt-4 col-md-8'>
                     {/* Recent Post line */}
                     <div className='d-flex justify-content-between mx-2 mb-3'>
                         <h4 className='mx-2'>Recent Posts</h4>    
                         <Link>See more</Link>
                     </div>
                     {/* render a list */}
                     <div className='profile-recent-post'>
                        {recentPost.map((post) => (
                            <li key={post._id}><FeedPost info={post}/></li>
                        ) )}
                     </div>
                 </div>
                
             </div>
            
         </div>
    );
}
 
export default ProfileStas;