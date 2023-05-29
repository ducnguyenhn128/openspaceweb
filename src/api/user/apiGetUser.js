// Get client user Infomation
import axios from "axios";
const token = localStorage.getItem('token');
const URL0 = process.env.REACT_APP_URL0;
const URL1 = URL0 + '/api/profile';

const apiGetUser = async () => {
    try {
        const response = await axios.get(URL1, {
            withCredentials: true,
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        const user = response.data;
        // console.log("Data Response from apiGetUser: ", user);

        return response.data
    } catch(err) {
        console.error(err);
    }
}
 
export default apiGetUser;
// return an object with user info: ex: fullname