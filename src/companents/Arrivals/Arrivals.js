import React, { useContext } from 'react'
import { appContext } from '../../App';
import { BsArrowsFullscreen ,BsPiggyBank} from 'react-icons/bs';
import { AiOutlineCar ,AiOutlineCreditCard} from 'react-icons/ai';
import { FiPhoneCall } from 'react-icons/fi';
import { GiReturnArrow } from 'react-icons/gi';
// import { BsArrowsFullscreen } from 'react-icons/bs';
// import { BsArrowsFullscreen } from 'react-icons/bs';
import Object from '../Objects/Headphones'

import './Arrivals.css'
import { NavLink } from 'react-router-dom';
function Arrivals() {
  let mycart = useContext(appContext)
  let result = Object.filter(element => element.type === "arrivals");
  let wievHendler = (item) => {
    mycart.setWievMore(!mycart.WievMore)
    mycart.setWievElement([item])
  }
  return (
    <div className='container'>
      <div className='arrivals df ai between'>
         <h3 className='arrivals__name'>Arrivals</h3>
      </div>
      <ul className='arrivals__list'>
        {
          result.map((item,index) => {
            // return <NavLink className="arrivals__link" key={index} to={`/wiev/${item.id}`}>
            // <li className='arrivals__item df' onClick={() => mycart.setWievMore(!mycart.WievMore)}>
            //   <div className='arrivals-show-el'>
            //     <img className='arrivals__list-img' src={item.imgone} alt="" />
            //     <div className='arrivals__list-cntn'><BsArrowsFullscreen className='arrivals-show-icon'/></div>
            //     <div className='arrivals__show-bg'></div>
            //   </div>
            //   <div className='arrivals__info'>
            //     <h3 className='arrivals__list-title'>{item.name}</h3>
            //     <div className='arrivals__list-prices'>
            //       <span className='arrivals__list-discount'>${item.discountprice}</span>
            //       <span className='arrivals__list-price'>${item.price}</span>
            //     </div>
            //   </div>
            // </li>
            // </NavLink>
            return <li className='arrivals__link df' onClick={() => wievHendler(item)} key={index}>
              <div className='arrivals-show-el'>
                <img className='arrivals__list-img' src={item.imgone} alt="" />
                <div className='arrivals__list-cntn'><BsArrowsFullscreen className='arrivals-show-icon'/></div>
                <div className='arrivals__show-bg'></div>
              </div>
              <div className='arrivals__info'>
                <h3 className='arrivals__list-title'>{item.name}</h3>
                <div className='arrivals__list-prices'>
                  <span className='arrivals__list-discount'>${item.discountprice}</span>
                  <span className='arrivals__list-price'>${item.price}</span>
                </div>
              </div>
            </li>
          })
        }
      </ul>
      <div className='arrival-cart df ai between'>
        <div className='arrival-cart-item df ai'>
            <AiOutlineCar className='arrival-cart-icon'/>
            <div className='arrival-cart-info'>
              <p className='arrival-cart-name'>Free Delivery</p>
              <p className='arrival-cart-text'>For all Order Over $50</p>
            </div>
        </div>

        <div className='arrival-cart-item df ai'>
            <BsPiggyBank className='arrival-cart-icon'/>
            <div className='arrival-cart-info'>
              <p className='arrival-cart-name'>Discount</p>
              <p className='arrival-cart-text'>40% Discount for member</p>
            </div>
        </div>

        <div className='arrival-cart-item df ai'>
            <AiOutlineCreditCard className='arrival-cart-icon'/>
            <div className='arrival-cart-info'>
              <p className='arrival-cart-name'>Secure Payment</p>
              <p className='arrival-cart-text'>Secure payment</p>
            </div>
        </div>

        <div className='arrival-cart-item df ai'>
            <FiPhoneCall className='arrival-cart-icon'/>
            <div className='arrival-cart-info'>
              <p className='arrival-cart-name'>Help Center</p>
              <p className='arrival-cart-text'>24/7 Support System</p>
            </div>
        </div>

        <div className='arrival-cart-item df ai'>
            <GiReturnArrow className='arrival-cart-icon'/>
            <div className='arrival-cart-info'>
              <p className='arrival-cart-name'>Free Return</p>
              <p className='arrival-cart-text'>Free 7-day return, so easy</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Arrivals