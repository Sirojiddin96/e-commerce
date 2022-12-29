import { useContext } from "react";
import { useState } from "react";
import { ContextData } from "../../context/Context";
import "./ProductDescription.css";
import CartIconRed from "../../assets/icons/CartIconRed.svg";
import CartIconBlue from "../../assets/icons/CartIconBlue.svg";
import HeartIconBlue from "../../assets/icons/HeartIconBlue.svg";
const ProductDescription = (props) =>{
    const {item, inCart} = props;
    const [selected, setSelected] = useState(0);
    const {priceAfterDiscount, addCart} = useContext(ContextData);
    return(
        <div className="ProductDescriptionPage">
           <div className="ProductDescriptionPageLeft">
                <figure>
                    <img src={item.picture[selected]} alt="itempicture"/>
                </figure>
                <div className="ProductDescriptionPictures">
                    {
                        item.picture.map((elem, index)=>(
                            <figure onClick={()=>setSelected(index)} key={index} className={selected === index ? "ProductDescriptionPicturesFigure Active" : "ProductDescriptionPicturesFigure"}>
                                <img src={elem} alt="elem" />
                            </figure>
                        ))
                    }
                </div>
           </div>
           <div className="ProductDescriptionPageRight">
                <div className="ProductDescriptionTitle">
                    <p>{item.title}</p>
                </div>
                <div className="ProductDescriptionReview">
                    <p>Rating</p>
                    <p>0 reviews</p>
                    <p>Submit a review</p>
                </div>
                <div className="ProductDescriptionBottom">
                    <div className="ProductDescriptionPrice">
                        <p>${priceAfterDiscount(item.discount, item.originalPrice).toFixed(2)}</p>
                        <p><del>${item.originalPrice}</del><span>{item.discount}% Off</span></p>
                    </div>
                    <div className="Availability">
                        <p>Availability:</p>
                        <p>In stock</p>
                    </div>
                    <div className="Category">
                        <p>Category:</p>
                        <p>{item.category}</p>
                    </div>
                    <div className="Shipping">
                        <p>Shipping: </p>
                        <p>${item.shippingFee}</p>
                    </div>
                    <div className="ProductCardsActionHorizontal">
                        <div onClick={()=>addCart(item)} className="ProductCardsCartHorizontal">
                            <figure>
                                <img src={inCart ? CartIconRed : CartIconBlue} alt="CartIconRed" />
                            </figure>
                            <p>Add To Cart</p>
                        </div>
                        <div className="ProductCardsLikeHorizontal">
                            <figure>
                                <img src={HeartIconBlue} alt="HeartIconBlue" />
                            </figure>
                        </div>
                        </div>
                </div>
           </div>
        </div>
    )
}
export default ProductDescription;