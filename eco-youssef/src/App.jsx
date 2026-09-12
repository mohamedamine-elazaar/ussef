import { BrowserRouter, Routes, Route } from "react-router-dom"

import Navbar from "./Components/layout/Navebar"
import Footer from "./Components/layout/Footer"

import Home from "./pages/Home/Home"
import Products from "./pages/Products/Products"
import ProductDetails from "./pages/ProductDetails/ProductDetails"
import Cart from "./pages/Cart/Cart"
import Checkout from "./pages/Checkout/Checkout"
import Admin from "./pages/Admin"

import { CartProvider } from "./Context/CartContext"
import { ProductProvider } from "./Context/ProductContext"

function App() {
  return (
    <ProductProvider>
      <CartProvider>
        <BrowserRouter>
          <Navbar />

          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<Products />} />
              <Route path="/products/:id" element={<ProductDetails />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/admin" element={<Admin />} />
            </Routes>
          </main>

          <Footer />
        </BrowserRouter>
      </CartProvider>
    </ProductProvider>
  )
}

export default App