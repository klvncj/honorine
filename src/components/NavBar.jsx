import { CiUser,CiSearch,CiHeart } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { RiMenu2Fill } from "react-icons/ri";
import React from "react";
import { GrInstagram } from "react-icons/gr";
import { BsWhatsapp } from "react-icons/bs";
import { RiSnapchatFill } from "react-icons/ri";
import {
  Drawer,
  Button,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import '../App.css'
import { Link } from "react-router-dom";
function About(){  
  return(
    <div className="hidden lg:block">
      <ul className="flex justify-around gap-8 mb-2 text-black">
        <li className="expand"><Link to='/'>Home</Link></li>
        <li className="expand"><Link to='/collection'>Collections</Link></li>
        <li className="expand"><Link to='/sales'>Sales</Link></li>
        <li className="expand"><Link to='/contact'>Contact us</Link></li>
        <li className="expand"><Link to='/about'>About us</Link></li>
      </ul>
    </div>
  )
}

function Logo(){
  const textStyle = {
    fontFamily: '"Mrs Saint Delafield", cursive',
    fontWeight: 580,
    fontStyle: 'normal',
    fontSize: '2.6rem',
    color : 'black'
  }; 
  return(
    <div style={textStyle} className="text-black">Wear Honorine</div>
  )
}

function Menu() {
  return (
<div className="flex gap-3 items-center mb-3">
      <CiSearch size={25} className="cursor-pointer hidden md:block" color="black"/>
      <CiUser size={25} className="cursor-pointer" color="black"/>
     
      <DrawerCart/>
      
      <CiHeart size={28} className="cursor-pointer" color="black"/>
    
      <DrawerMenu/>
      {/* <Input className="hidden md:block" label="Search.." icon={<CiSearch size={20} className="cursor-pointer"/>} /> */}
      </div>
  );
}

function DrawerMenu() {
  const [open, setOpen] = React.useState(false);
 
  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);
 
  return (
    <React.Fragment>
      <RiMenu2Fill onClick={openDrawer} size={25} className="cursor-pointer block lg:hidden" color="black"/>
      <Drawer placement="right" open={open} onClose={closeDrawer} className="p-4">
        <div className="mb-6 flex items-center justify-between">
          <Typography variant="h5" color="blue-gray">
           <span className="flex border-b-2 border-black">Menu</span>
          </Typography>
          <IconButton variant="text" color="blue-gray" onClick={closeDrawer}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </IconButton>
        </div>
        <div>
          <ul>
            <li className="flex uppercase font-semibold font-sans p-3 pl-4 justify-end my-3 border-b-2 border-black bg-[#c8aa90]"><Link to='/'>Home</Link></li>
            <li className="flex uppercase font-semibold font-sans p-3 py-5 pl-4 justify-end my-3 bg-[#c8aa90bd]"><Link to='/collection'>Collection</Link></li>
            <li className="flex uppercase font-semibold font-sans p-3 py-4 pl-4 justify-end my-3 bg-[#c8aa90bd]"><Link to='/sales'>Sales</Link></li>
            <li className="flex uppercase font-semibold font-sans p-3 py-4 pl-4 justify-end my-3 bg-[#c8aa90bd]"><Link to='/contact'>Contact us</Link></li>
            <li className="flex uppercase font-semibold font-sans p-3 py-4 pl-4 justify-end my-3 bg-[#c8aa90bd]"><Link to='/about'>About us</Link></li>
          </ul>
<hr className="my-12"/>
          <span className="flex uppercase font-semibold font-sans p-3 pl-4 gap-5 justify-center  bg-[#f4f1f1]">
            <a href="/#" className="bg-purple-400 p-2 rounded-[50%]"><GrInstagram  color="white"/></a>
            <a href="/#" className="bg-teal-400 p-2 rounded-[50%]"><BsWhatsapp  color="white"/></a>
            <a href="/#" className="bg-yellow-400 p-2 rounded-[50%]"><RiSnapchatFill  color="white"/></a>
            </span>

        </div>
      </Drawer>
    </React.Fragment>
  );
}

function DrawerCart() {
  const [open, setOpen] = React.useState(false);
 
  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);
 
  return (
    <React.Fragment>
      <CiShoppingCart onClick={openDrawer} size={28} color="black" className="cursor-pointer" />
      <Drawer placement="right" open={open} onClose={closeDrawer} className="p-4">
        <div className="mb-6 flex items-center justify-between">
          <Typography variant="h5" color="blue-gray">
           Product Cart
          </Typography>
          <IconButton variant="text" color="blue-gray" onClick={closeDrawer}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </IconButton>
        </div>
        <Typography color="gray" className="mb-8 pr-4 font-normal">
          Material Tailwind features multiple React and HTML components, all
          written with Tailwind CSS classes and Material Design guidelines.
        </Typography>
        <div className="flex gap-2">
          <Button size="sm" variant="outlined">
            Documentation
          </Button>
          <Button size="sm">Get Started</Button>
        </div>
      </Drawer>
    </React.Fragment>
  );
}

function NavBar() {
 
  return(
   <>
   {/* Desktop Version Starts  */}
    <nav className="hidden md:flex mx-2 my-0 px-6 bg-[#fdfdfd00] justify-between items-center md:justify-around  sticky top-0">
      <Logo/>
      <About/>
      <Menu/>
    </nav>
    {/* Desktop Version Ends  */}
    {/* Mobile Version of the Nav Bar Starts */}
    <nav className="sm: flex my-0 px-6 bg-[#fcfcfc00] justify-between items-center md:justify-around md:hidden">
      <DrawerMenu/>
      <Logo/>
      <div className="flex gap-3 items-center mb-3">
      <CiSearch size={25} className="cursor-pointer hidden md:block" color="black"/>
      <CiUser size={25} className="cursor-pointer" color="black"/>
      <DrawerCart/>
      <CiHeart size={28} className="cursor-pointer" color="black"/>
      {/* <DrawerMenu/> */}
      </div>
    </nav>
     {/* Mobile Version of the Nav Bar Ends */}
   </>
  )
}

export default NavBar;



