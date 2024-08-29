import React from 'react';
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';

function Header() {
   return (
    <div className='header'>
        <div className="headerLogo headerBorder">
            <img className="header_logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt=""/>
        </div>

        <div className="nav_address headerBorder">
            <div className='add_first'>Deliver to</div>
            <div className="location_logo">
                <LocationOnOutlinedIcon/>
                <span className='add_sec'>Select your address</span>
            </div>
        </div>
        
        <div className='header_search'>
            <select className="search_select">
                <option>All</option>
            </select>
            <input className="header_searchInput" placeholder="Search Amazon.in" type="text"/>
            <SearchIcon className='header_searchIcon' />
        </div>

        <div className="header_nav">
            <div className="header_option headerBorder">
                <span className='header_optionLineOne'>Hello, Sign In</span>
                <span className='header_optionLineTwo'>Account & Lists</span>
            </div>

            <div className="header_option headerBorder">
            <span className='header_optionLineOne'>Returns</span>
                <span className='header_optionLineTwo'>& Orders</span>
            </div>
            
            <div className="header_option headerBorder">
            <span className='header_optionLineOne'>Your</span>
                <span className='header_optionLineTwo'>Prime</span>
            </div>
            
            <div className="header_basketOption headerBorder">
                <ShoppingCartOutlinedIcon/>
                <span className="header_optionLineTwo header_basketCount">0</span>
            </div>
        </div>
    </div>
    )
}

export default Header;


