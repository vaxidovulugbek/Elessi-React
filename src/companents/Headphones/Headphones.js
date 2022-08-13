import React, { useContext, useState } from 'react'
import Object from '../Objects/Headphones'
import './Headphones.css'
import { appContext } from '../../App';

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
           {type.map((item,i) => {
              return <button className='headphones__btn' onClick={()=> filtered(item)} key={item}>{item}</button>
            })}
         </div>
      </div>
    </div>
  )
}

export default Headphones