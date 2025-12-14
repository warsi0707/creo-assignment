import { BrowserRouter, Routes, Route } from "react-router"
import { lazy } from "react"

const Navbar = lazy(()=> import("./components/Navbar"))
const Home = lazy(()=> import("./pages/Home"))
const Footer = lazy(()=> import("./components/Footer"))
const ProductDetails = lazy(()=> import("./pages/ProductDetails"))

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
