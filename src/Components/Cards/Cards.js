import "./Cards.css";
import CartIcon from "../../utils/icons/CartIcon.svg";
import LikeIcon from "../../utils/icons/HeartIcon.svg";
import CartIconRed from "../../utils/icons/CartIconRed.svg";

import { useState } from "react";
import { useContext } from "react";
import { ContextData } from "../../Context/Context";

export function PromotionCardONe(props){
    const {pic, title, originalPrice, discount, currentPrice} = props;
    return(
        <div className="promotionCardOne">
            <figure>
                <img src={pic} alt="product" />
            </figure>
            <div className="PromotionCardONeTitle"><p>{title}</p></div>
            <p><del>${originalPrice}</del><span>{discount}% Off</span></p>
            <div className="promotionCardOneCurrentPrice"><p>${currentPrice}</p></div>
        </div>
    )
} 
export function PromotionCardTwo(props){
    const {pic, title, originalPrice, discount, currentPrice} = props;
    return(
        <div className="promotionCardTwo">
            <figure>
                <img src={pic} alt="product" />
            </figure>
            <div className="promotionCardTwoTitle">
                <p>{title}</p>
                <p>${currentPrice}</p>
            </div>
            <div className="promotionCardTwoPrice"><p><del>${originalPrice}</del><span>{discount}% Off</span></p></div>
        </div>
    )
} 
export function PromotionCardThree(props){
    const {pic, title, originalPrice, discount, currentPrice} = props;
    return(
        <div className="promotionCardThree">
            <figure>
                <img src={pic} alt="product" />
            </figure>
            <div className="promotionCardThreeTitle">
                <p>{title}</p>
            </div>
            <p><del>${originalPrice}</del><span>{discount}% Off</span></p>
            <div className="promotionCardThreeCurrentPrice"><p>${currentPrice}</p></div>
        </div>
    )
} 
export function ProductCards(props){
    const {addCart} = useContext(ContextData);
    const [hov, setHov] = useState(false);
    const {product, pic, title, originalPrice, discount, currentPrice} = props;
    return(
        <div className="ProductCards">
            <figure onMouseEnter={()=>setHov(true)} onMouseLeave={()=>setHov(false)} className="ProductCardsFigure">
                <img src={pic} alt="product" />
                <div className={hov ? "ProductCardsHover Hover" : "ProductCardsHover"}>
                    <div className={product.InCart ? "CartIconHolder Red" : "CartIconHolder"}>
                        <figure onClick={()=>product.InCart ? alert("You have already added this item to the cart") : addCart(product)}>
                            <img src={product.InCart ? CartIconRed : CartIcon} alt="CartIcon" />
                        </figure>
                    </div>
                    <div className="LikeIconHolder">
                        <figure>
                            <img src={LikeIcon} alt="LikeIcon" />
                        </figure>
                    </div>
                </div>
            </figure>
            <div className="ProductCardsTitle">
                <p>{title}</p>
            </div>
            <div className="ProductCardsRating">
                <p>Rating</p>
            </div>
            <div className="ProductCardsCurrentPrice">
                <p>${currentPrice}</p>
                <p><del>${originalPrice}</del><span>{discount}% Off</span></p>
            </div>
        </div>
    )
} 

export function IconCard(props){
    const {picture, title, description} = props;
    return(
        <div className="IconCard">
            <figure>
                <img src={picture} alt="icon" />
            </figure>
            <p>{title}</p>
            <p>{description}</p>
        </div>
    )
}
export function HorizontalNewsCard(props){
    const {picture, date, title, description} = props;
    return(
        <div className="HorizontalNewsCard">
            <figure>
                <img src={picture} alt="news" />
            </figure>
            <div className="HorizontalNewsCardWriting">
                <p>{date}</p>
                <p>{title}</p>
                <p>{description}</p>
            </div>
        </div>
    )
}
export function HorizontalProductCard(props){
    const {picture, title, oldPrice, newPrice} = props;
    return(
        <div className="HorizontalProductCard">
            <figure>
                <img src={picture} alt="product" />
            </figure>
            <div className="HorizontalProductCardWriting">
                <p>{title}</p>
                <p>Rating</p>
                <p><span>${newPrice}</span><del>${oldPrice}</del></p>
            </div>
        </div>
    )
}