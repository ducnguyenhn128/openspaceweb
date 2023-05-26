import React, {useEffect, useState} from 'react';
import apiTopCreator from '../../api/post/apiTopCreator';
import './styles.css'

const URL = process.env.REACT_APP_URL0

const TopCreators = () => {
    const [creator, setCreator] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            const fetchData = async() => {
                try {
                    const data = await apiTopCreator();
                    setCreator(data)  // object {_id, fullname, avatar}
                } catch(err) {
                    console.log(err)
                }
            }
            fetchData();
        }

        fetchData();
    }, []);

    const TopCreator = creator.map(el => (
        <a href={`/user/${el.id}`} 
            className="news-feed-top-creator">
            <div className="news-feed-top-creator-avt my-auto">
                <img src={el.avatar} alt='avt' />
            </div>
            <div className='news-feed-top-creator-name' >
                {el.fullname}
            </div>
        </a>
    ))

    return (
        <>
            <p className='mt-2 mb-0'>TOP CONTRIBUTORS</p>
            {TopCreator}
        </>
    );
}
 
export default TopCreators;