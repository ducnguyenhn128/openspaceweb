import React from 'react';
import './styles.css'
import { useState } from 'react';
import PostSetting from '../components/Post/PostSetting';
import axios from 'axios';
const Demo = () => {
    const [showSetting, setShowSetting] = useState(false);
    const [searchTerm, setSearchTerm] = useState('')
    const [searchResult, setSearchResult] = useState([])
    const toggleSetting = () => {
      setShowSetting(!showSetting);
    };

    const handleChange = (e) => {
        setSearchTerm(e.target.value)
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (searchTerm !== '') {
            try {
                const data = {searchTerm}
                const response = await axios.post('http://localhost:8000/api/search', data, {
                    withCredential: true
                })
                console.log(response.data)
                setSearchResult(response.data)
            } catch(err) {
                console.log(err)
            }

        }
    }

    const handleKeyDown = (event) => {
        if (event.key === "Enter") {
          event.preventDefault();
          // Submit the form when Enter key is pressed
          handleSubmit(event);
        }
    }

    const result = (searchResult.length === 0)  ? 
            (<p>Sorry, we can not find any result </p>) :
            (searchResult.map(el => (
                <p key={el._id}>{el.fullname}</p>
            )))
            
    return (  
        <div className='demo'>
            <div className='dm-btn' onClick={toggleSetting}>
                ...
            </div>

            {showSetting && <PostSetting className='dm-setting'/>}

            <div className='dm-content mb-4'>
                    Hơn 20 ngân hàng hạ lãi suất tại nhiều kỳ hạn, đưa mức lãi suất niêm yết cao nhất về 8,5% một năm.
                    Động thái này diễn ra sau khi Ngân hàng Nhà nước giảm trần lãi suất huy động kỳ hạn dưới 6 tháng vào tuần trước.
            </div>

            <form onSubmit={handleSubmit}>
                <input 
                    onChange= {handleChange}
                    onKeyDown={handleKeyDown}
                />
                <input type="submit" />
            </form>

            <div className='search_result'>
                {result}
            </div>

        </div>  
    );
}
 
export default Demo;