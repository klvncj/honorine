import { Carousel } from "@material-tailwind/react";
function CarouselDefault() {
    return (
      <Carousel className="rounded-xl">
        <Item/>
      </Carousel>
    );
  }
  
function Banner() {
  return (
    <CarouselDefault/>
  )
}

function Item(){
  const textStyle = {
    fontFamily: '"Mrs Saint Delafield", cursive',
    fontWeight: 580,
    fontStyle: 'normal',
    fontSize: '2.4rem',
  }; 
    return(
      <div className="bg-[#f5ece6] relative flex items-center  justify-center overflow-hidden z-50 h-[70vh]">
     
    <div className="relative mx-auto h-full px-4  pb-20   md:pb-10 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8">
        <div className="flex flex-col items-center justify-between lg:flex-row py-16">
            <div className=" relative ">
                <div className=" absolute top-0 -left-48 z-0  opacity-50">
                    <img src="https://placehold.co/200x100" className="w-36 z-0  h-full    object-fill fill-y text-y   "/>
                </div>
                <div className="lg:max-w-xl lg:pr-5 relative z-40">
                    <p className="flex text-sm  text-g1 " style={textStyle}>
                      Wear Honorine
                    </p>
                    <h2 className="mb-6 max-w-lg text-5xl font-light leading-snug tracking-tight text-g1 sm:text-7xl sm:leading-snug" >
                        We make you look
                        <span className="my-1 inline-block border-b-8 border-g4 px-4 font-bold text-g4 animate__animated animate__flash">different</span>
                    </h2>
                    <p className="text-base text-gray-700">Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                        accusantium doloremque it.</p>
                    <div className="mt-10 flex flex-col items-center md:flex-row">
                        <a href="/" className="mb-3 inline-flex h-12 w-full items-center justify-center bg-[#8c695c] px-6 font-medium tracking-wide text-white shadow-md transition hover:bg-[#75584d] focus:outline-none md:mr-4 md:mb-0 md:w-auto  hover:-translate-y-1  hover:-translate-x-1 duration-500">
                            View More</a>
                        <a href="/" aria-label="" className="group inline-flex items-center font-semibold text-g1">Shop Now
                            <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 h-6 w-6 transition-transform group-hover:translate-x-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                            </svg>
                        </a>
                    </div>
                </div>
                
               
            </div>
            <div className="relative hidden lg:ml-32 lg:block lg:w-1/2">
                <svg xmlns="http://www.w3.org/2000/svg" className="my-6 mx-auto h-10 w-10 animate-bounce rounded-full bg-white p-2 lg:hidden" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16 17l-4 4m0 0l-4-4m4 4V3"></path>
                </svg>
                <div className="abg-orange-400 mx-auto w-fit overflow-hidden rounded-[6rem] rounded-br-none rounded-tl-none">
                     <img src="https://placehold.co/400x400"/>
                </div>
            </div>
        </div>
    </div> 
    <div className="hidden text-9xl varien absolute top-6 left-1/4 text-g/10 z-40">
        About Us
    </div>
    <div className=" absolute -bottom-24 left-10 z-0  opacity-10 "> 
        <svg width="800px" height="800px" viewBox="0 0 24 24" className="w-96 z-0  h-full    object-fill fill-gray-300 text-gray-300" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M12 6C12 5.44772 11.5523 5 11 5C10.4477 5 10 5.44772 10 6V16C10 16.5523 10.4477 17 11 17C11.5523 17 12 16.5523 12 16V6ZM9 9C9 8.44772 8.55228 8 8 8C7.44772 8 7 8.44772 7 9V16C7 16.5523 7.44772 17 8 17C8.55228 17 9 16.5523 9 16V9ZM15 9C15 8.44772 14.5523 8 14 8C13.4477 8 13 8.44772 13 9V16C13 16.5523 13.4477 17 14 17C14.5523 17 15 16.5523 15 16V9ZM18 13C18 12.4477 17.5523 12 17 12C16.4477 12 16 12.4477 16 13V16C16 16.5523 16.4477 17 17 17C17.5523 17 18 16.5523 18 16V13ZM6 15C6 14.4477 5.55228 14 5 14C4.44772 14 4 14.4477 4 15V16C4 16.5523 4.44772 17 5 17C5.55228 17 6 16.5523 6 16V15ZM21 15C21 14.4477 20.5523 14 20 14C19.4477 14 19 14.4477 19 15V16C19 16.5523 19.4477 17 20 17C20.5523 17 21 16.5523 21 16V15ZM4 18C3.44772 18 3 18.4477 3 19C3 19.5523 3.44772 20 4 20H21C21.5523 20 22 19.5523 22 19C22 18.4477 21.5523 18 21 18H4Z"></path>
        </svg>
    </div> 
    <div className=" absolute top-10 left-3/4 z-0  opacity-10 "> 
         
        <svg fill="#000000" width="800px" height="800px" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg" className="w-96 z-0  h-full    object-fill fill-blue-300 text-blue-300">
            <path d="M230.704 99.2a4.004 4.004 0 0 0-4.01-3.995h-50.981c-2.215 0-5.212-1.327-6.693-2.964L155.289 77.08c-17.795-19.65-41.628-16.256-53.234 7.58l-38.736 79.557C60.42 170.172 52.705 175 46.077 175H29.359a3.996 3.996 0 0 0-3.994 3.995v10.01A4 4 0 0 0 29.372 193h24.7c8.835 0 19.208-6.395 23.174-14.293l43.645-86.914c3.964-7.894 12.233-9.228 18.473-2.974l17.184 17.219c3.123 3.13 9.242 5.667 13.647 5.667H226.7a4.005 4.005 0 0 0 4.004-3.994v-8.512z" fillRule="evenodd"></path>
        </svg>
    </div> 
 
</div>
    )
}
export default Banner