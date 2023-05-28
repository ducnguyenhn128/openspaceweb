import axios from "axios";
const token = localStorage.getItem('token');
const URL0 = process.env.REACT_APP_URL0;
const URL = URL0 + '/api/password';

const apiChangePassword = async (password) => {
    const data = {password: password}
    const response = await axios.post(URL, data, {
        withCredentials: true,
    })
    return response
}

export default apiChangePassword

//data: the new password