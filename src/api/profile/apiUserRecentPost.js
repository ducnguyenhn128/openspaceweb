import axios from "axios"
const URL0 = process.env.REACT_APP_URL0;
const apiUserRecentPost = async (author) => {
    const URL = URL0 + '/post/user-recent-post?author=' + author
    try {
        // console.log(URL)
        const response = await axios.get(URL, {
            withCredentials: true
        })
        // console.log(response)
        return response.data
    } catch(err) {
        console.log(err)
    }
}

export default apiUserRecentPost