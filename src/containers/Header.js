import './Header.css';
import { NavLink } from 'react-router-dom';
import Accordion from '../components/Accordion/Accordion';
import { useContext, useState } from 'react';
import { ContextData } from '../context/Context';
import ProfilePicture from '../assets/icons/ProfilePicture.svg';
import CartIcon from '../assets/icons/Cart.svg';
import Ellipse from '../assets/icons/Ellipse.svg';
import SearchIcon from '../assets/icons/SearchIcon.svg';
import Logo from '../assets/images/Logo.svg';
import MenuIcon from '../assets/icons/MenuIcon.png';
import CartBlue from "../assets/icons/CartBlue.svg";
import SearchIconBlue from "../assets/icons/SearchIconBlue.svg";
import FavoriteEllipse from "../assets/icons/FavoriteEllipse.svg";
import FavoriteEllipseBlue from "../assets/icons/FavoriteEllipseBlue.svg";
import EllipseBlue from "../assets/icons/EllipseBlue.svg";
import LikeGray from "../assets/icons/LikeGray.svg";
import HeartBlue from "../assets/icons/HeartBlue.svg";
import close from "../assets/icons/close.png";
function Header() {
    const { menu, setMenu, favorites, checkout, Clength, open, toggle } =
        useContext(ContextData);
    const [accordions] = useState([
        { title: 'EN', content: ['EN', 'RU'] },
        { title: 'USD', content: ['USD', 'RUB'] },
    ]);
    return (
        <header className="Header">
            <div
                onClick={() => setMenu(false)}
                className={menu ? 'SideBarBack Show' : 'SideBarBack'}>
            </div>
            <div className={menu ? 'SideBar Show' : 'SideBar'}>
                <div className="ButtonBackDiv">
                    <figure onClick={() => setMenu(false)}>
                        <img src={close} alt="close" />
                    </figure>
                </div>
                <div className='SidebarContent'>
                    <NavLink onClick={() => setMenu(false)} className="SideNavLink" to="/profile">
                        <div className="SideProfileInformation">
                            <div className="SideProfileInformationIcon">
                                <figure>
                                    <img
                                        src={ProfilePicture}
                                        alt="ProfilePicture"
                                    />
                                </figure>
                            </div>
                            <div className='ProfileName'><p>Log In</p></div>
                        </div>
                    </NavLink>
                    <NavLink onClick={() => setMenu(false)} className="SideNavLink" to="/cart">
                        <div className="SideCart">
                            <div className="SideCartImage Gray">
                                <figure>
                                    <img src={CartIcon} alt="cart" />
                                </figure>
                            </div>
                            <div className="SideCartImage Blue">
                                <figure>
                                    <img src={CartBlue} alt="cart" />
                                </figure>
                            </div>
                            <div
                                className={
                                    Clength ? 'SideCartNumber' : 'SideCartNumber None'
                                }>
                                <div className="SideCartNumberEllipse Red">
                                    <figure>
                                        <img src={Ellipse} alt="ellipse" />
                                    </figure>
                                </div>
                                <div className="SideCartNumberEllipse Blue">
                                    <figure>
                                        <img src={EllipseBlue} alt="ellipse" />
                                    </figure>
                                </div>
                                <p>{Clength}</p>
                            </div>
                        </div>
                        <div className='CartWriting'>Cart</div>
                    </NavLink>
                    <NavLink onClick={() => setMenu(false)} className="SideNavLink" to="/favorites">
                        <div className="SideFavorite">
                                <div className="SideFavoriteImage Gray">
                                    <figure>
                                        <img src={LikeGray} alt="LikeGray" />
                                    </figure>
                                </div>
                                <div className="SideFavoriteImage Blue">
                                    <figure>
                                        <img src={HeartBlue} alt="HeartBlue" />
                                    </figure>
                                </div>
                                <div
                                    className={
                                        favorites.length ? 'SideFavoriteNumber' : 'SideFavoriteNumber None'
                                    }>
                                    <div className="SideFavoriteNumberEllipse Red">
                                        <figure>
                                            <img src={Ellipse} alt="ellipse" />
                                        </figure>
                                    </div>
                                    <div className="SideFavoriteNumberEllipse Blue">
                                        <figure>
                                            <img src={EllipseBlue} alt="ellipse" />
                                        </figure>
                                    </div>
                                    <p>{favorites.length}</p>
                                </div>
                            </div>
                            <div className='FavoriteWriting'>Favorites</div>
                    </NavLink>
                    <NavLink onClick={() => setMenu(false)} className="SideNavLink" to="/search">
                        <div className="SideSearch">
                            <div className="SideSearchIcon Gray">
                                <figure>
                                    <img src={SearchIcon} alt="SearchIcon" />
                                </figure>
                            </div>
                            <div className="SideSearchIcon Blue">
                                <figure>
                                    <img src={SearchIconBlue} alt="SearchIcon" />
                                </figure>
                            </div>
                        </div>
                        <div className='SearchWriting'>Search</div>
                    </NavLink>
                    <div className="SideTotal">
                        <p>
                            Total: $
                            {checkout() > 1000
                                ? Math.floor(checkout() / 1000) + 'k'
                                : checkout()}
                        </p>
                    </div>
                    </div>
            </div>
            <div className="profile">
                <div onClick={() => setMenu(true)} className="MenuIcon">
                    <figure>
                        <img src={MenuIcon} alt="MenuIcon" />
                    </figure>
                </div>
                <div className="profileLeft">
                    {accordions.map((item, index) => (
                        <div
                            className="AccordionHolder"
                            key={index}
                            onClick={() => toggle(index)}>
                            <Accordion
                                title={item.title}
                                open={open}
                                currentIndex={index}
                                contents={item.content}
                            />
                        </div>
                    ))}
                </div>
                <div className="profileRight">
                    <NavLink className="NavLink" to="/profile">
                        <div className="ProfileInformation">
                            <div className="ProfileInformationIcon">
                                <figure>
                                    <img
                                        src={ProfilePicture}
                                        alt="ProfilePicture"
                                    />
                                </figure>
                                <p>My profile</p>
                            </div>
                        </div>
                    </NavLink>
                    <NavLink className="NavLink" to="/cart">
                        <div className="Cart">
                            <div className="CartImage Gray">
                                <figure>
                                    <img src={CartIcon} alt="cart" />
                                </figure>
                            </div>
                            <div className="CartImage Blue">
                                <figure>
                                    <img src={CartBlue} alt="cart" />
                                </figure>
                            </div>
                            <div
                                className={
                                    Clength ? 'CartNumber' : 'CartNumber None'
                                }>
                                <div className="CartNumberEllipse Red">
                                    <figure>
                                        <img src={Ellipse} alt="ellipse" />
                                    </figure>
                                </div>
                                <div className="CartNumberEllipse Blue">
                                    <figure>
                                        <img src={EllipseBlue} alt="ellipse" />
                                    </figure>
                                </div>
                                <p>{Clength}</p>
                            </div>
                        </div>
                    </NavLink>
                    <NavLink className={favorites.length ? "NavLink" : "NavLink FavEmpty"}to="/favorites">
                        <div className="Favorites">
                            <p>Favorites</p>
                            <div
                                className={
                                    favorites.length
                                        ? 'FavoriteNumber'
                                        : 'FavoriteNumber None'
                                }>
                                <div className="FavoriteNumberEllipse Red">
                                    <figure>
                                        <img src={FavoriteEllipse} alt="ellipse" />
                                    </figure>
                                </div>
                                <div className="FavoriteNumberEllipse Blue">
                                    <figure>
                                        <img src={FavoriteEllipseBlue} alt="ellipse" />
                                    </figure>
                                </div>
                                <p>{favorites.length}</p>
                            </div>
                        </div>
                    </NavLink>
                    <div className="Total">
                        <p>
                            $
                            {checkout() > 1000
                                ? Math.floor(checkout() / 1000) + 'k'
                                : checkout()}
                        </p>
                    </div>
                    <NavLink className="NavLink" to="/search">
                        <div className="Search">
                            <div className="SearchIcon Gray">
                                <figure>
                                    <img src={SearchIcon} alt="SearchIcon" />
                                </figure>
                            </div>
                            <div className="SearchIcon Blue">
                                <figure>
                                    <img src={SearchIconBlue} alt="SearchIcon" />
                                </figure>
                            </div>
                        </div>
                    </NavLink>
                </div>
            </div>
            <div className="links">
                <figure className="logo">
                    <img src={Logo} alt="Logo" />
                </figure>
                <ul className="pages">
                        <NavLink to="/home" className="NavLink list">
                        <li>
                            HOME
                            </li>
                        </NavLink>
                        <NavLink to="/products" className="NavLink list">
                        <li>
                            PRODUCTS
                            </li>
                        </NavLink>
                </ul>
            </div>
        </header>
    );
}

export default Header;
