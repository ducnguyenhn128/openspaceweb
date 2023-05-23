import React, {useEffect, useState} from 'react';

const PopularTags = (props) => {
    // receive full name form props
    
    const [taglist, setTaglist] = useState(['sport', 'news'])
    useEffect(() => {
        
    }, []);
    return (  
        <div className=' p-4 mx-auto rounded '>
            <h5>Nguyen Van A</h5>
            <hr />
            <p className='mb-3'>Popular Tag</p>

            <div className='d-flex'>
                {taglist.map(tag => (
                    <div key={tag} className='bg-secondary text-white p-2 me-2 rounded'>{tag}</div>
                ))}

            </div>
        </div>
    );
}
 
export default PopularTags;