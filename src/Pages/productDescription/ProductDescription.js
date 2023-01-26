import { useContext } from "react";
import * as React from 'react';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import { useState } from "react";
import { ContextData } from "../../context/Context";
import Footer from "../../containers/Footer";
import "./ProductDescription.css";
import CartIconRed from "../../assets/icons/CartIconRed.svg";
import CartIconBlue from "../../assets/icons/CartIconBlue.svg";
import HeartIconBlue from "../../assets/icons/HeartIconBlue.svg";
import HeartIconRed from "../../assets/icons/HeartIconRed.svg";
import Header from "../../containers/Header";
const ProductDescription = (props) =>{
    const {item, inCart, inFavorites} = props;
    const [selected, setSelected] = useState(0);
    const {addFavorite, deleteFavorite, priceAfterDiscount, addCart} = useContext(ContextData);
    return(
        <div className="ProductDescriptionPage">
            <Header/>
            <div className="ProductDescriptionContent">
                <div className="ProductDescriptionPageLeft">
                    <div className="ProductDescriptionImageHolder">
                        <div onClick={()=>{selected !== 0 ? setSelected(selected-1) :  setSelected(selected)}} className="ProductDescriptionImageHolderLeft"></div>
                                {
                                item.picture.map((elem, index)=>(
                                    <figure style={{transform: `translateX(-${(selected)*100}%)`}} key={index}>
                                        <img src={elem} alt="itempicture"/>
                                    </figure>
                                ))
                                }
                        <div onClick={()=>{selected !== item.picture.length-1 ? setSelected(selected+1) :  setSelected(selected)}} className="ProductDescriptionImageHolderRight"></div>
                        </div>
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
                        <Stack onClick={(event) => event.stopPropagation()} spacing={1}>
                        <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
                        </Stack>
                            <p>0 reviews</p>
                            <p>Submit a review</p>
                        </div>
                        <div className="ProductDescriptionBottom">
                            <div className="ProductDescriptionPrice">
                                <p>${priceAfterDiscount(item.discount, item.originalPrice).toFixed(2)}</p>
                                <p><del>${item.originalPrice}</del><span>{item.discount}% Off</span></p>
                            </div>
                            <div className="ProductDescription">
                                <p>{item.decription}</p>
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
                            <div className="ProductDescriptionCardsAction">
                                <div onClick={()=>addCart(item)} className="ProductDescriptionCardsCart">
                                    <figure>
                                        <img src={inCart ? CartIconRed : CartIconBlue} alt="CartIconRed" />
                                    </figure>
                                    <p>Add To Cart</p>
                                </div>
                                <div  onClick={()=>inFavorites ? deleteFavorite(item) : addFavorite(item)} className="ProductDescriptionCardsLike">
                                    <figure>
                                        <img src={inFavorites ? HeartIconRed : HeartIconBlue} alt="HeartIconBlue" />
                                    </figure>
                                </div>
                                </div>
                        </div>
                    </div>
                </div>
            <Footer/>
        </div>
    )
}
export default ProductDescription;