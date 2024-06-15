import { useContext } from 'react'
import styles from './Header.module.css'
import { CartContext } from '../../context/CartContext'

function Header(){
  const {cart, setOpenCart} = useContext(CartContext)

  return (
    <div id='header'>
    <div className={styles['header-container']}>
        <div className={styles['header-counter']} onClick={()=>{
          setOpenCart(true)
        }}>🔥 {cart.length}</div>
        </div>
        </div>
  )
}
export {Header}
