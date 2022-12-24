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
        </header>
    )
}

export default Header;