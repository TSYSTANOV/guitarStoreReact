import { useContext, useEffect, useState } from 'react'
import styles from './ShoppingCart.module.css'
import { CartContext } from '../../context/CartContext'

import { LoadingSpinner } from '../LoadingSpinner/LoadingSpinner'
import { useCartData } from '../../hooks/useCartData'
function ShoppingCart(){
  const {openCart,setOpenCart,cart} = useContext(CartContext)
  const {totalSum, products , loading} = useCartData(cart,openCart)


  if(openCart){
  return <div id='shopping'>
    <div className={styles['shopping-container']}>
        <div className={styles['shopping__close']} onClick={()=>{setOpenCart(false)}}>X</div>
        {loading && <LoadingSpinner/>}
        <table>
          {products.length > 0?
          <tbody>
            {
              products.map((item)=>{
                return <tr key={item.id}>
                <td className={styles['shopping-element__name']}>🔥 {item.name}</td>
                <td className={styles['shopping-element__price']}> {item.price} USD</td>
              </tr>
              })
            }
        <tr>
        <td className={styles['shopping-element__name']}>Summary: {totalSum}</td>
        <td className={styles['shopping-element__price']}> USD</td>
        </tr>
        </tbody>:
        !loading && <tr>Cart Is Empty</tr>}
        </table>
        </div>`
  </div>
  }
}
export {ShoppingCart}
