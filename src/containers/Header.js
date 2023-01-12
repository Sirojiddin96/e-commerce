import "./Header.css";
import { NavLink } from "react-router-dom";
import Accordion from "../components/Accordion/Accordion";
import { useContext, useState } from "react";
import { ContextData } from "../context/Context";
import ProfilePicture from "../assets/icons/ProfilePicture.svg";
import CartIcon from "../assets/icons/Cart.svg";
import Ellipse from "../assets/icons/Ellipse.svg";
import SearchIcon from "../assets/icons/SearchIcon.svg";
import Logo from "../assets/images/Logo.svg";
import MenuIcon from "../assets/icons/MenuIcon.png";
import LikeGray from "../assets/icons/LikeGray.svg";
function Header(){
    const {menu, setMenu, favorites, checkout, Clength, open, toggle} = useContext(ContextData);
    const [accordions] = useState(
      [
        {title: "EN", content: ["EN", "RU"]},
        {title: "USD", content: ["USD", "RUB"]}
      ]
    )
    return(
        <header className="Header"> 
        <div onClick={()=>setMenu(false)} className={menu ? "SideBarBack Show" : "SideBarBack"}>
        </div>
        <div className={menu ? "SideBar Show" : "SideBar"}>
            <div className="ButtonBackDiv">
                <button onClick={()=>setMenu(false)}>X</button>
            </div>
            <div>
                <NavLink onClick={()=>setMenu(false)} className="SideBarNavLink" to="/profile">
                    <div className="SideBarProfileInformation">
                        <div>
                            <figure>
                                <img src={ProfilePicture} alt="ProfilePicture"/>
                            </figure>
                        </div>
                        <p>My profile</p>
                    </div>
                </NavLink>
            </div>
            <div>
                <NavLink onClick={()=>setMenu(false)} className="SideBarNavLink" to="/cart">
                    <div className="SideBarCart">
                        <div> 
                            <figure>
                                <img src={CartIcon} alt="cart" />
                            </figure>
                        </div>
                        <p>Items in cart: <b>{Clength}</b></p>
                    </div>
                </NavLink>
            </div>
            <div>
                <NavLink onClick={()=>setMenu(false)} className="SideBarNavLink" to="/favorites">
                    <div className="SideBarFavorites">
                        <div> 
                            <figure>
                                <img src={LikeGray} alt="LikeGray" />
                            </figure>
                        </div>
                        <p>Items in favorites: <b>{favorites.length}</b></p>
                    </div>
                </NavLink>
            </div>
            <div>
                <NavLink onClick={()=>setMenu(false)} className="SideBarNavLink" to="/search">
                <div className="SideBarSearch">
                        <div> 
                            <figure>
                                <img src={SearchIcon} alt="SearchIcon" />
                            </figure>
                        </div>
                        <p>Search</p>
                    </div>
                </NavLink>
            </div>
        </div>
            <div className="profile">
                <div onClick={()=>setMenu(true)} className="MenuIcon">
                    <figure>
                        <img src={MenuIcon} alt="MenuIcon" />
                    </figure>
                </div>
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
                        <div className="ProfileInformationIcon">
                            <figure>
                                <img src={ProfilePicture} alt="ProfilePicture"/>
                            </figure>
                            <p>My profile</p>
                        </div>
                     </div>
                    </NavLink>
                    <NavLink className="NavLink" to="/cart">
                        <div className="Cart">
                            <div className="CartImage"> 
                                <figure>
                                    <img src={CartIcon} alt="cart" />
                                </figure>
                            </div>
                            <div className={Clength ? "CartNumber" : "CartNumber None"}>
                                <div className="CartNumberEllipse">
                                    <figure>
                                        <img src={Ellipse} alt="ellipse" />
                                    </figure>
                                </div>
                                <p>{Clength}</p>
                            </div>
                        </div>
                    </NavLink>
                    <NavLink className="NavLink" to="/favorites">
                        <div className="Favorites">
                            <p>Favorites</p>
                            <div className={favorites.length ? "FavoriteNumber" : "FavoriteNumber None"}>
                                <div className="FavoriteNumberEllipse">
                                    <figure>
                                        <img src={Ellipse} alt="ellipse" />
                                    </figure>
                                </div>
                                <p>{favorites.length}</p>
                            </div>
                        </div>
                    </NavLink>
                    <div className="Total">
                        <p>${checkout()>1000 ? Math.floor(checkout()/1000) + "k" :  checkout()}</p>
                    </div>
                    <NavLink className="NavLink" to="/search">
                    <div className="Search">
                        <div className="SearchIcon">
                            <figure>
                                <img src={SearchIcon} alt="SearchIcon" />
                            </figure>
                        </div>
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
                    </ul>
            </div>
        </header>
    )
}

export default Header;