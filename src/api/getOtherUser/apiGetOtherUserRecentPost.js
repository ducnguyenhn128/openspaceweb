
import axios from 'axios';
const URL0 = process.env.REACT_APP_URL0;

const token = localStorage.getItem('token');


const apiGetOtherUser = async (id) => {
    try {
        const URL = URL0 + '/user/' + id ;
        const response = await axios.get(URL, {
            withCredentials: true,
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
        // console.log(`apiGetotherUser : ${response}`)
        return response
    } catch(err) {
        console.log(err)
    }
}
 
export default apiGetOtherUser;

// use to: get infomation about an user in Open Space