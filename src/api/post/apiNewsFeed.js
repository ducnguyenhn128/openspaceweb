import axios from "axios";

const URL0 = process.env.REACT_APP_URL0;
const URL_GLOBAL = URL0 + '/post/feed-global'  // use it to fetch  all post (global)
const URL_FOLLOW = URL0 + '/post/feed-follow'  // use it to fetch from user's following 


const apiNewsFeed = async (newsFeedGlobal) => {
    const URL = newsFeedGlobal ? URL_GLOBAL : URL_FOLLOW // fetch global or fetch user following
    try {
        const response = await axios.get(URL, {
            withCredentials: true
        })
        
        return response
    } catch(err) {
        console.log(err)
    }
}

export default apiNewsFeed