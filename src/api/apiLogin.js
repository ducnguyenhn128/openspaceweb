import axios from "axios";
const URL0 = process.env.REACT_APP_URL0;
const URL = URL0 + '/api/login'

const apiLogin = async (formData) => {
        // send data
        try{
            const response = await axios.post(URL, formData,  {
                headers: {
                    'Content-Type': 'application/json'
                  },
                withCredentials: true
            })
            return response.data
        } catch (err) {
            console.log(err)
        }
 
}

export default apiLogin