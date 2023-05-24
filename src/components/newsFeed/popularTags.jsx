import React, {useEffect, useState} from 'react';
import './styles.css'
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import apiCommonTag from '../../api/tag/apiCommonTag';
import apiGetUser from '../../api/user/apiGetUser';
const PopularTags = (props) => {
    // receive full name form props
    const [taglist, setTaglist] = useState(['sport', 'news'])
    const [fullname, setFullname] = useState('Username')
    const navigate = useNavigate();
    useEffect(() => {
        const fetchData = async() => {
            try {
                const data1 = await apiCommonTag();
                setTaglist(data1)

                const data2 = await apiGetUser();
                setFullname(data2.fullname)
            } catch(err) {
                console.log(err)
            }
        }
        fetchData();
    }, []);
    return (  
        <div className=' p-4 mx-auto rounded popular_tag'>
            <h5>{fullname}</h5>
            <hr />
            <p className='mb-3'>Common Tag</p>

            <div className=' taglist'>
                {taglist.map(tag => (

                    <Button key={tag}
                        variant='secondary'
                        className='me-2 mb-2'
                        onClick={() => {navigate(`/tag/${tag}`) }}
                    >
                        {tag}
                    </Button>
                ))}
            </div>
        </div>
    );
}
 
export default PopularTags;