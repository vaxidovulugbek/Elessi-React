import React, { useContext, useState } from 'react'
import { appContext } from '../../App';
import logo from '../../assets/imgs/logo.png'
import './Header.css'
import Object from '../Objects/Headphones'
import { NavLink } from 'react-router-dom';
import { AiOutlineMenu ,AiOutlineClose} from 'react-icons/ai';
import { BsSearch } from 'react-icons/bs';
function Header() {
  let mycart = useContext(appContext)

  let [value,setValue] = useState("")
  let [showStore,setshowStore] = useState(true)

  let filtered = Object.filter(el => { 
    return el.name.toLocaleLowerCase().includes(value.toLocaleLowerCase())
  })
  let searchingHendler = (event) => {
    setValue(event.target.value)
    setshowStore(false)
    
    if(event.target.value === "") {
      setshowStore(true)
    }
  } 


  // if (mycart.cardArr.length <= 0) {
  //   setShowLegth(false)
  // }
  // else if (mycart.cardArr.length > 0) {
  //   setShowLegth(true)
  // }

  return (
    <div className='header'>
      <div className='container'>
        <div className='header__content df ai between'>
          <div className='header-respond'>
            <button onClick={() => mycart.setMenuRespond(!mycart.menuRespond)}><AiOutlineMenu /></button>
            <button onClick={() => mycart.setSearchRespon(!mycart.searchRespon)}><BsSearch /></button>
          </div>
          <div className={`header-res-form ${mycart.searchRespon ? "header-res-form-show" : ""}`}>
            <input type="search" placeholder="I'm shopping for ..." onChange={(event) => searchingHendler(event)}/>
            <button onClick={() => mycart.setSearchRespon(!mycart.searchRespon)}><AiOutlineClose /></button>
          </div>
          <img className='logo' src={logo} alt="logo" />
          <form className='header__form df ai between'>
            <input className='header__search' type="search" placeholder="I'm shopping for ..." onChange={(event) => searchingHendler(event)} />
            <button className='header__btn df ai'>
              <span className='header__btn-text'>Search</span>
              <i className='bx bx-search'></i>
            </button>
            
          </form> 
          <div className='header__shoppings df ai'>
            <i className="bx bx-shopping-bag" onClick={() => mycart.setCart(!mycart.cart)}><p className={`${mycart.cardArr.length === 0 ? "d-none" : "shop-num"}`}><span>{mycart.cardArr.length}</span></p></i>
            <i className='bx bx-heart' onClick={() => mycart.setWishlist(!mycart.wishlist)}><p className={`${mycart.saveArr.length === 0 ? "d-none" : "shop-num"}`}><span>{mycart.saveArr.length}</span></p></i>
          </div>

        </div>
        <div className='searching' style={{display: showStore ? 'none' : 'block' }}>
          {
            filtered.map((item,i) => {
              return  <NavLink className='searching__content' key={i} to={`/card/${item.id}`}>
                  <img className='searching__img' src={item.imgone} alt="products" />
                  <div className='searching__info'>
                    <p className='searching__name'>{item.name}</p>
                    <div className='searching__prices'>
                      <p className='searching__discountprice'>{item.discountprice}</p>
                      <p className='searching__price'>{item.price}</p>
                    </div>
                  </div>
              </NavLink>
            })
          }
        </div>
      </div>
    </div>
  )
}

export default Header