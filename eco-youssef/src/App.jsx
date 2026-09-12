import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./Components/layout/Navebar";
import Footer from "./Components/layout/Footer";

import Home from "./pages/Home/Home";
import Products from "./pages/Products/Products";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import Cart from "./pages/Cart/Cart";
import Checkout from "./pages/Checkout/Checkout";
import Admin from "./pages/Admin";
import Login from "./pages/Login/Login";
import ProtectedRoute from "./Components/ProductedRoute";

import { CartProvider } from "./Context/CartContext";
import { ProductProvider } from "./Context/ProductContext";

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
              <Route path="/login" element={<Login />} />

              {/* مسار الأدمن المحمي */}
              <Route
                path="/admin"
                element={
                  <ProtectedRoute>
                    <Admin />
                  </ProtectedRoute>
                }
              />
            </Routes>
          </main>

          <Footer />
        </BrowserRouter>
      </CartProvider>
    </ProductProvider>
  );
}

export default App;