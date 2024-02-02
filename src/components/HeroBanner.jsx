// import React from 'react'
import { Link } from 'react-router-dom'
import '../index.css'


function HeroBanner() {
  return (
    <section className="w-[100%] h-[90dvh] flex items-center bg-cover sm:bg-left" style={{backgroundImage : 'url("https://images.unsplash.com/photo-1508162245510-bf2772371e86?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',objectFit : 'contain', backgroundRepeat : 'no-repeat', backgroundSize : 'cover', backgroundPosition: 'right'}}>
<div className="w-[100%] lg:ml-52 lg:mb-64 lg:mr-56 m-0 mb-96">
<div className="lg:block mt-24 hidden">
      <h2 className="text-5xl font-light tracking-wide text-g1" >
            <span className="font-bold tracking-wide" style={{fontFamily : '"Montserrat",sans-serif'}}><div className=" w-28 h-[2px] bg-black"></div>EXCLUSIVE COLLECTION</span> <br/> We Make you look
         <span className="inline-block border-b-4 border-[#fc4664] px-2 font-bold text-g4 animate__animated animate__flash">different</span>
         <br/> Elevate your style <br/>
      </h2>
     <div className='flex items-center gap-4 ml-6'> <a className="btn mt-4" href="/#">View More</a>   <a href="/collection" className="group mt-4 flex items-center font-semibold text-g1">Shop Now <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 h-6 w-6 transition-transform group-hover:translate-x-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"></path> </svg> </a></div>
    </div>

    {/* Mobile Starts here  */}
    <div className="block lg:hidden mr-4 mb-8">
      <h2 className="text-2xl font-light tracking-wide text-g1 text-right justify-end" >
            <span className="font-bold tracking-tight" style={{fontFamily : '"Montserrat",sans-serif'}}>EXCLUSIVE COLLECTION</span> <br/> We Make you look
         <span className="inline-block border-b-4 border-[#fc4664] px-2 font-bold text-g4 animate__animated animate__flash">different</span>
         <br/> Elevate your style <br/>
      </h2>
     <div className='flex items-center gap-4 justify-end'> <Link className="btn mt-4" to="/collection">View More</Link> </div>
    </div>
</div>
    </section>
  )
}

export default HeroBanner