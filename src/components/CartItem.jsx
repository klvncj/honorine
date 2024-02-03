// import React from 'react'
import { Link } from 'react-router-dom'
import {IoMdAdd, IoMdClose, IoMdRemove} from 'react-icons/io'
import {CartContext} from '../context/CartContext'
import { useContext } from 'react'


function CartItem({item}) {
   const {removeFromCart , increaseAmount , decreseAmount} = useContext(CartContext)
  const {id,title,image,price,amount} = item
  return (
    <div className='flex gap-x-4 lg:px-6 border-b border-gray-200 w-full font-light text-gray-500'>
      <div className='w-full min-h-[150px] flex items-center gap-x-4'>
        {/* image  */}
        <Link to={`/product/${id}`}>
          <img className='max-w-[80px] ' src={image} alt={title}/>
        </Link>
        <div className='w-full flex flex-col'>
          {/* title  */}
          <div className='flex justify-between mb-2'>
            <Link to={`/product/${id}`} className='text-sm uppercase font-medium max-w-[240px] text-black hover:underline'>{title}</Link>
            {/* remove  */}
            <div onClick={() => removeFromCart(id)  } className='text-xl cursor-pointer'>
              <IoMdClose  className='text-gray-500 hover:text-red-500 transition'/>
            </div>
          </div>
          <div className=' flex gap-x-2 h-[36px] text-sm'>
            {/* qty  */}
            <div className='flex flex-1 max-w-[100px] items-center h-full border text-black font-medium will-change-scroll'>
              {/* remove icon  */}
              <div onClick={()=> decreseAmount(id)} className='flex-1 h-full flex justify-center items-center cursor-pointer '>
              <IoMdRemove/>
              </div>
              {/* amount  */}
              <div className='h-full flex justify-center items-center px-2'>{amount}</div> 
              {/* plus icon  */}
              <div onClick={()=> increaseAmount(id)} className='  flex-1 h-full flex justify-center items-center cursor-pointer' >
              <IoMdAdd/>
              </div>
              </div>
            {/* item  */}
            <div className='flex-1 flex items-center justify-around'>₦ {price}</div> 
            {/* final  */}
            <div className='flex-1 flex justify-end items-center text-black font-medium'>{`₦ ${parseFloat(price * amount).toFixed(2)}`}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartItem