import "./Header.css";
import { NavLink, Routes, Route } from "react-router-dom";
import Accordion from "../Components/Accordion/Accordion";
import { useContext, useState } from "react";
import { ContextData } from "../Context/Context";
import Profile from "../Pages/Profile/Profile";
import Cart from "../Pages/Cart/Cart";
import Products from "../Pages/Products/Products";
import Home from "../Pages/Home/Home";
import Favorites from "../Pages/Favorites/Favorites";
import Contact from "../Pages/Contact/Contact";
import Search from "../Pages/Search/Search";
import ProfilePicture from "../utils/icons/ProfilePicture.svg";
import CartIcon from "../utils/icons/Cart.svg";
import Ellipse from "../utils/icons/Ellipse.svg";
import SearchIcon from "../utils/icons/SearchIcon.svg";
import Logo from "../utils/images/Logo.svg";

function Header(){
    const {checkout, Clength, open, toggle} = useContext(ContextData);
   
    const [accordions] = useState(
      [
        {title: "EN", content: ["EN", "RU"]},
        {title: "USD", content: ["USD", "RUB"]}
      ]
    )
  
    
    return(
        <header className="Header"> 
            <div className="profile">
                <div className="profileLeft">
                    {
                        accordions.map((item, index)=>(
                            <div className="AccordionHolder" key={index} onClick={()=>toggle(index)}>
                                <Accordion title={item.title} open={open} currentIndex={index} contents={item.content}/>
                            </div>
                        ))
                    }
                </div>
                <div className="profileRight">
                    <NavLink className="NavLink" to="/profile">
                     <div className="ProfileInformation">
                        <figure>
                            <img src={ProfilePicture} alt="ProfilePicture"/>
                        </figure>
                        <p>My profile</p>
                     </div>
                    </NavLink>
                    <NavLink className="NavLink" to="/cart">
                        <div className="Cart">
                            <figure className="CartImage">
                                <img src={CartIcon} alt="cart" />
                            </figure>
                            <div className={Clength ? "CartNumber" : "CartNumber None"}>
                                <figure>
                                    <img src={Ellipse} alt="ellipse" />
                                </figure>
                                <p>{Clength}</p>
                            </div>
                        </div>
                    </NavLink>
                    <NavLink className="NavLink" to="/favorites">
                        <div className="Favorites">
                            <p>Favorites</p>
                        </div>
                    </NavLink>
                    <div className="Total">
                        <p>${checkout()>1000 ? Math.floor(checkout()/1000) + "k" :  checkout()}</p>
                    </div>
                    <NavLink className="NavLink" to="/search">
                    <div className="Search">
                        <figure>
                            <img src={SearchIcon} alt="SearchIcon" />
                        </figure>
                    </div>
                    </NavLink>

                </div>
            </div>
            <div className="links">
                    <figure className="logo">
                        <img src={Logo} alt="Logo"/>
                    </figure>
                    <ul className="pages">
                        <li>
                            <NavLink className="NavLink list first" to="/">HOME</NavLink>
                        </li>
                        <li>
                            <NavLink className="NavLink list" to="/products">PRODUCTS</NavLink>
                        </li>
                        <li>
                            <NavLink className="NavLink list" to="/contact">CONTACT</NavLink>
                        </li>
                    </ul>
                    
                
            </div>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/profile" element={<Profile/>}/>
                <Route path="/cart" element={<Cart/>}/>
                <Route path="/products" element={<Products/>}/>
                <Route path="/search" element={<Search/>}/>
                <Route path="/favorites" element={<Favorites/>}/>
                <Route path="/contact" element={<Contact/>}/>
            </Routes>
        </header>
    )
}

export default Header;