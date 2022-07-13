import React, { useContext, useState } from 'react'
import { NavLink, Route, Routes } from 'react-router-dom';
import Object from '../Objects/Headphones'
import './Headphones.css'

import { appContext } from '../../App';
import NewArrival from './NewArrival';

function Headphones() {
  let mycart = useContext(appContext)
  let categories = [...new Set(Object.map(item => item.type))];
  let [type, settype] = useState(categories)
  let filtered = (type) => {
    if (type === 'All') {
      mycart.SetObj(Object)
      return
    }
    let newitemdata = Object.filter(item => {
      return item.type === type
    })
    mycart.SetObj(newitemdata)
  }

  return (
    <div className='container'>
      <div className='headphones df ai between'>
         <h3 className='headphones__name'>Headphones</h3>
         <div className='df ai'>
           {/* <NavLink to="/"><button className='headphones__btn'>New Arrivals</button></NavLink>
           <NavLink to="/featured"><button className='headphones__btn'>Featured</button></NavLink>
           <NavLink to="/popular"><button className='headphones__btn'>Popular</button></NavLink>
           <NavLink to="/onsale"><button className='headphones__btn'>On Sale</button></NavLink> */}

           {/* <button className='headphones__btn' onClick={newarrival}>New Arrivals</button>
           <button className='headphones__btn' onClick={() =>  mycart.SetObj(mycart.Obj.filter(element => element.type === "featured"))}>Featured</button>
           <button className='headphones__btn' onClick={popular}>Popular</button>
           <button className='headphones__btn' onClick={() =>  mycart.SetObj(mycart.Obj.filter(element => element.type === "arrivals"))}>On Sale</button> */}
           {type.map((item,i) => {
              return <button className='headphones__btn' onClick={()=> filtered(item)} key={item}>{item}</button>
            })}
         </div>
      </div>
    </div>
  )
}

export default Headphones