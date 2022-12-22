import { useContext } from "react";
import { ContextData } from "../../Context/Context";
import "./Cart.css";
function Cart(){
    const {checkout, calcShipping, calcTotal, delteCartItem, descreaseQuantity, increseQuantity, cart, priceAfterDiscount} = useContext(ContextData);
    
    return(
        <div className="CartPage">
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
                                    <td className="CartProductFistPart"><button onClick={()=>delteCartItem(item)}>X</button> <figure><img src={item.picture} alt="product" /></figure> <p>{item.title}</p></td>
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
        </div>
    )
}
export default Cart;