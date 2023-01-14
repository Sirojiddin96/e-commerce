import "./AdminSidebar.css";
import { NavLink } from "react-router-dom";
import AllProductsIconGray from "../../assets/icons/AllProductsIconGray.svg";
import AddProductIconGray from "../../assets/icons/AddProductIconGray.svg";
import { useContext } from "react";
import { ContextData } from "../../context/Context";

function AdminSideBar(){
    const {setSide} = useContext(ContextData);
    return(
        <div className="AdminSidebar">
            <NavLink onClick={()=>setSide(false)} to="/uhgjobiejfoprfrtyuiyuowiw[wpriirqrr]p[fewfdkfjdlgja" className="AdminNavLink">
                <div>
                    <figure>
                        <img src={AllProductsIconGray} alt="AllProductsIconGray" />
                    </figure>
                    <p>Products</p>
                </div>
            </NavLink>
            <NavLink onClick={()=>setSide(false)} to="/uhgjobiejfoprfrtyuiyuowiw[wpriirqrr]p[fewfdkfjdlgja/AddProduct" className="AdminNavLink">
                <div>
                    <figure>
                        <img src={AddProductIconGray} alt="AddProductIconGray" />
                    </figure>
                    <p>Add a product</p>
                </div>
            </NavLink>
        </div>
    )
}
export default AdminSideBar;