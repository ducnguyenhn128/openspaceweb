import axios from "axios";
const URL0 = process.env.REACT_APP_URL0;
const token = localStorage.getItem('token');
const URL1 = URL0 + '/api/logout' 

const apiLogout = async () => {
    try {
        const response = await axios.post(URL1, null, {
          withCredentials: true,
        });
        return response
    } catch (err) {
        console.log(err)
    }
}

export default apiLogout