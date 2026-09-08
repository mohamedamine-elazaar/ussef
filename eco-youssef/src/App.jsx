import { BrowserRouter, Routes, Route } from "react-router-dom"

import Navbar from "./Components/layout/Navebar"
import Footer from "./Components/layout/Footer"

import Home from "./pages/Home/Home"
import Products from "./pages/Products/Products"
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import Cart from "./pages/Cart/Cart"
import Checkout from "./pages/Checkout/Checkout"

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </main>

      <Footer />
    </BrowserRouter>
  )
}

export default App
