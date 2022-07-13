import React, { useContext } from 'react'
import { appContext } from '../../App'
import { BsChevronRight } from 'react-icons/bs';
import Object from '../Objects/Headphones'
import './WievMore.css'
import { useLocation } from 'react-router-dom';
import { BsShare,BsTwitter,BsTelegram} from 'react-icons/bs';
import { FaFacebookF ,FaRegEnvelope} from 'react-icons/fa';
function WievingMore() {
  let mycart = useContext(appContext)

  return (
    <div className={`WievMore ${mycart.WievMore ? "WievMore-show" : ""}`}>
       <div className='wiev-container'>
          <button className='WievMore-close' onClick={() => mycart.setWievMore(!mycart.WievMore)}><BsChevronRight /></button>
          <div>
              {
                mycart.WievElement.map((item,i) => {
                    return <div className='wiev' key={i}>
                      <div className='wiev__imgs'>
                        <img className='wiev__img' src={item.imgone} alt="products" />
                        <img className='wiev__img' src={item.imgtwo} alt="products" />
                      </div>
                      <h2 className='wiev__title'>{item.name}</h2>
                      <div className='df ai'>
                        <span className='wiev__discountprice'>${item.discountprice}</span>
                        <span className='wiev__price'>${item.price}</span>
                      </div>
                      <div className='element__text-info'>
                        <p>Automatically connected</p>
                        <p>Easy setup for all devices</p>
                        <p>Charges quickly in the case</p>
                        <p>Rich, high-quality audio and voice</p>
                      </div>
                      <div className='wiev-addet'>
                        <button onClick={() => mycart.saveCart(item)}>ADD TO CART</button>
                        <button onClick={() => mycart.savehendler(item)}>BUY NOW</button>
                      </div>

                      <div className='element__share'>
                        <div className='df ai'>
                          <BsShare />
                          <p>Share</p>
                        </div>
                        <div className='element__share-icons'>
                            <BsTwitter className='element__share-icon'/>
                            <FaFacebookF className='element__share-icon' />
                            <BsTelegram className='element__share-icon'/>
                            <FaRegEnvelope className='element__share-icon'/>
                        </div>
                      </div>
                  </div>
                  
                })
              }
          </div>
        </div>  
      </div>
  )
}

export default WievingMore