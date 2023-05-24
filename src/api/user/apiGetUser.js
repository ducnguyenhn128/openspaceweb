// Get client user Infomation
import axios from "axios";
const URL0 = process.env.REACT_APP_URL0;
const URL1 = URL0 + '/api/profile';

const apiGetUser = async () => {
    try {
        const response = await axios.get(URL1, {
            withCredentials: true,
        });
        const user = response.data;
        console.log("Data Response: ", user);

        let fullname = user.fullname
        // Get FullName
        // if (user.username) {
        //     fullname = user.username
        // }
        // if (user.info.fullname) {
        //     fullname = user.info.fullname
        // }

        return {fullname}
    } catch(err) {
        console.error(err);
    }
}
 
export default apiGetUser;
// return an object with user info: ex: fullname