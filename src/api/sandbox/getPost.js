import axios from "axios";

const URL0 = process.env.REACT_APP_URL0;
const URL = URL0 + '/post/sandbox'  // use it to fetch  all post (global)
const URL_FOLLOW = URL0 + '/post/feed-follow'  // use it to fetch from user's following 


const apiGetPost = async (page) => {
    // const URL = newsFeedGlobal ? URL_GLOBAL : URL_FOLLOW // fetch global or fetch user following
    try {
        const response = await axios.get(URL, {
            withCredentials: true,
            params: {page: page}
        })
        
        return response.data
    } catch(err) {
        console.log(err)
    }
}

export default apiGetPost