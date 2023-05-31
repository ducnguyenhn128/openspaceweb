import Form from 'react-bootstrap/Form';

import './styles.css'
import FollowUser from './utils/actionVsUser';
import { useSelector } from 'react-redux';
import { Col } from 'react-bootstrap';

const Follows = () => {
    const followingArr = useSelector(state => state.user.follow.following)
    console.log(followingArr)
    return (
        <div className='profile-follow'>
            {/* Navigation */}

            <div className=" bg-light mt-5">
                <Form className='mx-2 mt-4'>
                    <Form.Group className="mb-3">
                        <Form.Control type="text" placeholder="Seach user" />
                    </Form.Group>
                </Form>


                <div>
                    <div class='col-md-4 text-start ms-2 mb-4'>
                        <h3 className='mb-4'>Follower: 30</h3>
                        <h3 className='mb-4'>Following: {followingArr.length}  </h3>
                    </div>

                    {/* Followings */}
                    <div className='text-start ms-2 d-flex flex-wrap justify-content-start'>
                        {/* render a list */}
                        {followingArr.map(userID => (
                            <Col xs={12} md={12} lg={6} xl={4} className='text-start' id={userID}>
                                <FollowUser  actionType='Unfollow' id={userID}/>
                            </Col>
                        ))}




                    </div>
                </div>
                

            </div>  
        </div>
    );
}
 
export default Follows;