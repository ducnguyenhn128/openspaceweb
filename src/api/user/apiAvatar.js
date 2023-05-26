import axios from "axios";
const URL0 = process.env.REACT_APP_URL0;
const URL = URL0 + '/api/change-avatar'

const apiAvatar = async (formData) => {
    try {
        const response = await axios.post(URL, formData, {
            withCredentials: true,
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })

        return response.data
    } catch(err) {
        console.log(err)
    }
}

export default apiAvatar;