import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Home from "./components/Home.jsx";
import Cart from "./components/Cart.jsx";
import NotFound from "./components/NotFound.jsx";
import Register from "./components/auth/Register.jsx";
import Login from "./components/auth/Login.jsx";
import CheckoutSuccess from "./components/CheckoutSuccess.jsx";
import Dashboard from "./components/admin/Dashboard.jsx";
import Products from "./components/admin/Products.jsx";
import Summary from "./components/admin/Summary.jsx";
import CreateProduct from "./components/admin/CreateProduct.jsx";
import ProductsList from "./components/admin/list/ProductsList.jsx";
import Users from "./components/admin/Users.jsx";
import Orders from "./components/admin/Orders.jsx";
import Product from "./components/Details/Product.jsx";
import Order from "./components/Details/Order.jsx";
import UserProfile from "./components/Details/UserProfile.jsx";
import { ToastContainer } from "react-toastify";

import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

function App() {
  return (
    <div>
      <BrowserRouter>
        <ToastContainer />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout-success" element={<CheckoutSuccess />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/order/:id" element={<Order />} />
          <Route path="/user/:id" element={<UserProfile />} />
          <Route path="/admin" element={<Dashboard />}>
            <Route path="products" element={<Products />}>
              <Route index element={<ProductsList />} />
              <Route path="create-product" element={<CreateProduct />} />
            </Route>
            <Route path="summary" element={<Summary />} />
            <Route path="users" element={<Users />} />
            <Route path="orders" element={<Orders />} />
          </Route>
          {/* Define a catch-all route for any unknown paths */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
