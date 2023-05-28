import axios from "axios";
const URL0 = process.env.REACT_APP_URL0;
const token = localStorage.getItem('token');

const apiViewPost = async (id) => {
    
    const URL =  URL0 + '/post/' + id ;
    try {
        const response = await axios.get(URL, {
            withCredentials: true,
        })
        // console.log(response.data)
        const responseData = await response.data;
        // console.log(responseData)
        return responseData;
        
    } catch(err) {
        console.log(err)
    }
}

export default apiViewPost;

//be: // 4. Get a post by id , postRouter, post.js