import './App.css'
import Banner from './components/Banner';
// import Footer from './components/Footer'
import NavBar from './components/NavBar'
import ProductCard from './components/ProductCard';
// import { DefaultSpeedDial } from './components/SpeedDial'

function App() {
  return (
    <>
<NavBar/>
<Banner/>
<main>
  <div className='flex flex-col '>
  <div className='flex justify-center items-center my-4 '>Latest Collection</div>
 <div className='flex justify-center items-center'>
 <div className='grid justify-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-2 gap-12'>
    <ProductCard/>
    <ProductCard/>
    <ProductCard/>
    <ProductCard/>
    <ProductCard/>
    <ProductCard/>
   
  </div>
 </div>

  </div>
</main>
{/* News Later */}
{/* Footer */}
{/* <Footer/> */}
{/* <DefaultSpeedDial/> */}
    </>
  )
}

export default App
