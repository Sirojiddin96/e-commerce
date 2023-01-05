import { useContext } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { ContextData } from "../context/Context";
import AdminSideBar from "./admin-sidebar/AdminSidebar";
import "./AdminPanel.css";
import Profile from "../assets/icons/ProfilePicture.svg";
import AdminProducts from "../admin-panel/admin-pages/admin-pages/AdminProducts";
import AddProduct from "../admin-panel/admin-pages/admin-addproduct/AddProduct";

function Adminpanel(){
    const {adminlog, setAdminlog} = useContext(ContextData);
    const navig = useNavigate();
    return(
        <div className="Adminpanel">
            <div className="AdminpanelTop">
                {adminlog ?
                    <div className="AdminProfile">
                        <figure>
                            <img src={Profile} alt="Profile" />
                        </figure>
                    <p>Admin A</p>
                </div> : <div></div>
                }
                <button onClick={()=>{setAdminlog(false); navig("/")}}>Back to main</button>
            </div>
            {
                adminlog ? 
                <div className="AdminpanelPage">
                    <div className="SidebarAdmin">
                        <AdminSideBar/>
                    </div>
                    <div className="AdminpanelWorkingPage">
                        <Routes>
                            <Route path="/uhgjobiejfoprfrtyuiyuowiw[wpriirqrr]p[fewfdkfjdlgja" element={<AdminProducts/>}/>
                            <Route path="/uhgjobiejfoprfrtyuiyuowiw[wpriirqrr]p[fewfdkfjdlgja/AddProduct" element={<AddProduct/>}/>
                        </Routes>
                    </div>
                </div> :
                <div className="Adminpanelforbidden">
                    Please log in to continue
                </div>
            }
            
        </div>
    )
}
export default Adminpanel;