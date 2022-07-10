import React, { useContext } from 'react'
import { NavLink, Route, Routes } from 'react-router-dom';
import banner3 from '../../assets/imgs/banner3.jpg'
import banner4 from '../../assets/imgs/banner4.jpg'
import './Speaker.css'

import { appContext } from '../../App';
import SpekerFeatured from './SpekerFeatured';
// import NewArrival from './NewArrival';
function Speaker() {
  let mycart = useContext(appContext)
  return (
    <div className='container'>
      <div className='headphones df ai between'>
         <h3 className='headphones__name'>Speaker</h3>
         <div className='df ai'>
           {/* <NavLink to="/spekerfeatured"><button className='headphones__btn'>New Arrivals</button></NavLink>
           <NavLink to="/spekerfeatured"><button className='headphones__btn'>Featured</button></NavLink>
           <NavLink to="/spikerpopular"><button className='headphones__btn'>Popular</button></NavLink>
           <NavLink to="/spekeronssale"><button className='headphones__btn'>On Sale</button></NavLink> */}
         </div>
      </div>
        <SpekerFeatured />
        <div className='product__shop-content df ai between'>
          <div className='procuct__shop-s'>
            <img className='product__shop-img' src={banner3} alt="" />
            <div className='product__shop-info'>
              <h4 className='product__shop-title'>Drone Radio Controller</h4>
              <span className='product__shop-link'>Discover  Now</span>
            </div>
          </div>
          <div className='procuct__shop-s'>
            <img className='product__shop-img' src={banner4} alt="" />
            <div className='product__shop-info'>
              <h4 className='product__shop-title'>Virtual Reality Headset</h4>
              <span className='product__shop-link'>Discover  Now</span>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Speaker