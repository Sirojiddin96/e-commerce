import "./AdminSidebar.css";
import { NavLink } from "react-router-dom";
import AllProductsIconGray from "../../assets/icons/AllProductsIconGray.svg";
import AddProductIconGray from "../../assets/icons/AddProductIconGray.svg";
import AllProductsIconBlue from "../../assets/icons/AllProductsIconBlue.svg";
import AddProductIconBlue from "../../assets/icons/AddProductIconBlue.svg";

function AdminSideBar(){
    return(
        <div className="AdminSidebar">
            <NavLink to="/uhgjobiejfoprfrtyuiyuowiw[wpriirqrr]p[fewfdkfjdlgja" className="NavLink">
                <div>
                    <figure>
                        <img src={AllProductsIconGray} alt="AllProductsIconGray" />
                    </figure>
                    <p>Products</p>
                </div>
            </NavLink>
            <NavLink to="/uhgjobiejfoprfrtyuiyuowiw[wpriirqrr]p[fewfdkfjdlgja/AddProduct" className="NavLink">
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