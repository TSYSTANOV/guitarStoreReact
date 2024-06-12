import { useContext, useEffect } from 'react'
import { withApi } from '../../hoc-helpers/withApi'
import styles from './Products.module.css'
import { CartContext } from '../../context/CartContext'

function Products({catalog , addToCart , cart}){

  return (<div id='products'>
    <ul className={styles['product-container']}>
      {catalog.map((item)=>{
        return <li key={item.id} className={styles['product-element']}>
        <span className={styles['product-element__name']}>{item.name}</span>
        <img className={styles['product-element__image']} src={item.img}/>
        <span className={styles['product-element__price']}>🔥 {item.price} USD</span>
        <button className={ !cart.includes(item.id) ? styles['product-element__btn'] : styles['product-element__btn_active']} onClick={()=>{
          addToCart(item.id)
        }}>{cart.includes(item.id) ? 'Remove From Cart' : 'Add To Cart'}</button>
      </li>
      })}

    </ul>
  </div>)
}
export default withApi(Products)
