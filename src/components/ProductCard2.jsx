import { FaArrowUp   } from "react-icons/fa";
import {CartContext} from '../context/CartContext'
import { useContext } from "react"
function ProductCard2({product}) {
    const {addToCart} = useContext(CartContext)
    //destructure
    const {id,image,category,title,price,description} = product
  return (
<div className="grid grid-cols-3 border-black border-[1px]">
<div className="w-[200px] mx-auto flex justify-center items-center p-2 rounded">
        <img src={image} alt={id}  className="max-h-[160px] group-hover:scale-110 transition duration-300"/>
 </div>
<div className="flex flex-col">
    <div>{title}</div>
    <div className="w-full">{description}</div>
</div>
<div className="flex justify-center items-center">
    <div className="flex flex-col gap-2">
    <div>{price}</div>
    
    </div>
</div>
</div>
  )
}

export default ProductCard2