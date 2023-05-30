import axios from "axios";
const URL0 = process.env.REACT_APP_URL0;
const URL1 = URL0 + '/api/check-login'


const apiHomePage = async () => { 
    try {
        const token = localStorage.getItem('token');

        const response = await axios.get(URL1, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        return response
    } catch(err) {
        console.log(err);
    }
}

export default apiHomePage