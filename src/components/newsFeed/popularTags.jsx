import React, {useEffect, useState} from 'react';
import './styles.css'
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
const PopularTags = (props) => {
    // receive full name form props
    const [taglist, setTaglist] = useState(['sport', 'news'])
    const navigate = useNavigate();
    useEffect(() => {
        
    }, []);
    return (  
        <div className=' p-4 mx-auto rounded '>
            <h5>Nguyen Van A</h5>
            <hr />
            <p className='mb-3'>Popular Tag</p>

            <div className='d-flex popular_tag'>
                {taglist.map(tag => (

                    <Button key={tag}
                        variant='secondary'
                        className='me-2'
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