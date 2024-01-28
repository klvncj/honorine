// import React from 'react'
import ProductCard from './ProductCard'

function Main1() {
  return (
 <main className='mb-24'>
  <div className='flex flex-col'>
  <div className='flex justify-center items-center my-4'>Latest Collection</div>
 <div className='flex justify-center items-center'>
 <div className='grid justify-center grid-cols-1 md:grid-cols-2 lg:grid-cols-4 p-2 gap-12'>
    <ProductCard/>
    <ProductCard/>
    <ProductCard/>
    <ProductCard/>  
  </div>
 </div>

  </div>
</main> 
  )
}

export default Main1