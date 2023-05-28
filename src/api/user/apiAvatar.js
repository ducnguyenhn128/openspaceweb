import axios from "axios";
const token = localStorage.getItem('token');
const URL0 = process.env.REACT_APP_URL0;
const URL = URL0 + '/api/change-avatar'

const apiAvatar = async (formData) => {
    try {
        const response = await axios.post(URL, formData, {
            withCredentials: true,
            headers: {
                'Content-Type': 'multipart/form-data',
                'Authorization': `Bearer ${token}`
            }
        })

        return response
    } catch(err) {
        console.log(err)
    }
}

export default apiAvatar;