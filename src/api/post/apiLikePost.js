import axios from "axios";
const URL0 = process.env.REACT_APP_URL0;
const URL = URL0 + '/post/like';

const apiLikePost = async (info) => {
    // info: {postID: string, userID: string}
    try {
        const response = await axios.put(URL, info, {
            withCredentials: true
        });
        return response
    } catch(err) {
        console.log(err)
    }
}
 
export default apiLikePost; 