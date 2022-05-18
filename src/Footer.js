import React from 'react'
import { Youtube, Facebook, Instagram } from 'iconsax-react'
import twitter from './images/Vector (3).png'
import linkedn from './images/Vector (4).png'
import logo from './images/PREX Logo (2).png'
import './styles.css'

const Footer = () => {
  return (
    <footer className='footer'>
        <section className='footer-list container'>
          <ul>
            <li className='footer-list-title'>Products</li>
            <li>PREX Listing</li>
            <li>PREX Search</li>
            <li>PREX eMARS</li>
            <li>PREX Pay</li>
            <li>PREX Registry</li>
            <li>PREX Transact</li>
            <li>PREX Market Date</li>
          </ul>
          <ul>
            <li className='footer-list-title'>Company</li>
            <li>About Us</li>
            <li>Why PREX?</li>
            <li>Press</li>
            <li>Career</li>
          </ul>
          <ul>
            <li className='footer-list-title'>Resources</li>
            <li>Blog</li>
            <li>Media Kit</li>
          </ul>
          <ul>
            <li className='footer-list-title'>Support</li>
            <li>Help Desk</li>
            <li>FAQs</li>
          </ul>
          <ul>
            <li className='footer-list-title'>Legal</li>
            <li>Privacy Policy</li>
            <li>Terms of Use</li>
            <li>Cookie Policy</li>
          </ul>
          <ul>
            <li className='footer-list-title'>Contact</li>
            <li>+234 812 345 6789</li>
            <li>hello@prex.africa</li>
          </ul>
        </section>
        <section className='footer-logo container'>
          <img src={logo} alt='' />
          <p>PREX is a product of Proexchange Property Limited.</p>
        </section>
        <section className='footer-socials container'>
          <p>Copyright © PREX 2022. All rights reserved.</p>
          <ul>
            <li><Facebook size="16" color="#f9fafb" variant="Bold"/></li>
            <li><Instagram size="16" color="#f9fafb" variant="Bold"/></li>
            <li><img src={twitter} alt ='' /></li>
            <li><img src={linkedn} alt ='' /></li>
            <li><Youtube size="16" color="#f9fafb" variant="Bold"/></li>
          </ul>
        </section>
    </footer>
  )
}

export default Footer