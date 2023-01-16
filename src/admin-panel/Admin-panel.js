import { useContext } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { ContextData } from '../context/Context';
import AdminSideBar from './admin-sidebar/AdminSidebar';
import './AdminPanel.css';
import Profile from '../assets/icons/ProfilePicture.svg';
import AdminProducts from '../admin-panel/admin-pages/admin-pages/AdminProducts';
import AddProduct from '../admin-panel/admin-pages/admin-addproduct/AddProduct';
import MenuIcon from '../assets/icons/MenuIcon.png';
function Adminpanel() {
    const {
        Amodal,
        AdminDeleteProduct,
        setAModal,
        Aprod,
        side,
        setSide,
        adminlog,
        setAdminlog,
    } = useContext(ContextData);
    const navig = useNavigate();
    return (
        <>
            {Amodal ? (
                <div onClick={() => setAModal(false)} className="ConfirmBack">
                    <div
                        onClick={(e) => e.stopPropagation()}
                        className="ConfirmContent">
                        <div>
                            <p>Do you really want to remove this item?</p>
                        </div>
                        <div className="ConfirmContentAction">
                            <button
                                onClick={() => {
                                    AdminDeleteProduct(Aprod);
                                    setAModal(false);
                                }}>
                                Yes
                            </button>
                            <button onClick={() => setAModal(false)}>
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            ) : (
                <></>
            )}
            <>
                <div
                    onClick={() => setSide(false)}
                    className={
                        side ? 'AdminSideBarBack Show' : 'AdminideBarBack'
                    }></div>
                <div className={side ? 'AdminSideBar Show' : 'AdminSideBar'}>
                    <div className="ButtonBackDiv">
                        <button onClick={() => setSide(false)}>X</button>
                    </div>
                    <div className="SideSidebarAdmin">
                        <AdminSideBar />
                    </div>
                </div>
                <div className="Adminpanel">
                    <div className="AdminpanelTop">
                        {adminlog ? (
                            <div className="AdminlogShow">
                                <div className="AdminProfile">
                                    <figure>
                                        <img src={Profile} alt="Profile" />
                                    </figure>
                                    <p>Admin A</p>
                                </div>
                                <div
                                    onClick={() => setSide(true)}
                                    className="AdminMenuIconDiv">
                                    <figure>
                                        <img src={MenuIcon} alt="MenuIcon" />
                                    </figure>
                                </div>
                            </div>
                        ) : (
                            <div></div>
                        )}

                        <button
                            onClick={() => {
                                setAdminlog(false);
                                navig('/');
                            }}>
                            Back to main
                        </button>
                    </div>
                    {adminlog ? (
                        <div className="AdminpanelPage">
                            <div className="SidebarAdmin">
                                <AdminSideBar />
                            </div>
                            <div className="AdminpanelWorkingPage">
                                <Routes>
                                    <Route
                                        path="/uhgjobiejfoprfrtyuiyuowiw[wpriirqrr]p[fewfdkfjdlgja"
                                        element={<AdminProducts />}
                                    />
                                    <Route
                                        path="/uhgjobiejfoprfrtyuiyuowiw[wpriirqrr]p[fewfdkfjdlgja/AddProduct"
                                        element={<AddProduct />}
                                    />
                                </Routes>
                            </div>
                        </div>
                    ) : (
                        <div className="Adminpanelforbidden">
                            Please log in to continue
                        </div>
                    )}
                </div>
            </>
        </>
    );
}
export default Adminpanel;
