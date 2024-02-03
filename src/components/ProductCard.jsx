import { useContext } from "react"
import { BsEyeFill, BsPlus } from "react-icons/bs";
import { Link } from "react-router-dom";

import {CartContext} from '../context/CartContext'

function ProductCard({product}) {
 const {addToCart} = useContext(CartContext)
  //destructure
  const {id,image,category,title,price} = product
  return (
   <div>
    <div className="border border-[#e4e4e4] h-[300px] mb-4 relative overflow-hidden group transition">
      <div className="w-full h-full flex justify-center items-center">
        {/* imge */}
        <div className="w-[200px] mx-auto flex justify-center items-center">
        <img src={image} alt={id}  className="max-h-[160px] group-hover:scale-110 transition duration-300"/>
        </div>
        {/* button  */}
        <div className="absolute top-6 -right-11 group-hover:right-5 p-2 flex flex-col items-center justify-center gap-y-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
          <button onClick={() => addToCart(product,id)}>
            <div className="flex justify-center items-center text-white w-12 h-12 bg-gray-800">
              <BsPlus className='text-3xl'/>
              </div>
          </button>
          <Link to={`/product/${id}`} className="w-12 h-12 bg-white flex justify-center items-center text-gray-800 drop-shadow-xl"><BsEyeFill size={20}/></Link>
        </div>
      </div>
    </div>
    {/* category & tilt  */}
    <div> 
      <div className="text-sm capitalize text-gray-500 mb-1">{category}</div>
      <Link to={`/product/${id}`}> 
      <h2 className="font-semibold mb-1">{title}</h2>
      </Link>
      <div className="font-semibold">₦ {price}</div>
    </div>
   </div>
  )
}

export default ProductCard