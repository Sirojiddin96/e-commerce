import "./Cards.css";
import CartIcon from "../../assets/icons/CartIcon.svg";
import LikeIcon from "../../assets/icons/HeartIcon.svg";
import HeartIconRed from "../../assets/icons/HeartIconRed.svg";
import CartIconRed from "../../assets/icons/CartIconRed.svg";
import CartIconBlue from "../../assets/icons/CartIconBlue.svg";
import HeartIconBlue from "../../assets/icons/HeartIconBlue.svg";
import { useContext } from "react";
import { ContextData } from "../../context/Context";
import { useNavigate } from "react-router-dom";

export function PromotionCardONe(props){
    const navig = useNavigate();
    const {product, pic, title, originalPrice, discount, currentPrice} = props;
    return(
        <div onClick={()=>navig("/products/" + product.id)} className="promotionCardOne">
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
    const navig = useNavigate();
    const {product, pic, title, originalPrice, discount, currentPrice} = props;
    return(
        <div onClick={()=>navig("/products/" + product.id)} className="promotionCardTwo">
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
    const navig = useNavigate();
    const {product, pic, title, originalPrice, discount, currentPrice} = props;
    return(
        <div onClick={()=>navig("/products/" + product.id)} className="promotionCardThree">
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
    const navig = useNavigate();
    const {addFavorite, addCart} = useContext(ContextData);
    const {inFavorites, inCart, product, pic, title, originalPrice, discount, currentPrice} = props;
    return(
        <div onClick={()=>navig("/products/" + product.id)} className="ProductCards">
            <figure className="ProductCardsFigure">
                <img src={pic} alt="product" />
                <div onClick={(event)=>event.stopPropagation()} className="ProductCardsHover">
                    <div onClick={(event)=>event.stopPropagation()} className={inCart ? "CartIconHolder Red" : "CartIconHolder"}>
                        <figure  onClick={()=>addCart(product)}>
                            <img src={inCart ? CartIconRed : CartIcon} alt="CartIcon" />
                        </figure>
                    </div>
                    <div className={inFavorites ? "CartIconHolder Red" : "CartIconHolder"}>
                        <figure onClick={()=>addFavorite(product)}>
                            <img src={inFavorites ? HeartIconRed : LikeIcon} alt="LikeIcon" />

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

export function ProductCardsHorizontal(props){
    const navig = useNavigate();
    const {addFavorite, addCart} = useContext(ContextData);
    const {inFavorites, description, inCart, product, pic, title, originalPrice, discount, currentPrice} = props;
    return(
        <div onClick={()=>navig("/products/" + product.id)} className="ProductCardsHorizontal">
            <figure className="ProductCardsFigureHorizontal">
                <img src={pic} alt="product" />
            </figure>
            <div className="ProductCardsWritingHorizontal">
                <div className="ProductCardsTitleHorizontal">
                    <p>{title}</p>
                </div>
                <div className="ProductCardsRatingHorizontal">
                    <p>Rating</p>
                    <p>0 reviews</p>
                    <p>Submit a review</p>
                </div>
                <div className="ProductCardsCurrentPriceHorizontal">
                    <p>${currentPrice}</p>
                    <p><del>${originalPrice}</del><span>{discount}% Off</span></p>
                </div>
                <div className="ProductCardsDescriptionHorizontal">
                    <p>{description}</p>
                </div>
                <div className="ProductCardsActionHorizontal">
                    <div onClick={()=>addCart(product)} className="ProductCardsCartHorizontal">
                        <figure>
                            <img src={inCart ? CartIconRed : CartIconBlue} alt="CartIconRed" />
                        </figure>
                        <p>Add To Cart</p>
                    </div>
                    <div onClick={()=>addFavorite(product)} className="ProductCardsLikeHorizontal">
                        <figure>
                            <img src={inFavorites ? HeartIconRed : HeartIconBlue} alt="HeartIconBlue" />
                        </figure>
                    </div>
                </div>
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