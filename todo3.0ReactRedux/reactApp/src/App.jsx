import { useState } from 'react';
import './App.css'
import { Header } from './components/Header/Header';
import  Products  from './components/Products/Products';
import { CartContext } from './context/CartContext';
function App() {
  const [cart,setCart] = useState([])
  return (
    <CartContext.Provider value={[cart,setCart]}>
    <Header/>
    <Products/>
    </CartContext.Provider>
  );
}

export default App;
