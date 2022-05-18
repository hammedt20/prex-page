import React from 'react'
import logo from './images/PREX Logo.png'
import headerimg from './images/Hero Image.jpg'
import dashboard from './images/Vector (5).png'
import { ArrowDown2, UserCirlceAdd, Element4, Setting2 } from 'iconsax-react'
import { Notification, Heart, Monitor } from 'iconsax-react'
import { LogoutCurve } from 'iconsax-react'
import './styles.css';

const Navbar = () =>{
  return (
    <header className='header'>
      <nav className='container nav'>
        <div className='nav-logo'>
          <img src={logo} alt='' />
          <ul className='nav-list'>
            <li>
              <select>
              <option> Company </option>
              </select>
              <ArrowDown2 size="16" color="#212529" variant="Bold"/>
            </li>
            <li>
              <select>
                <option>Products</option>
              </select>
              <ArrowDown2 size="16" color="#212529" variant="Bold"/>
            </li>
            <li>
              <select>
                <option>Resources</option>
              </select>
              <ArrowDown2 size="16" color="#212529" variant="Bold"/>
            </li>
            <li>
              <select>
                <option>Support</option>
              </select>
              <ArrowDown2 size="16" color="#212529" variant="Bold"/>
            </li>
          </ul>
        </div>
        <div>
          <ul className='nav-icons'>
            <li><Notification size="32" color="#212529" /></li>
            <li><img src={dashboard} alt='' /></li>
            <li className='nav-account' >
              <UserCirlceAdd size="32" color="#000000" variant="Bold"/> 
              Dashboard 
              <ArrowDown2 size="16" color="#212529" variant="Bold"/>
              <ul className='nav-account-list'>
                <li><span><Element4 size="24" color="#212529" variant="Outline"/></span> Dashboard</li>
                <li><span><Heart size="24" color="#212529" variant="Outline"/></span> My Saves</li>
                <li><span><Monitor size="24" color="#212529" variant="Outline"/></span> Support</li>
                <li><span><Setting2 size="24" color="#212529" variant="Outline"/></span> Settings</li>
                <hr/>
                <li><span><LogoutCurve size="24" color="#212529" variant="Outline"/></span> Log out</li>
              </ul>
            </li>
            <li>
              <button className='btn'>
                List Property
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}

const Header = () => {
  return (
    <div>
        <Navbar />
        <div className='header-slide'>
          <img src={headerimg} alt = "" />
          <div className='header-details'>
            <h1>Your next property, find it.</h1>
            <form className='header-form'>
              <input type={'text'} placeholder='Enter an address, city, or state' />
              <button className='btn'>Search</button>
            </form>
          </div>
        </div>
    </div>
  )
}

export default Header