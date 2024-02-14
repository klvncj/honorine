import { useContext} from 'react';
import NavBar from "../components/NavBar"
import { ProductContext } from '../context/ProductContext'
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';
import { ToastContainer,} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import sorry from '../assets/Feeling sorry-rafiki.svg'


function Sales() {
    //make an api filter to return all with the sales value set to true
    const { products } = useContext(ProductContext)
    const filteredProduct = products.filter(item => {
      return (item.category === "men'ss clothing" || item.category === "women'ss clothing"); //this would be item.sale === true
    })
  return (
    <>
    
    <NavBar/>
   {
   filteredProduct === ""? <main className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 px-3 gap-7 mt-12 mb-32 '>
    {filteredProduct.map(products => {
  return (<ProductCard product={products} key={products.id}/>)
     })}
    </main>:
    <main>
        <div className='flex justify-center mt-12 text-red-500 font-serif'><span className='text-4xl font-black tracking-tight px-1 ' >Sales are currently unavailable</span></div> 
        <img className='w-full lg:h-[75dvh] ' src={sorry} alt='Sales unavailable'/>
    </main>
    }
    <Footer/>
    <ToastContainer/>
    </>
  )
}

export default Sales