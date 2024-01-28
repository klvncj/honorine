import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Collections from "./pages/collections"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} /> 
        <Route  path="/collection" element={<Collections />} /> 
      </Routes>
    </BrowserRouter>
    )
}

export default App
