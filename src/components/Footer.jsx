import { Typography } from "@material-tailwind/react";
import { BsWhatsapp } from "react-icons/bs";
import { FaLink } from "react-icons/fa6";
import { GrInstagram } from "react-icons/gr";
import { RiSnapchatFill } from "react-icons/ri";
import { Link } from "react-router-dom";


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
{/* <footer className="w-full bg-white pb-0">
      <div className="flex flex-row flex-wrap items-center justify-center gap-y-2 gap-x-12 bg-white text-center md:justify-between px-8">
        <Logo/>
        <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
          <li>
            <Link
              as="a"
              href="#"
              color="blue-gray"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              About Us
            </Link>
          </li>
          <li>
            <Typography
              as="a"
              href="#"
              color="blue-gray"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              License
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              href="#"
              color="blue-gray"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              Contribute
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              href="#"
              color="blue-gray"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              Contact Us
            </Typography>
          </li>
        </ul>
      </div>
      <div className="bg-black p-4">
<div className="">
<p className="text-white text-center">Copyright &copy;Wear Honorine Store {currentYear}.<br className="block md:hidden"/> All rights reserved <br/>Designed by <a href="https://www.instagram.com/klvncj/" className="text-white underline underline-offset-1 cursor-pointer">klvncj</a></p>
</div>
      </div>
    </footer> */}
 
function Footer() {
  return (
    <footer className="bg-white  dark:bg-gray-900">
    <div className="container p-6 mx-auto">
        <div className="lg:flex">
            <div className="w-full -mx-6 lg:w-2/5">
                <div className="px-6">
                    <a href="#">
                        <img className="w-auto h-7" src="https://merakiui.com/images/full-logo.svg" alt=""/>
                    </a>

                    <p className="max-w-sm mt-2 text-black dark:text-gray-400">Making the world a better place through creating elegant designs</p>
                    <div className="flex -mx-2">
                    <div className="flex uppercase font-semibold font-sans p-2 gap-5 justify-center">
            <a href="https://www.instagram.com/wear_honorine/" className="bg-black p-2 rounded-[50%]"><GrInstagram  color="white"/></a>
            <a href="/#" className="bg-black p-2 rounded-[50%]"><BsWhatsapp  color="white"/></a>
            <a href="/#" className="bg-black p-2 rounded-[50%]"><RiSnapchatFill  color="white"/></a>
            </div>
                    </div>
                </div>
            </div>

            <div className="mt-6 lg:mt-0 lg:flex-1">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    <div>
                        <h3 className="text-gray-700 uppercase dark:text-white">About</h3>
                        <a href="#" className="block mt-2 text-sm text-black dark:text-gray-400 hover:underline">Company</a>
                        <a href="#" className="block mt-2 text-sm text-black dark:text-gray-400 hover:underline">community</a>
                        <a href="#" className="block mt-2 text-sm text-black dark:text-gray-400 hover:underline">Careers</a>
                    </div>

                    <div>
                        <h3 className="text-gray-700 uppercase dark:text-white">Blog</h3>
                        <a href="#" className="block mt-2 text-sm text-black dark:text-gray-400 hover:underline">Tech</a>
                        <a href="#" className="block mt-2 text-sm text-black dark:text-gray-400 hover:underline">Music</a>
                        <a href="#" className="block mt-2 text-sm text-black dark:text-gray-400 hover:underline">Videos</a>
                    </div>

                    <div>
                        <h3 className="text-gray-700 uppercase dark:text-white">Products</h3>
                        <a href="#" className="block mt-2 text-sm text-black dark:text-gray-400 hover:underline">Mega cloud</a>
                        <a href="#" className="block mt-2 text-sm text-black dark:text-gray-400 hover:underline">Aperion UI</a>
                        <a href="#" className="block mt-2 text-sm text-black dark:text-gray-400 hover:underline">Meraki UI</a>
                    </div>

                    <div>
                        <h3 className="text-gray-700 uppercase dark:text-white">Contact</h3>
                        <span className="block mt-2 text-sm text-black dark:text-gray-400 hover:underline">+1 526 654 8965</span>
                        <span className="block mt-2 text-sm text-black dark:text-gray-400 hover:underline">example@email.com</span>
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