import React from 'react'
import { useState } from 'react'
import './navbar.css'
import { images } from '../../constants/index'
import { GiHamburgerMenu } from 'react-icons/gi'
import { MdOutlineRestaurantMenu } from 'react-icons/md'

export default function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false)
  return (
    <nav className='navbar'>
      <div className='navbar_logo'>
        <img
          src={images.gericht}
          alt='Gericht'
        />
      </div>
      <div className='navbar_primary-nav'>
        <ul className='navbar_primary-nav_links flex__center'>
          <li className='p__opensans'>
            <a href='#home'>Home</a>
          </li>
          <li className='p__opensans'>
            <a href='#about'>About</a>
          </li>
          <li className='p__opensans'>
            <a href='#menu'>Menu</a>
          </li>
          <li className='p__opensans'>
            <a href='#awards'>Awards</a>
          </li>
          <li className='p__opensans'>
            <a href='#contact'>Contact Us</a>
          </li>
        </ul>
      </div>
      <div className='navbar_login flex__center'>
        <a
          href='#'
          className='navbar_login-login'
        >
          <span className='lg-screen-login'>Log In / Register</span>
          <span className='sm-screen-login'>Log In</span>
        </a>
        <div className='line'></div>
        <a
          href='#'
          className='navbar_login-book'
        >
          Book Table
        </a>
      </div>
      <div className='navbar_mobile'>
        <GiHamburgerMenu
          className='overlay-open'
          fontSize={27}
          onClick={() => setToggleMenu(true)}
        />
        {toggleMenu && (
          <div className='navbar_mobile-overlay flex__center slide-bottom'>
            <MdOutlineRestaurantMenu
              className='overlay-close'
              fontSize={27}
              onClick={() => setToggleMenu(false)}
            />
            <ul className='navbar_mobile-primary-nav_links flex__center flow'>
              <li>
                <a href='#home'>Home</a>
              </li>
              <li>
                <a href='#about'>About</a>
              </li>
              <li>
                <a href='#menu'>Menu</a>
              </li>
              <li>
                <a href='#awards'>Awards</a>
              </li>
              <li>
                <a href='#contact'>Contact Us</a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  )
}
