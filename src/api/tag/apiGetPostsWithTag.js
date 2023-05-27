import axios from "axios";

const URL0 = process.env.REACT_APP_URL0;
// const {tag} = useParams();
// const URL = URL0 + '/tag/' + tag ;

const apiGetPostsWithTag = async (tag) => {
    const URL = URL0 + '/tag/' + tag ;  //ex: /tag/sport
    try {
        const response = await axios.get(URL, {
            withCredentials: true
        });
        return response.data;
    } catch (err) {
        console.log(err)
    }
}

export default apiGetPostsWithTag