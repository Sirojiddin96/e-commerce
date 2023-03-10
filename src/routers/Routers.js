import React from "react";
import {Routes, Route } from "react-router-dom";
import Profile from "../pages/Profile/Profile";
import Cart from "../pages/Cart/Cart";
import Products from "../pages/Products/Products";
import Home from "../pages/Home/Home";
import Favorites from "../pages/Favorites/Favorites";
import Contact from "../pages/Contact/Contact";
import Search from "../pages/Search/Search";
function Routers(){
    return(
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/profile" element={<Profile/>}/>
            <Route path="/cart" element={<Cart/>}/>
            <Route path="/products" element={<Products/>}/>
            <Route path="/search" element={<Search/>}/>
            <Route path="/favorites" element={<Favorites/>}/>
            <Route path="/contact" element={<Contact/>}/>
        </Routes>
    )
}
export default Routers;