import { createContext, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './companents/Footer/Footer';
import StoreElement from './companents/StoreElement/StoreElement';
import WievingMore from './companents/WievMore/WievMore';
import Main from './companents/Main';
import Object from './companents/Objects/Headphones';

export let appContext = createContext(0)
function App() {
  let [cart,setCart] = useState(false)
  let [wishlist,setWishlist] = useState(false)
  let [WievMore,setWievMore] = useState(false)
  let [searchRespon,setSearchRespon] = useState(false)
  let [WievElement,setWievElement] = useState([])
  let [showLegth,setShowLegth] = useState(true)
  let [menuRespond,setMenuRespond] = useState(false)
  let [cartTotal,setCartTotal] = useState(0)

  let [length,setlength] = useState(false)

  let [saveArr, setSaveArr] = useState([])
  let [cardArr, setCardArr] = useState([])
  let [Obj,SetObj] = useState(Object)
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

if (cardArr.length === 0) {
  console.log(cardArr.length);
  // setlength(true)
  // setShowLegth(!showLegth)
}
// else if (cardArr.length > 0) {
//   setShowLegth(true)
// }

  return (
    <div className="App">
      <appContext.Provider value={{cart,setCart,setWishlist,wishlist,savehendler,saveArr,cardArr,removeSaveItem,removeSaveCart,saveCart,Obj,SetObj,WievMore,setWievMore,WievElement,setWievElement,setCartTotal,cartTotal,setSearchRespon,searchRespon,setMenuRespond,menuRespond}}>
       <Routes>
         <Route path='/' element={ <Main />} />
        <Route  path='card/:id' element={ <StoreElement />} />
        <Route path='wiev/:id' element={ <WievingMore /> } />
      </Routes>
        <Footer />
      </appContext.Provider>
    </div>
  );
}

export default App;
