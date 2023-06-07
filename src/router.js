
import { createBrowserRouter } from 'react-router-dom';
import Homepage from './container/home/Homepage';
import LogIn from "./container/login";
import Logout from "./container/login/logout";
import NewsFeed from './container/newsFeed/newsFeed';
import NewPost from "./container/posts/newpost";
import ViewPost from "./container/posts/viewpost";
import Profile from "./container/profile";
import Follows from "./container/profile/follows";
import MyInfo from "./container/profile/myinfo";
import Password from "./container/profile/password";
import Register from "./container/register/register";
import TagPage from "./container/tag/tag";
import User from "./container/user/";
import Demo from './utils/DEMO';

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
        // {path: 'privacy', element: <Privacy />},
        {path: 'myinfo', element: <MyInfo />}
      ]
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