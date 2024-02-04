import React  from 'react';
import '../App.css'

// import Footer from './components/Footer'
import NavBar from '../components/NavBar'
import HeroBanner from '../components/HeroBanner';
import { useContext } from 'react';
import { ProductContext } from '../context/ProductContext'

import ProductCard from '../components/ProductCard'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

function Home() {

  const { products } = useContext(ProductContext)
  console.log(products);
  const filteredProduct = products.filter(item => {
    return (item.category === "men's clothing" || item.category === "women's clothing");
  })
  const [email, setEmail] = React.useState("");
  const onChange = ({ target }) => setEmail(target.value);

  const notify = (e) => {
    e.preventDefault()
    try{
      console.log('send')
      toast.success(`Email has been addded`, {
        toastId: email
      });
    }catch(error){
      toast.error("An error has occured!");
    }
  }

  return (
    <>
 {/* Navbar  */}
<NavBar/>
{/* Banner  */}
<HeroBanner/>

<section className='py-16' id='featured'>
  <div className='mx-auto'>
<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 px-3 gap-7'>
{filteredProduct.map(products => {
  return (<ProductCard product={products} key={products.id}/>)
})}
</div>
  </div>
  <div className='my-6 flex justify-center items-center w-full'><Link className="py-3 px-5 mb-2  text-sm font-medium text-center text-white  border cursor-pointer bg-[black] border-gray-600">See More</Link></div>
</section>

<section className="bg-gray-900 my-12">
  <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
      <div className="mx-auto max-w-screen-md sm:text-center">
          <h2 className="mb-4 text-3xl tracking-tight font-extrabold text-white sm:text-4xl dark:text-white">Sign up for our newsletter</h2>
          <p className="mx-auto mb-8 max-w-2xl font-light text-gray-500 md:mb-12 sm:text-xl dark:text-gray-400">Stay up to date with the roadmap progress, announcements and exclusive discounts feel free to sign up with your email.</p>
          <form onSubmit={notify} >
              <div className="items-center gap-2 mx-auto mb-3 max-w-screen-sm sm:flex md:space-y-0 sm:space-y-2">
                  <div className="relative w-full mb-2">
                      <label htmlFor="email" className="hidden mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Email address</label>
                      <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                          <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
                      </div>
                      <input className="block p-3 pl-10 w-full text-sm text-gray-900 bg-gray-50 border-[1px] border-black" placeholder="Enter your email" type="email" required value={email}
        onChange={onChange}/>
                  </div>
                  <div>
                      <button type="submit" disabled={!email} className="py-3 px-5 mb-2  w-full text-sm font-medium text-center text-white  border cursor-pointer bg-[black] border-gray-600">Subscribe</button>
                  </div>
              </div>
              {/* <div className="mx-auto max-w-screen-sm text-sm text-left text-gray-500 newsletter-form-footer dark:text-gray-300">We care about the protection of your data. <a href="#" className="font-medium text-primary-600 dark:text-primary-500 hover:underline">Read our Privacy Policy</a>.</div> */}
          </form>
      </div>
  </div>
</section>
<Footer/>
<ToastContainer />
    </>
  )
}

export default Home
