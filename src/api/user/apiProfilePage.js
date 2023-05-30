import axios from "axios";

const URL0 = process.env.REACT_APP_URL0;
const URL = URL0 + '/api/profile'
const token = localStorage.getItem('token');
const apiProfilePage = async () => {
    try {
        const response = await axios.get(URL, {
            headers: {
                'Authorization': `Bearer ${token}`
            }}
        )
        return response
    } catch(err) {
        console.log(err)
    }
}

export default apiProfilePage