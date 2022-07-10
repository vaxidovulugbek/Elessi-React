import React, { useContext } from 'react'
import { appContext } from '../../App'
import { BsChevronRight } from 'react-icons/bs';

import './Cart.css'
function Cart() {
  let mycart = useContext(appContext)
  return (
    <div className={`cart ${mycart.cart ? "cart-show" : ""}`}>
          <div className='wishlist-container'>
          <span className='wishlist-name'>Cart</span>
          <button className='wishlist-close' onClick={() => mycart.setCart(!mycart.cart)}><BsChevronRight /></button>
            <div className='wishlist-cart-container'>
            {
              mycart.cardArr.map(el => {
                return <div className='wishlist__cart df between'>
                <div className='df'>
                  <img className='wishlist__cart-img' src={el.imgone} alt="" />
                  <div className='wishlist__cart-info df'>
                    <h4 className='wishlist__cart-title '>{el.name}</h4>
                    <span className='wishlist__cart-price'>${el.price}</span>
                    <button className='wishlist__cart-add'>ADD TO CART</button>
                  </div>
                </div>
                <button className='wishlist__cart-close' onClick={()=> mycart.removeSaveCart(el.id)}>x</button>
                
                </div>
              }) 
            }
            </div>
          </div>

     
    </div>
  )
}

export default Cart


