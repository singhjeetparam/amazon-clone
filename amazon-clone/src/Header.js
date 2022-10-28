import React from 'react'
import './Header.css'
import appLogo from './assets/Amazon-logo.svg'
import locationlogo from'./assets/geo-alt.svg'
import searchlogo from './assets/search.svg'
import cartlogo from './assets/cart3.svg'
import languagelogo from './assets/translate.svg'
function Header(){
    return(
        <div className='header'>
            <div className='nav-wrapper'>
                <div className='navbar-logo'>
                    <img src={appLogo} />
                </div>
                <div className='navbar-location'>
                    <img src={locationlogo} />
                </div>
                <div className='navbar-search'>
                    <div className='search-filter'>
                        All
                    </div>
                    <div className='search-input'>
                        <input />
                    </div>
                    <div className='search-icon'>
                        <img  src={searchlogo} />
                    </div>
                </div>
                <div className='navbar-language'>
                    <img src={languagelogo} />
                </div>
                <div className='navbar-user'>
                    <p>Hello, User
                        Accounts & Lists
                    </p>
                    
                </div>
                <div className='navbar-return-and-order'>
                    <p>Returns & orders</p>
                </div>
                <div className='navbar-cart'>
                    <img src={cartlogo} />
                    <span className='basket-count'>0</span>
                </div>
            </div>
        </div>
    )
}

export default Header