
import { RouterProvider, createBrowserRouter} from 'react-router-dom';
import Register from "./components/register/register";
import Profile from "./components/profile";
import Posts from "./components/profile/posts";
import Follows from "./components/profile/follows";
import Password from "./components/profile/password";
import Privacy from "./components/profile/privacy";
import MyInfo from "./components/profile/myinfo";
import ViewPost from "./components/posts/viewpost";
import LogIn from "./components/login";
import User from "./components/user/user";
import Logout from "./components/login/logout";
import NewPost from "./components/posts/newpost";
import TagPage from "./components/tag/tag";
import NewsFeed from './components/newsFeed/newsFeed'
import Homepage from './components/home/Homepage';

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
        {path: 'posts', element: <Posts/>},
        {path: 'follows', element: <Follows />},
        {path: 'passwords', element: <Password />},
        {path: 'privacy', element: <Privacy />},
        {path: 'myinfo', element: <MyInfo />}
      ]
    },
    {
      path: 'viewpost', // drop
      element: <ViewPost />  // drop
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