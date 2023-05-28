import { Link, Route, Routes} from 'react-router-dom';
import { ProSidebarProvider } from 'react-pro-sidebar'
import './styles.css'
import { Sidebar, Menu, MenuItem} from 'react-pro-sidebar';
import Password from './password';
import Privacy from './utils/privacy';
import MyInfo from './myinfo';
import ProfileStas from './profile';
import Header from '../header';
import Follows from './follows';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
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
            const user = await response.data;
            console.log("Data Response: ", user);

            //ACTION set State for user & stats
            dispatch(updateUser(user))
            setUser(user)
                
            } catch(err) {
                console.error(err);
                navigate('/login')
            }
        }
        fetchData();
    }, [navigate, URL, dispatch ])

    const [user, setUser] = useState();
    
    const fullname = useSelector(state => state.user.fullname)
    const avatar = useSelector(state => state.user.avatar)
    return (
        <ProSidebarProvider>
            <Header />
            <Sidebar className='profile-prosidebar' style={{float: 'left', width: '20%', position: 'fixed', top: '60px'}}>
                <Menu>
                    <div>
                        <img src={avatar} alt='avt'  style={{width: '100px', height: '100px',borderRadius: '100%', margin: '20px auto'}} />
                    </div>
                    <h5>{fullname}</h5>
                    <MenuItem component={<Link to='./'/>}> Profile </MenuItem>
                    <MenuItem component={<Link to='./follows'/>}> Follows </MenuItem>
                    <MenuItem component={<Link to='./passwords'/>}> Password </MenuItem>
                    <MenuItem component={<Link to='./myinfo'/> }> My Info </MenuItem>
                    
                </Menu>
            </Sidebar>
            <main className=' profile_main_col'>
                <Routes>
                    <Route path='/*' element={ <ProfileStas/> }/> 
                    <Route path='/passwords' element={ <Password />} />
                    <Route path='/privacy' element={ <Privacy />} />
                    <Route path='/follows' element={ <Follows/>} />
                    <Route path='/myinfo' user={user} element={ <MyInfo />} />
                </Routes>
            </main>       
        </ProSidebarProvider>

    );
}
 
export default Profile;