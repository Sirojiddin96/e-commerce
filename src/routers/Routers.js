import React from "react";
import { Routes, Route } from "react-router-dom";
import Profile from "../pages/Profile/Profile";
import Cart from "../pages/Cart/Cart";
import Products from "../pages/Products/Products";
import Home from "../pages/Home/Home";
import Favorites from "../pages/Favorites/Favorites";
import Search from "../pages/Search/Search";
import ProductDescription from "../pages/productDescription/ProductDescription";
import { useContext } from "react";
import { ContextData } from "../context/Context";
import Adminpanel from "../admin-panel/Admin-panel";

function Routers() {
    const {productlist, cart, favorites} = useContext(ContextData);
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/products" element={<Products />} />
            <Route path="/search" element={<Search />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/uhgjobiejfoprfrtyuiyuowiw[wpriirqrr]p[fewfdkfjdlgja" element={<Adminpanel />} />
            {
                productlist.map((item, index) => (
                    <Route
                        key={index}
                        path={"/products/" + item.id}
                        element={<ProductDescription
                            inFavorites={favorites.length ? favorites.filter((elem)=>(elem.id === item.id)).length : false}
                            item={item}
                            inCart={cart.length ? cart.filter((elem) => (elem.id === item.id)).length : false} />}
                    />
                ))
            }
        </Routes>
    )
}
export default Routers;