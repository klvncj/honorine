// import React from 'react'
import { createContext , useState , useEffect } from 'react'
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//create context 

export const CartContext = createContext(0)

function CartProvider({children}) {
    //cart state
    const [cart , setCart] = useState([])
    // item amount 
    const [itemAmount , setItemAmount] = useState(0)

    //total 
    const [total,setTotal] = useState(0)

    useEffect(()=>{
        const total = cart.reduce((accumulator,currentItem) => {
            return accumulator + currentItem.price * currentItem.amount
        },0)
        setTotal(total)
    },[cart])

    useEffect(()=>{
        if(cart){
            const amount = cart.reduce((accumulator,currentItem) => {
                return accumulator + currentItem.amount
            },0)
            setItemAmount(amount)
        }
    } ,[cart])
    //add to cart
    const addToCart = (product ,id) => {
        const newItem = {...product, amount : 1}
        //check if item is already in cart
        const cartItem = cart.find((item) => {
            return item.id === id
        })
        toast.success(`${product.title} has been added to cart`, {
            toastId: product.id
          })

        if(cartItem){
            const newCart = [...cart].map((item) => {
                if(item.id === id){
                    return {...item,amount:cartItem.amount + 1}
                }else{
                    return item

                }
            })
            setCart(newCart)
        }else{
            setCart([...cart , newItem])
        }
    }

    // remove 
    const removeFromCart = (id) =>{
        const newCart = cart.filter((item) => {
         return item.id !== id   
        })
        setCart(newCart)
    }
    const clearCart = () => {
        setCart([])
    }

   const increaseAmount = (id) => {
    const item = cart.find((item) => item.id === id)
    addToCart(item,id)
   }

   const decreseAmount = (id) => {
    const cartItem = cart.find((item) => {return item.id === id})
    if(cartItem){
        const newCart = cart.map((item)=>{
            if(item.id === id){
                return {...item,amount : cartItem.amount -1}
            }
        })
        setCart(newCart )
    }if(cartItem.amount < 2){
        removeFromCart(id)
    }
   }
    
  return ( 
    <CartContext.Provider value={{cart,addToCart,removeFromCart,clearCart , increaseAmount , decreseAmount , itemAmount ,total}}>{children}</CartContext.Provider>
  )
}

export default CartProvider