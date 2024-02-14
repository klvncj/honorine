
import Footer from "../components/Footer"
import { useContext } from 'react';
import NavBar from "../components/NavBar"
import { ProductContext } from '../context/ProductContext'
import ProductCard2 from '../components/ProductCard2'
import ProductCard from '../components/ProductCard'
import { ToastContainer,} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { IoGridOutline } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import { CiGrid2H } from "react-icons/ci";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,

} from "@material-tailwind/react";

// import ProductCard2 from "../components/ProductCard2";

const Sort = ['popular','Latest','Oldest','price : asending','price : desending',]

function Collections() {
  const { products } = useContext(ProductContext)
  const filteredProduct = products.filter(item => {
    return (item.category === "men's clothing" || item.category === "women's clothing");
  })
  // const [layout , setLayout] = useState(true)
  return (
    <>
    <NavBar/>
    <span className="font-bold text-3xl tracking-wide w-full flex justify-center items-center gap-2 my-12" style={{fontFamily : '"Montserrat",sans-serif'}}><div className=" w-12 h-[2px] bg-black"></div>COLLECTION <div className=" w-12 h-[2px] bg-black"></div></span>
    <div className="flex w-full justify-between px-6">
      <div className="flex gap-1 justify-center items-center cursor-pointer border-black border-[1px] px-2 rounded"><IoGridOutline /><CiGrid2H /></div>
      <div className="lg:mx-12">
      <Menu>
      <MenuHandler>
        <button className="border-black border-[1px] px-4 rounded py-1 flex gap-2 items-center">Sort by <IoIosArrowDown /></button>
      </MenuHandler>
      <MenuList>
        {Sort.map(item =>{
          return (<MenuItem key={item}>{item}</MenuItem>)
        })}
      </MenuList>
    </Menu>
      </div>
    </div>
    <main className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 px-3 gap-7 mt-12 mb-32 '>
    {filteredProduct.map(products => {
  return (<ProductCard2 product={products} key={products.id}/>)
})}
    </main>
   
    <Footer/>
    <ToastContainer/>
    </>
  )
}

export default Collections