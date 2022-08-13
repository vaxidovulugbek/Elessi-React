import React, { useContext } from 'react'
import { FiHeart ,FiEye} from 'react-icons/fi';
import { appContext } from '../../App';
import { NavLink } from 'react-router-dom';

function NewArrival() {
  let mycart = useContext(appContext)
  return (
    <div className='container'>
          <div className='headphones-content df ai between'>
          {
            mycart.Obj.map((item,i) => {
              return <NavLink className='product__offer-link' key={i} to={`/card/${item.id}`}>
                <div className='product__offer-item' key={i}>
                  <img className='product__offer-img' src={item.imgone}/>
                  <div className='product__offer-categor df ai'>
                    <button className='product__offer-button' onClick={() => mycart.saveCart(item)}>+</button>
                    <button className='product__offer-button' onClick={() => mycart.savehendler(item)}>{<FiHeart />} </button>
                    <button className='product__offer-button'><FiEye /></button>
                  </div>
                  <div className='product__offer-cp df ai'>
                    <span className='product__offer-price'>$<span>{item.discountprice}</span></span>
                    <span className='product__offer-subprice'>$<span>{item.price}</span></span>
                  </div>
                  <h4 className='product__offer-title'>{item.name}</h4>
                  <div className='df ai between'>
                    <p className='product__offer-sold'>Already sold:<span className='product__offer-already'>{item.sold}</span></p>
                    <p className='product__offer-sold'>avialable:<span className='product__offer-avialable'>{item.avialable}</span></p>
                  </div>
                </div>
              </NavLink> 
            })
          }
      </div>
    </div>

  )
}

export default NewArrival