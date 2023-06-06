import axios from "axios";
const URL0 = process.env.REACT_APP_URL0;
const URL = URL0 + '/api/register'

const apiRegister = async (formData) => {
    try {
        const response = await axios.post(URL, formData)
        return response.data
    } catch(err) {
        console.log(err)
    }
}

export default apiRegister

