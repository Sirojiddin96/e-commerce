import { useContext } from "react";
import { ContextData } from "../../context/Context";
import Footer from "../../containers/Footer";
import "./Cart.css";
import { useState } from "react";
import Header from "../../containers/Header";
function Cart(){
    const {Cmodal, setCModal, checkout, calcShipping, calcTotal, delteCartItem, descreaseQuantity, increseQuantity, cart, priceAfterDiscount} = useContext(ContextData);
    const [i, setI] = useState();
    return(
        <>
        { Cmodal ?
        <div onClick={()=>setCModal(false)} className="ConfirmBack">
            <div onClick={(e)=>e.stopPropagation()} className="ConfirmContent">
                <div><p>Do you really want to remove this item?</p></div>
                <div className="ConfirmContentAction">
                    <button onClick={()=>{delteCartItem(i); setCModal(false)}}>Yes</button>
                    <button onClick={()=>setCModal(false)}>Cancel</button>
                </div>
            </div>
        </div> : <></>
        }
        <div className="CartPage">
            <Header/>
            <div className="CartProducts">
                <table>
                    <thead>
                        <tr>
                            <th>PRODUCT</th>
                            <th>PRICE</th>
                            <th>QTY</th>
                            <th>UNIT PRICE</th>
                        </tr>
                    </thead>
                    <tbody>
                        { cart.length === 0 ? 
                            <tr className="NoItemRow">
                                <td colSpan={4}>NO ITEM IN THE CART</td>
                            </tr> :
                            cart.map((item, index)=>(
                                <tr key={index}>
                                    <td className="CartProductFistPart"><button onClick={()=>{setCModal(true); setI(item)}}>X</button><div className="CartImageDiv"><figure><img src={item.picture[0]} alt="product" /></figure></div><p>{item.title}</p></td>
                                    <td className="CartProductTotal">${(item.quantityInCart*priceAfterDiscount(item.discount, item.originalPrice)).toFixed(2)}</td>
                                    <td className="CartProductQuantity">
                                        <div className="CartProductQuantityDiv">
                                            <button onClick={()=>descreaseQuantity(item)}>-</button>
                                            <div><p>{item.quantityInCart}</p></div>
                                            <button onClick={()=>increseQuantity(item)}>+</button>
                                        </div>
                                    </td>
                                    <td>${priceAfterDiscount(item.discount, item.originalPrice).toFixed(2)}</td>
                                </tr>
                            ))
                                
                        }
                    </tbody>
                </table>
            </div>
            <div className="TotalSection">
                <div className="VoucherSide">
                    <input type="text" placeholder="Voucher code"/>
                    <button>Redeem</button>
                </div>
                <div className="CalculateTotalCart">
                    <div>
                        <p>Subtotal</p>
                        <p>${calcTotal()}</p>
                    </div>
                    <div>
                        <p>Shipping fee</p>
                        <p>${calcShipping()}</p>
                    </div>
                    <div>
                        <p>Coupon</p>
                        <p>No</p>
                    </div>
                    <div className="FinalTotal">
                        <p>TOTAL</p>
                        <p>${checkout()}</p>
                    </div>
                    <button className="CheckoutBtn">Check Out</button>
                </div>
            </div>
            <Footer/>
        </div>
        </>
    )
}
export default Cart;