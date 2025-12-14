import { BrowserRouter, Routes, Route } from "react-router"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Footer from "./components/Footer"
import ProductDetails from "./pages/ProductDetails"

function App() {

  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/product" element={<ProductDetails/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
