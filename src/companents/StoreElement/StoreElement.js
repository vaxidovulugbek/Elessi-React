import React, { useContext, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { AiFillFire } from 'react-icons/ai';
import { BsPiggyBank,BsArrowReturnLeft,BsQuestionCircle ,BsShare,BsTwitter,BsTelegram} from 'react-icons/bs';
import { FiTruck,FiHeart } from 'react-icons/fi';
import { VscSmiley } from 'react-icons/vsc';
import { FaFacebookF ,FaRegEnvelope} from 'react-icons/fa';
import Object from '../../Data'
import HeadphonesObject from '../Objects/Headphones'
import Header from '../Header/Header'
import HeroStore from './HeroStore'
import Products from '../Products/Products'
import Winshlist from '../Wishlist/Winshlist'
import Cart from '../Cart/Cart'
import { appContext } from '../../App'
import './StoreElement.css'
import HeroCategory from '../Hero/HeroCategory';

function StoreElement() {
  let mycart = useContext(appContext)
  let location = useLocation()
  let location1 = location.pathname.split('/').at(-1)
  let [sliders,setSliders] = useState(["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpMn6uYRWgfnzmdDykRlfLEKz9rpRCs1mxh_wHv65GciunpgcMwR7Az3F-pCFlFKFGzKA&usqp=CAU","https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg","https://i.pinimg.com/736x/a5/10/e5/a510e5b2dd47f402f0694bcd42f5e18c.jpg","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFej8pEkG1G0Zt1n4OGLZaVPlQLV246b2jOJBQFpR_QRTE6GYFUzcz9Tv3zvanDFqADxI&usqp=CAU","https://i.pinimg.com/originals/a7/3d/6e/a73d6e4ac85c6a822841e449b24c78e1.jpg"])

  let smallCarusel = (e) => {
    let elSliderInner = document.querySelector(".carusel__list");
    elSliderInner.style.transform = `translateX(${-e * 400}px)`;
  }
  return (
    <div className='element'>
      <Header />
      <HeroStore />
      <Winshlist />
      <Cart />
      {/* <HeroCategory /> */}
      <div className='container'>
      {
         Object.map((item,i) => {
           if(+location1 === item.id){
             return <div className='element__item' key={i}>
               <div className='element__slider'>
                <div className='content'>
                <div className='carusel'>
                  <div className='carusel__wishlist'>
                    <button className='carusel__wishlist-btn' onClick={() => mycart.savehendler(item)}><FiHeart className='carusel__wishlist-icon'/></button>
                  </div>
                <div className='carusel__list-content'>
                  <ul id='carusel__list' className='carusel__list'>
                      <li className='carusel__item'><img className='carusel__img' src={item.imgone} alt="" /></li>
                      <li className='carusel__item'><img className='carusel__img' src={item.imgtwo} alt="" /></li>
                      <li className='carusel__item'><img className='carusel__img' src={item.imgthree} alt="" /></li>
                      <li className='carusel__item'><img className='carusel__img' src={item.imgfour} alt="" /></li>
                  </ul>
              </div>
                <ul id='carusel__small-list' className='carusel__small-list'>
                  <li className='carusel__small-item' onClick={() => smallCarusel(0)} ><img className='carusel__small-img' src={item.imgone} alt="" /></li>
                  <li className='carusel__small-item' onClick={() => smallCarusel(1)} ><img className='carusel__small-img' src={item.imgtwo} alt="" /></li>
                  <li className='carusel__small-item' onClick={() => smallCarusel(2)} ><img className='carusel__small-img' src={item.imgthree} alt="" /></li>
                  <li className='carusel__small-item' onClick={() => smallCarusel(3)} ><img className='carusel__small-img' src={item.imgfour} alt="" /></li>
                </ul>
              </div>
            </div>

               </div>
               <div className='element__info'>
                 <h2 className='element__title'>{item.name}</h2>
                 <div className='element__h'>
                  <AiFillFire className='element__fire-icon'/>
                   <span>14 sold in last 15 hours</span>
                 </div>
                 <div className='element__text-info'>
                   <p>Automatically connected</p>
                   <p>Easy setup for all devices</p>
                   <p>Charges quickly in the case</p>
                   <p>Rich, high-quality audio and voice</p>
                 </div>
                 <div className='element__buyel'>
                    <BsPiggyBank className='element__pig' />
                    <span className='element__bulk'>Bulk Savings</span>
                    <span className='element__moresave-text'>(Buy more save more)</span>
                 </div>
                 <div className='element__buy'>
                   <a className='element__buy-link' href="#">
                     <span className='element__buy__subtext'>BUY 1</span>
                     <div className='element__buy-info'>
                       <span className='element__buy-price'>${item.price}</span>
                       <span>each</span>
                      </div>
                   </a>
                   <a className='element__buy-link' href="#">
                     <span className='element__buy__subtext'>BUY 2</span>
                     <div className='element__buy-info'>
                       <span className='element__buy-price'>${item.buytwo}</span>
                       <span>each</span>
                      </div>
                   </a>
                   <a className='element__buy-link' href="#">
                     <span className='element__buy__subtext'>BUY 3</span>
                     <div className='element__buy-info'>
                       <span className='element__buy-price'>${item.buythree}</span>
                       <span>each</span>
                      </div>
                   </a>
                 </div>

                 <div className='element-info'>
                  <div className='df ai'>
                    <div className='element-info-r df ai'>
                      <BsArrowReturnLeft className='element-info-icon' />
                      <p className='element-info-text'>Delivery & Return</p>
                    </div>
                    <div className='df ai'>
                      <BsQuestionCircle className='element-info-icon'/>
                      <p className='element-info-text'> Ask a Question</p>
                    </div>
                  </div>

                  <div className='element__info-t'>
                    <FiTruck/>
                    <p><span className='element-fw600'>Estimated Delivery:</span>Jul 09 – Jul 13</p>
                  </div>
                  <div className='element__info-t'>
                    <VscSmiley />
                    <p><span className='element-fw600'>113 people</span>are viewing this right now</p>
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
               </div>
           </div>

            }
          })
        }
        
        {
         HeadphonesObject.map((item,i) => {
           if(+location1 === item.id){
             return <div className='element__item' key={i}>
               <div className='element__slider'>
                <div className='content'>
                <div className='carusel'>
                  <div className='carusel__wishlist'>
                    <button className='carusel__wishlist-btn' onClick={() => mycart.savehendler(item)}><FiHeart className='carusel__wishlist-icon'/></button>
                  </div>
                <div className='carusel__list-content'>
                  <ul id='carusel__list' className='carusel__list'>
                      <li className='carusel__item'><img className='carusel__img' src={item.imgone} alt="" /></li>
                      <li className='carusel__item'><img className='carusel__img' src={item.imgtwo} alt="" /></li>
                      <li className='carusel__item'><img className='carusel__img' src={item.imgthree} alt="" /></li>
                      <li className='carusel__item'><img className='carusel__img' src={item.imgfour} alt="" /></li>
                  </ul>
              </div>
                <ul id='carusel__small-list' className='carusel__small-list'>
                  <li className='carusel__small-item' onClick={() => smallCarusel(0)} ><img className='carusel__small-img' src={item.imgone} alt="" /></li>
                  <li className='carusel__small-item' onClick={() => smallCarusel(1)} ><img className='carusel__small-img' src={item.imgtwo} alt="" /></li>
                  <li className='carusel__small-item' onClick={() => smallCarusel(2)} ><img className='carusel__small-img' src={item.imgthree} alt="" /></li>
                  <li className='carusel__small-item' onClick={() => smallCarusel(3)} ><img className='carusel__small-img' src={item.imgfour} alt="" /></li>
                </ul>
              </div>
            </div>

               </div>
               <div className='element__info'>
                 <h2 className='element__title'>{item.name}</h2>
                 <div className='element__h'>
                  <AiFillFire className='element__fire-icon'/>
                   <span>14 sold in last 15 hours</span>
                 </div>
                 <div className='element__text-info'>
                   <p>Automatically connected</p>
                   <p>Easy setup for all devices</p>
                   <p>Charges quickly in the case</p>
                   <p>Rich, high-quality audio and voice</p>
                 </div>
                 <div className='element__buyel'>
                    <BsPiggyBank className='element__pig' />
                    <span className='element__bulk'>Bulk Savings</span>
                    <span className='element__moresave-text'>(Buy more save more)</span>
                 </div>
                 <div className='element__buy'>
                   <a className='element__buy-link' href="#">
                     <span className='element__buy__subtext'>BUY 1</span>
                     <div className='element__buy-info'>
                       <span className='element__buy-price'>${item.price}</span>
                       <span>each</span>
                      </div>
                   </a>
                   <a className='element__buy-link' href="#">
                     <span className='element__buy__subtext'>BUY 2</span>
                     <div className='element__buy-info'>
                       <span className='element__buy-price'>${item.buytwo}</span>
                       <span>each</span>
                      </div>
                   </a>
                   <a className='element__buy-link' href="#">
                     <span className='element__buy__subtext'>BUY 3</span>
                     <div className='element__buy-info'>
                       <span className='element__buy-price'>${item.buythree}</span>
                       <span>each</span>
                      </div>
                   </a>
                 </div>

                 <div className='element-info'>
                  <div className='df ai'>
                    <div className='element-info-r df ai'>
                      <BsArrowReturnLeft className='element-info-icon' />
                      <p className='element-info-text'>Delivery & Return</p>
                    </div>
                    <div className='df ai'>
                      <BsQuestionCircle className='element-info-icon'/>
                      <p className='element-info-text'> Ask a Question</p>
                    </div>
                  </div>

                  <div className='element__info-t'>
                    <FiTruck/>
                    <p><span className='element-fw600'>Estimated Delivery:</span>Jul 09 – Jul 13</p>
                  </div>
                  <div className='element__info-t'>
                    <VscSmiley />
                    <p><span className='element-fw600'>113 people</span>are viewing this right now</p>
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
               </div>
           </div>

            }
          })
        } 
      </div>
        <Products />
    </div>
  )
}

export default StoreElement

// Object.map((el,i) => {
//   return setSliders([el.imgone,el.imgtwo,el.imgthree,el.imgfour])
// })