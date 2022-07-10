import React, { useContext } from 'react'
import { NavLink, Route, Routes } from 'react-router-dom';
import Object from '../Objects/Headphones'
import './Headphones.css'

import { appContext } from '../../App';
import NewArrival from './NewArrival';
// import NewArrival from './NewArrival';
function Headphones() {
  console.log(Object);
  // let newarrv = (e) => {
  //   Object.filter(element => {
  //     return element.type === "popular"
  //   });
  // }
  let mycart = useContext(appContext)
  return (
    <div className='container'>
      <div className='headphones df ai between'>
         <h3 className='headphones__name'>Headphones</h3>
         <div className='df ai'>
           {/* <NavLink to="/"><button className='headphones__btn'>New Arrivals</button></NavLink>
           <NavLink to="/featured"><button className='headphones__btn'>Featured</button></NavLink>
           <NavLink to="/popular"><button className='headphones__btn'>Popular</button></NavLink>
           <NavLink to="/onsale"><button className='headphones__btn'>On Sale</button></NavLink> */}
           <button className='headphones__btn' onClick={() =>  Object.filter(element => element.type === "newarrival")}>New Arrivals</button>
           <button className='headphones__btn' onClick={() =>  Object.filter(element => element.type === "popular")}>Featured</button>
           <button className='headphones__btn' >Popular</button>
           <button className='headphones__btn' onClick={() =>  Object.filter(element => element.type === "arrivals")}>On Sale</button>
         </div>
      </div>
    </div>
  )
}

export default Headphones