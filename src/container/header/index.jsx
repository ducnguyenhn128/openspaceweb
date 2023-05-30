import React, {useState} from 'react';
import axios from 'axios';
import './styles.css'
import '../newsFeed/styles.css'
import PersonIcon from '@mui/icons-material/Person';
import LogoutIcon from '@mui/icons-material/Logout';
import CreateIcon from '@mui/icons-material/Create';
import favicon from '../photo/logoheader1.png'

const Header = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [result, setResult] = useState()

  const handleChange = (e) => {
    setResult()
    setSearchTerm(e.target.value)
    if (searchTerm === '') {
        setResult('')
    }
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
              const searchResultFound = response.data.map(el => (
                <a href={`/user/${el.id}`} 
                    className="news-feed-top-creator">
                    <div className="news-feed-top-creator-avt my-auto">
                        <img src={el.avatar} alt='avt' />
                    </div>
                    <div className='news-feed-top-creator-name' >
                        {el.fullname}
                    </div>
                </a> // inherit from newsfeed/topCreator
              ))  // render a list of user that search found
              const searchResult =  (response.data.length === 0) ?
                          (<p>Sorry, we can not find any result </p>) :
                          searchResultFound
              
              setResult(searchResult)
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

  return (
    <div className='home-header p-0'>
      <div className='d-flex justify-content-between bg-success'>
          <div className=' my-auto text-start home-header-logo pb-1'>
              <a href='/feed'>
                <img src={favicon} alt='logo' style={{height: '56px'}}/>
              </a>
          </div>

          <div className='col-2 my-auto text-white'>
              <form onSubmit={handleSubmit} className='header_search'>
                  <div className='search-container'>
                    <input 
                      placeholder='Search ...'
                      className='header-search-input'
                      onChange= {handleChange}
                      onKeyDown={handleKeyDown}
                    />
                    <div className= {(searchTerm === '') ? 'header_search_rst_hidden' : 'header_search_rst'}>
                        <p className='search_guide'>Press enter to search</p>
                        {(searchTerm !== '') && result}
                    </div>

                  </div>
              </form>
          </div>


          <div class='my-auto text-white flex-grow-1 text-end'>
              <a href='/post' class='me-4 text-white fs-3'><CreateIcon /></a>
              <a href='/profile' class='me-4 text-white fs-3'><PersonIcon /></a>
              <a href='/logout' class='me-4 text-white fs-3'><LogoutIcon /></a>
          </div>
      </div>
    </div>
  );
}

export default Header;