import { createContext , useState , useEffect } from "react"
// import React from 'react'


//create ontext

export const ProductContext = createContext()

const ProductProvider = ({children}) => {

    const [products , setProducts] = useState([])

    useEffect(()=>{
        const fetchProduct = async ()=>{
            try {
                const response = await fetch('https://fakestoreapi.com/products')
            const data = await response.json()
            setProducts(data) 
            } catch (error) {
                console.log(error);
            }
        }
        fetchProduct()
    },[])


  return <ProductContext.Provider value={{products}}>{children}</ProductContext.Provider>
}

export default ProductProvider
