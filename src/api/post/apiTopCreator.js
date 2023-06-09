import axios from "axios";
const URL0 = process.env.REACT_APP_URL0;
const URL = URL0 + '/post/topcreator'
const token = localStorage.getItem('token');

const apiTopCreator = async () => {
    try {
        const response = await axios.get(URL, {
            withCredentials: true, 
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
        const data = response.data;
        return data;
    } catch(err) {
        console.log(err)
    }
}

export default apiTopCreator

//BE: post, postRouter
// return ({id: id, fullname: fullname, avatar})