import FeedPost from '../newsFeed/feedPost';
import './styles.css'
// import '../newsFeed/styles.css'
// import '../posts/styles.css'

const User2 = (props) => {
    const {recentPost = []} = props
    return (
        <div className='text-start' style={{marginLeft: "20%"}}>
            <h3>Recent Post</h3>
            <div className='profile-recent-post col-12 col-lg-6'>
                {recentPost.map((post) => (
                    <li key={post._id}><FeedPost info={post}/></li>
                ))}

            </div>
        </div>
    )
}
 
export default User2;