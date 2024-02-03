// import React  from 'react';
import '../App.css'

// import Footer from './components/Footer'
import NavBar from '../components/NavBar'
import HeroBanner from '../components/HeroBanner';
import { useContext } from 'react';
import { ProductContext } from '../context/ProductContext'

import ProductCard from '../components/ProductCard'

function Home() {

  const { products } = useContext(ProductContext)
  console.log(products);
  const filteredProduct = products.filter(item => {
    return (item.category === "men's clothing" || item.category === "women's clothing");
  })
console.log(filteredProduct);
  return (
    <>
 {/* Navbar  */}
<NavBar/>
{/* Banner  */}
<HeroBanner/>

<section className='py-16'>
  <div className='mx-auto'>
<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 px-3 gap-7'>
{filteredProduct.map(products => {
  return (<ProductCard product={products} key={products.id}/>)
})}
</div>
  </div>
</section>

    </>
  )
}

export default Home
