import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Collections from "./pages/Collections"
import Product from "./pages/Product"
import Sidebar from "./components/Sidebar"

function App() {

  return (
    <BrowserRouter>
        <Sidebar/>
      <Routes>
        <Route exact path="/" element={<Home />} /> 
        <Route exact path="/product/:id" element={<Product/>} /> 
        <Route  path="/collection" element={<Collections />} /> 
      </Routes>
    </BrowserRouter>
    )
}

export default App
