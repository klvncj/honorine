import { BrowserRouter, Route, Routes , } from "react-router-dom"
import Home from "./pages/Home"
import Collections from "./pages/Collections"
import Product from "./pages/Product"
import Sidebar from "./components/Sidebar"
import Sales from "./pages/Sales"
import About from "./pages/About"
import PageNotFound from "./pages/PageNotFound"
import Signup from "./pages/Signup"

function App() {

  return (
    <BrowserRouter>
        <Sidebar/>
      <Routes>
        <Route exact path="/" element={<Home />} /> 
        <Route exact path="/product/:id" element={<Product/>} /> 
        <Route exact path="/collection" element={<Collections />} /> 
        <Route exact path="/sales" element={<Sales />} /> 
        <Route exact path="/about" element={<About />} /> 
        <Route exact path="/signup" element={<Signup />} /> 
        <Route  path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
    )
}

export default App
