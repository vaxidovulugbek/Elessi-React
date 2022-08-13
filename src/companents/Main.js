import React from 'react'
import Arrivals from './Arrivals/Arrivals'
import Cart from './Cart/Cart'
import Header from './Header/Header'
import Headphones from './Headphones/Headphones'
import NewArrival from './Headphones/NewArrival'
import Hero from './Hero/Hero'
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
      <Speaker />
      <Arrivals />
    </>
  )
}

export default Main