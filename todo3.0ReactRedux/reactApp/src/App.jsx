import { useState } from 'react';
import './App.css'
import { Header } from './components/Header/Header';
import  Products  from './components/Products/Products';
import { CartContext } from './context/CartContext';
import { ShoppingCart } from './components/ShoppingCart/ShoppingCart';
function App() {
  const [cart,setCart] = useState([])
  const [openCart,setOpenCart] = useState(false)
  return (
    <CartContext.Provider value={{cart,setCart,openCart,setOpenCart}}>
    <Header/>
    <Products/>
    <ShoppingCart/>
    </CartContext.Provider>
  );
}

export default App;
