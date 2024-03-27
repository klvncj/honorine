// import React from 'react'
import NavBar from "../components/NavBar"
import Footer from "../components/Footer"

function About() {
  return (
    <>
    <NavBar/>
    <main className="h-[80%] bg-[#f2f2f2a5]">
      <div className="flex-col lg:flex-row flex lg:justify-around lg:px-48">
        <div className="my-10 flex justify-center">
          <div>
          <h1 className="font-bold text-3xl my-7" style={{fontFamily : '"Montserrat",sans-serif'}}>About Us</h1>
          <p className="w-[400px] lg:w-[500px] text-left flex-wrap leading-relaxed p-3" style={{fontFamily : '"Montserrat",sans-serif'}}>
          At Wear Honorine, we are more than just a clothing brand – we are a symbol of style, elegance, and individuality. Established in 2018, our journey began with a vision to elevate style across borders and redefine fashion norms.<br/>
          We believe in the power of clothing to express one's identity and personality. Our collections are meticulously curated to embody sophistication, creativity, and a touch of uniqueness. Each piece is designed to inspire confidence and empower individuals to embrace their distinct style.<br/>
          When you wear Honorine, you are not just wearing a garment; you are embracing a statement of individuality. Our pieces are crafted with precision and passion, reflecting our commitment to quality and craftsmanship.<br/>
           Join us on this sartorial journey as we invite you to wear Honorine, wear uniqueness, and make a statement that transcends boundaries.<br/>
          </p>
          <span style={{fontFamily : '"Montserrat",sans-serif'}} className="mt-10 text-lg font-semibold p-3 underline underline-offset-4">Elevate your style. Embrace your uniqueness. Wear Honorine.</span><br/>
          </div>
        </div>
        <div className="block">
          <img src="https://images.unsplash.com/photo-1488161628813-04466f872be2?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Dera"  className="my-10 md:hidden lg:block w-[100%] lg:w-[500px]"/>
        </div>
      </div>
      
    </main>
    <Footer/>
    </>
  )
}

export default About