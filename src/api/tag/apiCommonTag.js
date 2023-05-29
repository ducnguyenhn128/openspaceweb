import axios from "axios";
const token = localStorage.getItem('token');

// /tag/common
const URL0 = process.env.REACT_APP_URL0; 
const URL = process.env.REACT_APP_URL0 + '/tag/%common'

const apiCommonTag = async () => {
    const response = await axios.get(URL, {
        withCredentials: true,
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });
    const data = await response.data;
    return data;
}

export default apiCommonTag;

// Return a list of common Tag