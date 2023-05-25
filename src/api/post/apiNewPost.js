import axios from "axios";
const URL0 = process.env.REACT_APP_URL0;
const URL = URL0 + '/post/';

const apiNewPost = async (content) => {
    try {
        const response = await axios.post(URL, content, {
            withCredentials: true
        });
        return response.data
    } catch(err) {
        console.log(err)
    }
}
 
export default apiNewPost; 