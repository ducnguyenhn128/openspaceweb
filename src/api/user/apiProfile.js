import axios from "axios";

const URL0 = process.env.REACT_APP_URL0;

const apiProfile = {
    myinfo : async function(formData, id) {
        try {
            const URL = URL0 + '/id'
            const response = axios.put(URL, formData, {
                withCredentials: true
            })
        } catch(err) {
            console.log(err)
        }
    }
}

export default apiProfile

// This API use to change user Infomation (at profile / myinfo)
