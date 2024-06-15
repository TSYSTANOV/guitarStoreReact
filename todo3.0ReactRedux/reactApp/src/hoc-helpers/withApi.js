import { useContext, useEffect, useState } from "react"
import CATALOG from '../server/catalog.json'
import { CartContext } from "../context/CartContext"
import { LoadingSpinner } from "../components/LoadingSpinner/LoadingSpinner"


export function withApi (Component){
  return (props)=>{
    const {cart, setCart} = useContext(CartContext)
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(false)
    const [data,setData] = useState([])
    useEffect(()=>{
      setLoading(true)
      setTimeout(()=>{
        setData(CATALOG)
      setLoading(false)
      },1000)
    },[])
    const addToCart =(id)=>{
      setCart((prev)=>{
        const inCart = prev.some((el)=>{
          return el===id})
        if(!inCart){
          return [...prev, id]
        }else{
          const i = prev.indexOf(id)
          prev.splice(i,1)
          return [...prev]
        }
      })

    }
    return (
      <>{loading && <LoadingSpinner/>}
      {error ? <div>Error data</div> : <Component catalog={data} {...props} addToCart={addToCart} cart={cart}/>}
      </>
    )
  }
}
