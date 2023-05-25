import React, {useEffect, useState} from 'react';
import apiTopCreator from '../../api/post/apiTopCreator';

const TopCreators = () => {
    const [creator, setCreator] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            const fetchData = async() => {
                try {
                    const data = await apiTopCreator();
                    setCreator(data)
                } catch(err) {
                    console.log(err)
                }
            }
            fetchData();
        }

        fetchData();
    }, []);

    const TopCreator = creator.map(el => (
        <div className="d-flex mb-3 bg-light">
            <div className="message_avt my-auto">

            </div>
            <div className='my-auto' >
                <p className='my-auto'><b>{el.fullname}</b></p>
        </div>
    </div>
    ))

    return (
        <>
            <p>TOP CONTRIBUTORS</p>
            {TopCreator}
        </>
    );
}
 
export default TopCreators;