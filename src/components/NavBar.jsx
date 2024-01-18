import { CiUser,CiSearch,CiHeart } from "react-icons/ci";
import { IoBagHandleOutline } from "react-icons/io5";
import { RiMenu2Fill } from "react-icons/ri";
import { Tooltip } from "@material-tailwind/react";
import React from "react";
import {
  Drawer,
  Button,
  Typography,
  Input,
  Textarea,
  IconButton,
} from "@material-tailwind/react";
import '../App.css'
function About(){  
  return(
    <div className="hidden lg:block">
      <ul className="flex justify-around gap-8 my-5">
        <li className="expand">Home</li>
        <li className="expand">Sale</li>
        <li className="expand">New</li>
        <li className="expand">New collection</li>
        <li className="expand">Contact us</li>
        <li className="expand">About us</li>
      </ul>
    </div>
  )
}

function Logo(){
  const textStyle = {
    fontFamily: '"Mrs Saint Delafield", cursive',
    fontWeight: 550,
    fontStyle: 'normal',
    fontSize: '2.8rem',
  }; 
  return(
    <div style={textStyle}>Honorine</div>
  )
}

function Menu() {
  return (
<div className="flex gap-3 items-center">
<Tooltip content="Wish list">
      <CiUser size={28} className="cursor-pointer"/>
      </Tooltip>
      <DrawerCart/>
      <Tooltip content="Wish list">
      <CiHeart size={28} className="cursor-pointer" />
    </Tooltip>
      <DrawerMenu/>
      <CiSearch size={20} className="cursor-pointer hidden md:block"/>
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
      <RiMenu2Fill onClick={openDrawer} size={28} className="cursor-pointer block lg:hidden"/>
      <Drawer placement="right" open={open} onClose={closeDrawer} className="p-4">
        <div className="mb-6 flex items-center justify-between">
          <Typography variant="h5" color="blue-gray">
           Honorine Menu
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
        <form className="flex flex-col gap-6 p-4 pt-9">
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Send us a Message
          </Typography>
          <Input type="email" label="Email" />
          <Input label="Subject" />
          <Textarea rows={6} label="Message" />
          <Button>Send Message</Button>
        </form>

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
      <IoBagHandleOutline onClick={openDrawer} size={28} className="cursor-pointer" />
      <Drawer placement="right" open={open} onClose={closeDrawer} className="p-4">
        <div className="mb-6 flex items-center justify-between">
          <Typography variant="h5" color="blue-gray">
           Honorine Cart
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
    <nav className="flex justify-between mx-2 my-0 px-0">
      <Logo/>
      <About/>
      <Menu/>
    </nav>
  )
}

export default NavBar;



