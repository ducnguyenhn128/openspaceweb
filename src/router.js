
import { createBrowserRouter} from 'react-router-dom';
import Register from "./container/register/register";
import Profile from "./container/profile";
import Follows from "./container/profile/follows";
import Password from "./container/profile/password";
import Privacy from "./container/profile/privacy";
import MyInfo from "./container/profile/myinfo";
import ViewPost from "./container/posts/viewpost";
import LogIn from "./container/login";
import User from "./container/user/user";
import Logout from "./container/login/logout";
import NewPost from "./container/posts/newpost";
import TagPage from "./container/tag/tag";
import NewsFeed from './container/newsFeed/newsFeed'
import Homepage from './container/home/Homepage';
import Register2 from './utils/DEMO';
// import ViewPost2 from './container/posts/viewpost2';

const router = createBrowserRouter([
    {
      path: "/",
      element: <Homepage/>,
    },
    {
      path: "/feed",
      element: <NewsFeed />
    },
    {
      path: '/register',
      element:  <Register/> 
    },
    {
      path: '/login',
      element:  <LogIn/> ,
      exact: true // Add exact match to prevent redirect loop
    },
    {
      path: '/logout',
      element:  <Logout/>
    },
    {
      path: 'profile/*',   //login required
      element: <Profile/> ,
      children: [
        {path: 'follows', element: <Follows />},
        {path: 'passwords', element: <Password />},
        {path: 'privacy', element: <Privacy />},
        {path: 'myinfo', element: <MyInfo />}
      ]
    },
    {
      path: 'demo', // drop
      element: <Register2 />  // drop
    },
    {
      path: 'user/:id/*',  //login required
      element: <User />
    },
    {
      path: 'post', //login required
      element: <NewPost />
    },
    {
      path: 'post/:id',
      element: <ViewPost />
    },
    {
      path: 'tag/:tag',
      element: <TagPage />
    }
  ]);


export default router