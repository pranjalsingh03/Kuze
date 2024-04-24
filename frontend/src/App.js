import React from 'react'
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/HomeM';
import CategoryPage from './Components/Category/CategoryPage';
import Footer from './Components/Footer/Footer';
import Blog from './Components/Blog/Blog';
import NewArrivals from './Components/Arrivals/NewArrivals';
import Cart from './Components/AddtoCart/Cart';
import HomeProduct from './Components/HomeProduct/HomeProduct';
import "./App.css";
import Login from './Components/Auth/Login';
import Signup from './Components/Auth/Signup';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

function App() {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
}

function AppRoutes() {
  const location = useLocation();

  const hideHeaderFooterPaths = ['/login', '/signup'];

  const shouldHideHeaderFooter = hideHeaderFooterPaths.includes(location.pathname);

  return (
    <>
      {!shouldHideHeaderFooter && <Navbar />}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} exact />
        <Route path="/signup" element={<Signup />} exact />
        <Route path="/home" element={<Home />} exact />
        <Route path="/blogs" element={<Blog />} exact />
        {/* <Route path="/contactus" element={<Home />} exact /> */}
        <Route path="/FAQ" element={<Home />} exact />
        <Route path="/newarrivals" element={<NewArrivals />} exact />
        <Route path="/shop" element={<Home />} exact />
        <Route path="/aboutus" element={<Home />} exact />
        <Route path="/category" element={<CategoryPage />} />
        <Route path="/category/:type" element={<CategoryPage />} />
        <Route path="/product/:productId" element={<HomeProduct />} />
      </Routes>
      {!shouldHideHeaderFooter && <Footer email="kozaleather@help.com"/>}
    </>
  );
}

export default App;