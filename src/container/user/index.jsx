import { useEffect, useState } from 'react';
import { Link, Route, Routes, useParams, useNavigate } from 'react-router-dom';
import { ProSidebarProvider,  Sidebar, Menu, MenuItem } from 'react-pro-sidebar'
import { Button } from 'react-bootstrap';
import axios from 'axios';

import './styles.css'
import ProfileStas from '../profile/profile';
import Header from '../header';
import Follows from '../profile/follows';
import apiGetOtherUser from '../../api/getOtherUser/apiGetOtherUser';
import apiUserRecentPost from '../../api/profile/apiUserRecentPost';
import User2 from './user';

const URL0 = process.env.REACT_APP_URL0;
const User = () => {
    const {id} = useParams();  //get the ID of the URL
    const navigate = useNavigate()
    // Follow Status
    const [followStatus, setFollowStatus] = useState(true)
    const [recentPost, setRecentPost] = useState([])
    const [user, setUser] = useState({
        fullname: '', avatar: ''
    })
    const [totalPosts, setTotalPosts] = useState(0);
    useEffect(() => {
        const fetchData = async (id) => {
            try {
                const response = await apiGetOtherUser(id)
                const user = response.data.user;
                setFollowStatus(response.data.followStatus)

                console.log("Data Response: ", user);
                // console.log("Followstatus: ", response.data.followStatus);
                // set State for user & stats
                setUser(user)
                setTotalPosts(user.stats.posts)
                
                // User Recent Post
                const response2 = await apiUserRecentPost(id);
                setRecentPost(response2)
                
            } catch(err) {
                console.error(err);
                navigate('/login')
            }
        }
        fetchData(id);
    }, [followStatus, navigate, id])


    console.log(recentPost)
    
    // Handle Follow button
    // =====================================================
    const handleFollow = async () => {
        let URL2 = URL0 +  '/user/' + id + '/follow';
        // console.log(URL2)
        try { 
           const response = await axios.post(URL2, null, { withCredentials: true }) ;
           if (response.status === 201) {
                setFollowStatus(followStatus => !followStatus)
           }
        } catch(err) {
            console.error(err);
        }
    }

    const handleUnFollow = async() => {
        let URL2 =  URL0 + '/user/' + id + '/follow';
        try { 
            const response = await axios.delete(URL2, { withCredentials: true }) ;
            if (response.status === 204) {
                 setFollowStatus(followStatus => !followStatus)
            }
            
         } catch(err) {
             console.error(err);
         }
    }

    const handleClick = () => {
        // Client has not follow User, => handle client will follow user
        if (followStatus === false) {
            handleFollow();
        } else { 
            // Client has followed User => handle client unfollow user
            handleUnFollow();
        }
    }
    //======================================================
    return (
        <ProSidebarProvider totalpost = {totalPosts}>
            <Header />
            <Sidebar style={{float: 'left', width: '20%'}}>
                <Menu>
                    <div>
                        <img src={user.avatar} alt='avt' 
                            style={{width: '100px', height: '100px',borderRadius: '100%',margin: '20px auto'}} 
                        />
                    </div>
                    <h5>{user.fullname}</h5>
                    <MenuItem component={<Link to='./'/>}> Profile </MenuItem>
                    <MenuItem>
                        {/* Check follow status */}
                        <Button onClick={handleClick}>
                            {followStatus === false ? 'Follow' : 'Unfollow'}
                        </Button>                    
                    </MenuItem>                
                </Menu>
            </Sidebar>
            <main style={{marginTop: '60px'}}>
                <Routes>
                    <Route path='/*' element={ 
                        <User2 recentPost={recentPost}/>
                    }/> 
                    <Route path='/follows' element={ <Follows/>} />
                    {/* <Route path='/posts' element={ < Posts totalPosts={totalPosts}/>} /> */}
                </Routes>
            </main>       
        </ProSidebarProvider>
    );
}
 
export default User;