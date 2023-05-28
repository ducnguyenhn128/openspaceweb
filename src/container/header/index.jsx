import React from 'react';
import Button from 'react-bootstrap/esm/Button';
import './styles.css'
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MessageIcon from '@mui/icons-material/Message';
import PersonIcon from '@mui/icons-material/Person';
import LogoutIcon from '@mui/icons-material/Logout';
import CreateIcon from '@mui/icons-material/Create';
import favicon from '../photo/logoheader1.png'

const Header = () => {

  return (
    <div className='home-header p-0'>
      <div className='d-flex justify-content-between bg-success'>
          <div className=' my-auto text-start home-header-logo pb-1'>
              <a href='/feed'>
                <img src={favicon} alt='logo' style={{height: '56px'}}/>

              </a>
              {/* Open Space */}
          </div>

          <div className='col-2 my-auto text-white'>
              <input 
                placeholder='Search ...'
                className='header-search-input'
              />
          </div>

          <div class='my-auto text-white flex-grow-1 text-end'>
              {/* <a href='/' class='me-4 text-white fs-3' ><MenuIcon /></a> */}
              <a href='/post' class='me-4 text-white fs-3'><CreateIcon /></a>
              {/* <a href='/' class='me-4 text-white fs-3'><MessageIcon /></a> */}
              <a href='/profile' class='me-4 text-white fs-3'><PersonIcon /></a>
              <a href='/logout' class='me-4 text-white fs-3'><LogoutIcon /></a>
          </div>
      </div>
    </div>
  );
}

export default Header;