import React, { useContext } from 'react'
import { appContext } from '../../App'
import { BsChevronRight } from 'react-icons/bs';
import './Wishlist.css'
function Winshlist() {
  let mycart = useContext(appContext)

  return (
    <div className={`wishlist ${mycart.wishlist ? "wishlist-show" : ""}`}>
      <div className='wishlist-container'>
        <span className='wishlist-name'>Winshlist</span>
        <button className='wishlist-close' onClick={() => mycart.setWishlist(!mycart.wishlist)}><BsChevronRight /></button>
        <div className='wishlist-cart-container'>
          {
            mycart.saveArr.map((el,index) => {
              return <div className='wishlist__cart df between' key={index}>
                <div className='df'>
                  <img className='wishlist__cart-img' src={el.imgone} alt="" />
                  <div className='wishlist__cart-info df'>
                    <h4 className='wishlist__cart-title '>{el.name}</h4>
                    <span className='wishlist__cart-price'>${el.price}</span>
                    <button className='wishlist__cart-add'>ADD TO CART</button>
                  </div>
                </div>
                <button className='wishlist__cart-close' onClick={()=> mycart.removeSaveItem(el.id)}>x</button>
                
                </div>
            }) 
          }
        </div>
      </div>
    </div>
  )
}

export default Winshlist












