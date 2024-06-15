import { useEffect, useState } from "react"
import CATALOG from '../server/catalog.json'

export const useCartData = (cart,openCart) =>{
  const [totalSum, setTotalSum] = useState(0)
  const [products,setProducts] = useState([])
  const [loading,setLoading] = useState(true)

  useEffect(()=>{
    if(openCart){
    if(cart.length>0){
    const products = CATALOG.filter((item)=>{
      const inCart = cart.some((el)=>el===item.id)
      return inCart
    })
      setTimeout(()=>{
        setTotalSum(products.reduce((acc,el)=>{
          acc+=el.price
          return acc
        },0))
        setProducts(products)
        setLoading(false)
      },1200)
    }else{
      setTimeout(()=>{
        setLoading(false)
      },1200)
    }
  }
    return ()=>{
      setProducts([])
      setLoading(true)
    }
  },[openCart])

  return {totalSum,products,loading}
}
