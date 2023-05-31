import Button from "react-bootstrap/esm/Button";
import './styles.css'
import { Col, Container, Row } from "react-bootstrap";
import React, {useEffect, useState} from 'react'
import apiGetOtherUser from "../../../api/getOtherUser/apiGetOtherUser";
// Type of action: Follower/ Following / Blocked

const ActionVsUser = (props) => {
    const {actionType, id} = props;
    const [user, setUser] = useState({avatar: '', fullname: ''})
    useEffect( () => {
        const fetchData = async (userID) => {
            const response = await apiGetOtherUser(userID)
            // console.log(response)
            setUser(response.data.user)
        }
        fetchData(id)
    }, [id]);
    return (
        <Container style={{maxWidth: "600px"}} >
            <Row className='d-flex justify-content-start blocked_user m-2 mb-3'>
                <Col className="bg-light p-2 text-left" >
                    <img src = {user.avatar} style={{width: '72px', borderRadius: '100%'}} alt='avt'/>     
                </Col>
                <Col xs={6} className="my-auto">
                    <h5>{user.fullname}</h5>
                </Col>
                <Col className="flex-end my-auto" >
                    <Button>{actionType}</Button>
                </Col>
            </Row>

        </Container>  
    );
}
 
export default ActionVsUser;