import { createContext, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Cart from './companents/Cart/Cart';
import Header from './companents/Header/Header';
import Featured from './companents/Headphones/Featured';
import Headphones from './companents/Headphones/Headphones';
import NewArrival from './companents/Headphones/NewArrival';
import OnSale from './companents/Headphones/OnSale';
import Popular from './companents/Headphones/Popular';
import Hero from './companents/Hero/Hero';
import Products from './companents/Products/Products';
import Speaker from './companents/Speaker/Speaker';
import SpekerFeatured from './companents/Speaker/SpekerFeatured';
import Winshlist from './companents/Wishlist/Winshlist';
import Arrivals from './companents/Arrivals/Arrivals'
import Footer from './companents/Footer/Footer';
import StoreElement from './companents/StoreElement/StoreElement';
import Main from './companents/Main';

export let appContext = createContext(0)
function App() {
  let [cart,setCart] = useState(false)
  let [wishlist,setWishlist] = useState(false)

  let [saveArr, setSaveArr] = useState([])
  let [cardArr, setCardArr] = useState([])
  let savehendler = (e) => {
    if(saveArr.indexOf(e) !== -1) return
    setSaveArr([...saveArr,e])
  }
  let removeSaveItem = (e) => {
    setSaveArr(saveArr.filter(item=> {
      return item.id !== e
    }))
  }
// =====================================================
let saveCart = (e) => {
  if(cardArr.indexOf(e) !== -1) return
  setCardArr([...cardArr,e])
}
let removeSaveCart = (e) => {
  setCardArr(cardArr.filter(item=> {
    return item.id !== e
  }))
}

  return (
    <div className="App">
      <appContext.Provider value={{cart,setCart,setWishlist,wishlist,savehendler,saveArr,cardArr,removeSaveItem,removeSaveCart,saveCart}}>
        {/* <Header />
        <Cart />
        <Winshlist />
        <Hero />
        <Products />
        <Headphones /> */}
        {/* <Main /> */}
       <Routes>
         <Route path='/' element={ <Main />} />
        <Route  path='card/:id' element={ <StoreElement />} />
        {/* <Route path='/' element={<NewArrival />}/>
        <Route path='featured' element={<Featured />}/>
        <Route path='popular' element={<Popular />}/>
        <Route path='onsale' element={<OnSale />}/> */}
      </Routes>
        {/* <Speaker />
        <Arrivals /> */}
        <Footer />
      </appContext.Provider>
    </div>
  );
}

export default App;
