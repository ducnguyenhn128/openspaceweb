import { Link, Route, Routes} from 'react-router-dom';
import { ProSidebarProvider } from 'react-pro-sidebar'
import './styles.css'
import { Sidebar, Menu, MenuItem} from 'react-pro-sidebar';
import Password from './password';
import Privacy from './privacy';
import MyInfo from './myinfo';
import Posts from './posts';
import ProfileStas from './profile';
import Header from '../header';
import Follows from './follows';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { updateUser } from '../../reducers/actions';

const Profile = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const URL0 = process.env.REACT_APP_URL0;
    const URL = URL0 + '/api/profile'
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(URL, {
                    withCredentials: true,
                },
            );
            const user = response.data;
            console.log("Data Response: ", user);

            //ACTION set State for user & stats
            dispatch(updateUser(user))
            setUser(user)
            setTotalPosts(user.stats.posts)
            setTotalFriends(user.stats.friends)
            setTotalFollowers(user.stats.follower)
            setTotalFollowings(user.stats.following)
                
            } catch(err) {
                console.error(err);
                navigate('/login')
            }
        }
        fetchData();
    }, [navigate, URL, dispatch ])

    const [user, setUser] = useState();
    const [totalPosts, setTotalPosts] = useState(0);
    const [totalFriends, setTotalFriends] = useState(0);
    const [totalFollowings, setTotalFollowings] = useState(0);
    const [totalFollowers, setTotalFollowers] = useState(0);


    let fullName = "";
    if (user && user.fullname) {
        // if people has not set full name, display their username
        fullName = user.fullname;
    }

    return (
        <ProSidebarProvider>
            <Header />
            <Sidebar style={{float: 'left', width: '20%'}}>
                <Menu>
                    <div style={{width: '100px', height: '100px', backgroundColor: '#6a6b', borderRadius: '100%', margin: '20px auto'}}>

                    </div>
                    <h5>{fullName}</h5>
                    <MenuItem component={<Link to='./'/>}> Profile </MenuItem>
                    <MenuItem component={<Link to='./posts'/>}> Posts </MenuItem>
                    <MenuItem component={<Link to='./follows'/>}> Follows </MenuItem>
                    <MenuItem component={<Link to='./passwords'/>}> Password </MenuItem>
                    <MenuItem component={<Link to='./privacy'/>}> Privacy </MenuItem>
                    <MenuItem component={<Link to='./myinfo'/> }> My Info </MenuItem>
                    
                </Menu>
            </Sidebar>
            <main style={{marginTop: '60px'}}>
                <Routes>
                    <Route path='/*' element={ 
                        <ProfileStas
                            totalPosts={totalPosts}
                            totalFriends={totalFriends}
                            totalFollowers={totalFollowers}
                            totalFollowings={totalFollowings}
                        />
                    }/> 
                    <Route path='/passwords' element={ <Password />} />
                    <Route path='/privacy' element={ <Privacy />} />
                    <Route path='/follows' element={ <Follows/>} />
                    <Route path='/myinfo' element={ <MyInfo />} />
                    <Route path='/posts' element={ < Posts/>} />
                </Routes>
            </main>       
        </ProSidebarProvider>

    );
}
 
export default Profile;