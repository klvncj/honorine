import { CiUser } from "react-icons/ci";
import { IoBagHandleOutline } from "react-icons/io5";
import { RiMenu2Fill } from "react-icons/ri";
import '../App.css'
function About(){  
  return(
    <div className="hidden lg:block">
      <ul className="flex justify-around gap-8 my-5">
        <li className="expand">Home</li>
        <li className="expand">Sale</li>
        <li className="expand">New</li>
        <li className="expand">Contact us</li>
        <li className="expand">New collection</li>
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
      <CiUser size={28} className="cursor-pointer"/>
      <IoBagHandleOutline size={28} className="cursor-pointer" />
      <RiMenu2Fill size={28} className="cursor-pointer block lg:hidden"/>
      </div>
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



