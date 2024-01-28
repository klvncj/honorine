import React from 'react';
import '../App.css'
import Banner from '../components/Banner';
import Main1 from '../components/Main1';
import Main2 from '../components/Main2';
// import Footer from './components/Footer'
import NavBar from '../components/NavBar'
import { Input, Button } from "@material-tailwind/react";
import Footer from '../components/Footer';

function Home() {
  const [email, setEmail] = React.useState("");
  const onChange = ({ target }) => setEmail(target.value);

  const textStyle = {
    fontFamily: '"Roboto",sans-serif;',
    fontStyle: 'normal',
    fontSize: '2.4rem',
  }; 
  return (
    <>

    {/* Navbar  */}
<NavBar/>

{/* Banner  */}
<Banner/>

{/* Second Product Card display */}
<Main2/>

{/* First Product Card display */}
<Main1/>



{/* News Later */}
<section className='flex justify-center gap-8 lg:gap-60 flex-wrap'>
  <div className='flex justify-center items-center'>
  <h2 className='expand flex text-4xl font-bold' style={textStyle}>Join Our Newsletter</h2>  
  </div>
  <div className="relative flex w-full max-w-[24rem]">
      <Input
        type="email"
        label="Email Address"
        value={email}
        onChange={onChange}
        className="pr-20"
        containerProps={{
          className: "min-w-0",
        }}
      />
      <Button
        size="sm"
        color={email ? "gray" : "blue-gray"}
        disabled={!email}
        className="!absolute right-1 top-1 rounded"
      >
        Invite
      </Button>
    </div>
</section>

{/* Footer */}
<Footer/>
{/* <DefaultSpeedDial/> */}
    </>
  )
}

export default Home
