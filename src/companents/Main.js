import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Arrivals from './Arrivals/Arrivals'
import Cart from './Cart/Cart'
import Header from './Header/Header'
import Featured from './Headphones/Featured'
import Headphones from './Headphones/Headphones'
import NewArrival from './Headphones/NewArrival'
import OnSale from './Headphones/OnSale'
import Popular from './Headphones/Popular'
import Hero from './Hero/Hero'
// import Headphones from './Objects/Headphones'
import Products from './Products/Products'
import Speaker from './Speaker/Speaker'
import WievMore from './WievMore/WievMore'
import Winshlist from './Wishlist/Winshlist'

function Main() {
  return (
    <>
      <Header />
      <Cart />
      <Winshlist />
      <WievMore />
      <Hero />
      <Products />
      <Headphones />
      <NewArrival />
      {/* <Routes>
         <Route path='/' element={ <Main />} />
         <Route  path='card/:id' element={ <StoreElement />} />
        <Route path='/' element={<NewArrival />}/>
        <Route path='featured' element={<Featured />}/>
        <Route path='popular' element={<Popular />}/>
        <Route path='onsale' element={<OnSale />}/>
      </Routes> */}
      <Speaker />
      <Arrivals />
    </>
  )
}

export default Main