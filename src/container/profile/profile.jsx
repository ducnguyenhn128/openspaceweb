import React , {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import apiUserRecentPost from '../../api/profile/apiUserRecentPost';
import FeedPost from '../newsFeed/feedPost';

const ProfileStas =  () => {
    const stats = useSelector(state => state.user.stats)
    const userID = useSelector(state => state.user._id)
    const [recentPost, setRecentPost] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            const response = await apiUserRecentPost(userID);
            console.log(response)
            setRecentPost(recentPost)
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
                 <div className='mt-4'>
                     {/* Recent Post line */}
                     <div className='d-flex justify-content-between mx-2'>
                         <h4>Recent Posts</h4>    
                         <Link>See more</Link>
                     </div>
                     {/* render a list */}
                     <div>
                        {recentPost.map((post) => (
                            <li><FeedPost el={post}/></li>
                        ) )}
                     </div>
                     <div className="bg-white text-start mx-2">
                         <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
                     </div>
                     <div className="bg-white text-start mx-2">
                         <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
                     </div>
                     <div className="bg-white text-start mx-2">
                         <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
                     </div>
                     <div className="bg-white text-start mx-2">
                         <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
                     </div>
                     <div className="bg-white text-start mx-2">
                         <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
                     </div>
                 </div>
                
             </div>
            
         </div>
    );
}
 
export default ProfileStas;