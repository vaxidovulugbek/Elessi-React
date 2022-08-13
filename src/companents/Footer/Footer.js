import React from 'react'
import logo from '../../assets/imgs/logo.png'
import { BsTwitter ,BsInstagram} from 'react-icons/bs';
import { FaFacebookF,FaRegEnvelope } from 'react-icons/fa';
import companies from '../../assets/imgs/companies.png'

import './Footer.css'
function Footer() {
  return (
    <div className='footer'>
       <div className='container'>
         <div className='footer__content'>
          <div className='footer__item'>
            <a className='footer__logo' href="#"><img className='footer-logo-img' src={logo} alt="logo" /></a>
            <p className='footer__text'>Calista Wise 7292 Dictum Av. Antonio, Italy.</p>
            <p className='footer__text'>(+01)-800-3456-88</p>
            <p className='footer__text'>nasathemes@gmail.com</p>
            <p className='footer__text'>elessi.nasatheme.com</p>
          </div>
          <div className='footer__item'>
            <ul className='footer__list'>
              <li className='footer__list-item'><a className='footer__list-link' href="#"><BsTwitter className='footer__list-icon'/></a></li>
              <li className='footer__list-item'><a className='footer__list-link' href="#"><FaFacebookF className='footer__list-icon' /></a></li>
              <li className='footer__list-item'><a className='footer__list-link' href="#"><FaRegEnvelope className='footer__list-icon' /></a></li>
              <li className='footer__list-item'><a className='footer__list-link' href="#"><BsInstagram className='footer__list-icon' /></a></li>
            </ul>
            <p className='footer__text'>Delivery Information</p>
            <p className='footer__text'>Privacy Policy</p>
            <p className='footer__text'>Terms & Condition</p>
            <p className='footer__text'>Search Terms</p>
            <p className='footer__text'>Order & Return</p>
          </div>
          <div className='footer__item'>
              <p className='footer__newsletter'>Newsletter</p>
              <p className='footer__text'>Customer Service</p>
              <p className='footer__text'>Privacy Policy</p>
              <p className='footer__text'>Terms & Condition</p>
              <p className='footer__text'>Best Seller</p>
              <p className='footer__text'>Manufactures</p>
          </div>
          <div className='footer__item fi'>
              <form className='footer__form'>
                <input className='footer__input' type="email" placeholder='Enter youe email here'/>
                <button className='footer__form-btn'>subscribe</button>
              </form>
              <div className='footer__t'>
                <div><div className='footer__times'><p className='footer__time-text'>Monday - Friday</p><span className='footer__time'>08:00 - 20:00</span></div>
                <div className='footer__times'><p className='footer__time-text'>Saturday</p><span className='footer__time'>09:00 - 21:00</span></div>
                <div className='footer__times'><p className='footer__time-text'>Sunday</p><span className='footer__time'>13:00 - 22:00</span></div></div>
              </div>
              <img className='footer__img' src={companies} alt="companies" />
          </div>
          </div>
       </div>
    </div>
  )
}

export default Footer