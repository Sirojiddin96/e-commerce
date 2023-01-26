import { useContext } from 'react';
import { ContextData } from '../../context/Context';
import Footer from '../../containers/Footer';
import './Cart.css';
import { useState } from 'react';
import Header from '../../containers/Header';
import ExitIcon from "../../assets/icons/ExitIcon.svg";
import LeftArrowIcon from "../../assets/icons/LeftArrowIcon.svg";
import CardIcon from "../../assets/icons/CardIcon.svg";
import PaypalIcon from "../../assets/icons/PaypalIcon.svg";
import BankIcon from "../../assets/icons/BankIcon.svg";
import CreditCard from "../../assets/images/CreditCard.svg";
import SuccessIcon from "../../assets/images/SuccessIcon.svg";

function Cart() {
    const {
        payment, 
        setPayment,
        checkout,
        calcShipping,
        calcTotal,
        delteCartItem,
        descreaseQuantity,
        increseQuantity,
        cart,
        priceAfterDiscount,
        setVoucher,
        coupon,
        checkVoucher,
        clearCart,
        Clength
    } = useContext(ContextData);
    const [i, setI] = useState();
    const [method, setMethod] = useState(1);
    const [stage, setStage] = useState(1);
    function changeStage(num){
        setStage(num)
    }
    return (
        <>
            {payment ? (
                <div onClick={() => {setPayment(false); changeStage(1)}} className="ConfirmBack">
                    <div onClick={(e) => e.stopPropagation()}
                        className="payment-content">
                            <div className="payment-content-top">
                                <figure onClick={()=>{stage !== 1 ? setStage(stage-1) : setPayment(false)}}>
                                    <img src={LeftArrowIcon} alt="LeftArrowIcon" />
                                </figure>
                                <figure onClick={() => {setPayment(false); changeStage(1)}}>
                                    <img src={ExitIcon} alt="ExitIcon" />
                                </figure>
                            </div>
                            <div className='make-payment-div'>
                                <p>Make Payment</p>
                            </div>
                            <div className='payment-paging'>
                                <div className='payment-paging-container'>
                                    <div className={stage===1 ? 'payment-paging-number active' :' payment-paging-number'}>1</div>
                                    <hr />
                                    <div className={stage===2 ? 'payment-paging-number active' :' payment-paging-number'}>2</div>
                                    <hr />
                                    <div className={stage===3 ? 'payment-paging-number active' :' payment-paging-number'}>3</div>
                                </div>
                            </div>
                            { stage===1 ?
                            <form onSubmit={(e)=>{e.preventDefault(); changeStage(2)}}className='payment-form'>
                                <div className='payment-form-top'>
                                    <div className='payment-form-top-left'>
                                        <input type="text" placeholder='First Name' required/>
                                        <input type="text" placeholder='Email Address' required/>
                                        <p>Select Method of Payment</p>
                                        <div onClick={()=>setMethod(1)} className='payment-method'>
                                            <div>
                                                <figure>
                                                    <img src={CardIcon} alt="CardIcon" />
                                                </figure>
                                            <p>Credit Card Or Debit</p>
                                            </div>
                                            {method===1 ? 
                                            <input checked name='paymentmethod' type="radio"/> :
                                            <input name='paymentmethod' type="radio"/>
                                            }
                                        </div>
                                        <div onClick={()=>setMethod(2)} className='payment-method'>
                                            <div>
                                                <figure>
                                                    <img src={PaypalIcon} alt="PaypalIcon" />
                                                </figure>
                                            <p>Paypal</p>
                                            </div>
                                            {method===2 ? 
                                            <input checked name='paymentmethod' type="radio"/> :
                                            <input name='paymentmethod' type="radio"/>
                                            }
                                        </div>
                                        <div onClick={()=>setMethod(3)} className='payment-method'>
                                            <div>
                                                <figure>
                                                    <img src={BankIcon} alt="BankIcon" />
                                                </figure>
                                            <p>Bank Transfer</p>
                                            </div>
                                            {method===3 ? 
                                            <input checked name='paymentmethod' type="radio"/> :
                                            <input name='paymentmethod' type="radio"/>
                                            }
                                        </div>
                                    </div>
                                    <div className='payment-form-top-right'>
                                        <input type="text" placeholder='Last Name' required/>
                                        <textarea type="text" placeholder='Address for Delivery' required/>
                                        <input type="text" placeholder='Mobile Phone' required/>
                                    </div>
                                </div>
                                <div className='form-submit-btn-div'><button>Go to Payment</button></div>
                            </form> :
                            stage===2 ?
                            <form onSubmit={(e)=>{e.preventDefault(); changeStage(3)}}className='payment-form'>
                                <div className='payment-form-top'>
                                    <div className='payment-form-top-left'>
                                        <figure className='credit-card-holder'>
                                            <img src={CreditCard} alt="CreditCard" />
                                        </figure>
                                    </div>
                                    <div className='payment-form-top-right'>
                                        <input type="text" placeholder='Card Number' required/>
                                        <div className='card-info-dates'>
                                            <div className='card-info-dates-inside'>
                                                <input type="number" min={1} max={12} placeholder='mm' required/>
                                                <span>/</span>
                                                <input type="number" min={0} max={99} placeholder='yy' required/>
                                            </div>
                                            <input type="number" max={999} placeholder='CVV'/>
                                        </div>
                                        <input type="number" placeholder='Holder Number' required/>
                                        <div className='save-card-div'>
                                            <input type="checkbox" />
                                            <p>Save this credit card</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='form-submit-btn-div'><button>Confirm</button></div>
                            </form> : 
                            <div className='success-modal-content'>
                                <figure>
                                    <img src={SuccessIcon} alt="SuccessIcon" />
                                </figure>
                                <p>Success</p>
                                <div className='form-submit-btn-div'><button onClick={()=>{setPayment(false); changeStage(1); clearCart()}}>Complete</button></div>
                            </div>
                            }
                    </div>
                </div>
            ) : (
                <></>
            )}
            <div className="CartPage">
                <Header />
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
                            {cart.length === 0 ? (
                                <tr className="NoItemRow">
                                    <td colSpan={4}>NO ITEM IN THE CART</td>
                                </tr>
                            ) : (
                                cart.map((item, index) => (
                                    <tr key={index}>
                                        <td className="CartProductFistPart">
                                            <button
                                                onClick={() => {
                                                    delteCartItem(item)
                                                    setI(item);
                                                }}>
                                                X
                                            </button>
                                            <div className="CartImageDiv">
                                                <figure>
                                                    <img
                                                        src={item.picture[0]}
                                                        alt="product"
                                                    />
                                                </figure>
                                            </div>
                                            <p>{item.title}</p>
                                        </td>
                                        <td className="CartProductTotal">
                                            $
                                            {(
                                                item.quantityInCart *
                                                priceAfterDiscount(
                                                    item.discount,
                                                    item.originalPrice,
                                                )
                                            ).toFixed(2)}
                                        </td>
                                        <td className="CartProductQuantity">
                                            <div className="CartProductQuantityDiv">
                                                <button
                                                    onClick={() =>
                                                        descreaseQuantity(item)
                                                    }>
                                                    -
                                                </button>
                                                <div>
                                                    <p>{item.quantityInCart}</p>
                                                </div>
                                                <button
                                                    onClick={() =>
                                                        increseQuantity(item)
                                                    }>
                                                    +
                                                </button>
                                            </div>
                                        </td>
                                        <td>
                                            $
                                            {priceAfterDiscount(
                                                item.discount,
                                                item.originalPrice,
                                            ).toFixed(2)}
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>
                <div className="TotalSection">
                    <div className="VoucherSide">
                        <input onInput={(e)=>setVoucher(e.target.value)} type="text" placeholder="Voucher code" />
                        <button onClick={(e)=>checkVoucher(e)}>Redeem</button>
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
                            <p>{coupon !== "" ? coupon + "%" : "No"}</p>
                        </div>
                        <div className="FinalTotal">
                            <p>TOTAL</p>
                            <p>${checkout()}</p>
                        </div>
                        {Clength === 0 ? 
                        <button className="CheckoutBtn Gray">Check Out</button>
                        :
                        <button onClick={setPayment} className="CheckoutBtn">Check Out</button>
                        }
                        
                    </div>
                </div>
                <Footer />
            </div>
        </>
    );
}
export default Cart;
