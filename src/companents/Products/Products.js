import React, { useContext, useState } from 'react'
import './Products.css'
import banner1 from '../../assets/imgs/h3-banner1.jpg'
import banner2 from '../../assets/imgs/h3-banner2.jpg'
import Object from '../../Data'
import { FiHeart ,FiEye} from 'react-icons/fi';
import { FaHeart} from 'react-icons/fa';
import { appContext } from '../../App'
import { NavLink } from 'react-router-dom'

function Products() {
  let mycart = useContext(appContext)
  const [open, setOpen] = useState(false);
  const [heart, setHeart] = useState(true);

  const onmuseHendler = (e) => {
    setOpen(true)
  }
  return (
    <div className='products'>
      <div className='container'>
        <div className='products__h'>
          <span className='products__i'>What we offer</span>
          <p className='products__text'>Find today's great deal, as well as those coming soon. Sale price valid for one day only.</p>
        </div>
        <div className='product__offer df ai between'>
          {
            Object.map((item,i) => {
              return <NavLink className='product__offer-itemm' key={i} to={`/card/${item.id}`}>
                <div >
              {/* <img className='product__offer-img' src={item.imgone} alt="" /> */}
              {/* <div onMouseOver={() => setOpen(true)} onMouseOut={() => setOpen(false)}>
                <img className='product__offer-img'  src={open ? item.imgtwo  : item.imgone }/>
              </div> */}
               <img className='product__offer-img' onMouseEnter={onmuseHendler}  src={item.imgone}/>
              <div className='product__offer-categor df ai'>
                <button className='product__offer-button' onClick={() => mycart.saveCart(item)}>+</button>
                <button className='product__offer-button' onClick={() => mycart.savehendler(item)}>{heart ? <FiHeart /> : <FaHeart />} </button>
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
        <div className='product__shop-content df ai between'>
          <div className='procuct__shop-i'>
            <img className='product__shop-img' src={banner1} alt="" />
            <div className='product__shop-info'>
              <h4 className='product__shop-title'>iPhone Case</h4>
              <span className='product__shop-link'>Discover  Now</span>
            </div>
          </div>
          <div className='procuct__shop-i'>
            <img className='product__shop-img' src={banner2} alt="" />
            <div className='product__shop-info'>
              <h4 className='product__shop-title'>Superior sound</h4>
              <span className='product__shop-link'>Discover  Now</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Products