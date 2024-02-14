import { BsWhatsapp } from "react-icons/bs";
import { GrInstagram } from "react-icons/gr";
import { RiSnapchatFill } from "react-icons/ri";
import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";


function Logo(){
  const textStyle = {
    fontFamily: '"Mrs Saint Delafield", cursive',
    fontWeight: 580,
    fontStyle: 'normal',
    fontSize: '2.6rem',
    color : 'black'
  }; 
  return(
    <div style={textStyle} className="text-black mx-3">Honorine</div>
  )
}
 
const currentYear = new Date().getFullYear();
 
function Footer() {
    const monoFontStyle = {
        fontFamily: "Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace",
      }; 
  return (
    <footer className="bg-white  dark:bg-gray-900">
    <div className="container p-6 mx-auto">
        <div className="lg:flex">
            <div className="w-full -mx-6 lg:w-2/5">
                <div className="px-6">
                    <a href="#">
                       <Logo/>
                    </a>

                    <p className="max-w-sm mt-2 text-black dark:text-gray-400">Making the world a better place through creating elegant designs</p>
                    <div className="flex -mx-2">
                    <div className="flex uppercase font-semibold font-sans p-2 gap-5 justify-center">
            <a href="https://www.instagram.com/wear_honorine/" target="_blank" rel="noreferrer" className="bg-black p-2 rounded-[50%]"><GrInstagram  color="white"/></a>
            <a href="wa.me/message/5NTUT4D4JCSWM1" target="_blank" rel="noreferrer" className="bg-black p-2 rounded-[50%]"><BsWhatsapp  color="white"/></a>
            <a href="/#" className="bg-black p-2 rounded-[50%]"><RiSnapchatFill  color="white"/></a>
            </div>
                    </div>
                </div>
            </div>

            <div className="mt-6 lg:mt-0 lg:flex-1">
                <div className="grid grid-cols-2 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 font-serif uppercase" style={monoFontStyle}>
                    <div>
                        <h3 className="text-gray-700 uppercase dark:text-white">About</h3>
                        <Link to="/about" className="block mt-2 text-md text-black dark:text-gray-400 hover:underline leading-tight">The Brand</Link>
                        {/* <Link to="/about" className="block mt-2 text-md text-black dark:text-gray-400 hover:underline">community</Link> */}
                        <Link to="/about" className="block mt-2 text-md text-black dark:text-gray-400 hover:underline">Careers</Link>
                    </div>

                    <div>
                        <h3 className="text-gray-700 uppercase dark:text-white">Info</h3>
                        <Link to="/t&c" className="block mt-2 text-md text-black dark:text-gray-400 hover:underline">Terms & Conditions</Link>
                        <Link to="/t&C" className="block mt-2 text-md text-black dark:text-gray-400 hover:underline">Privacy Policy</Link>
                        <Link to="/t&c" className="block mt-2 text-md text-black dark:text-gray-400 hover:underline">Shipping and returns</Link>
                    </div>

                    <div>
                        <h3 className="text-gray-700 uppercase dark:text-white">Products</h3>
                        <Link to="/collection" className="block mt-2 text-md text-black dark:text-gray-400 hover:underline">Collection</Link>
                        <Link to="/sales" className="block mt-2 text-md text-black dark:text-gray-400 hover:underline">Sales</Link>
                        {/* <Link to="/collection" className="block mt-2 text-md text-black dark:text-gray-400 hover:underline">New In</Link> */}
                    </div>

                    <div>
                        <h3 className="text-gray-700 uppercase dark:text-white">Contact</h3>
                        <a href="tel:0903817462" className="block mt-2 text-md text-black dark:text-gray-400 hover:underline">(+234) 903 817 4627</a>
                        <a href="mailto:info@wearhonrine.com" className="block mt-2 text-md text-black dark:text-gray-400 hover:underline">info@wearhonorine.com</a>
                    </div>
                </div>
            </div>
        </div>

        <hr className="h-px my-6 bg-gray-200 border-none dark:bg-gray-700"/>

        <div>
            <p className="text-center text-gray-500 dark:text-gray-400">© Honorine {currentYear} - All rights reserved</p>
        </div>
    </div>
</footer>
);
}

export default Footer;