import { useContext } from "react";
import { ProductCards } from "../../components/Cards/Cards";
import { ContextData } from "../../context/Context";
import "./Favorites.css";
function Favorites(){
    const {priceAfterDiscount, favorites, cart} = useContext(ContextData);
    return(
        <div className="FavoritesPage">
            <h1>{favorites.length} favorite Items</h1>
            <div className="FavoriteProducts">
                {
                    favorites.map((item, index)=>(
                        <div className="ProductCardsHolder" key={index}>
                            <ProductCards inFavorites={favorites.length ? favorites.filter((elem)=>(elem.id === item.id)).length : false} inCart={cart.length ? cart.filter((elem)=>(elem.id === item.id)).length : false} product={item} pic={item.picture[0]} title={item.title} originalPrice={item.originalPrice} discount={item.discount} currentPrice={priceAfterDiscount(item.discount, item.originalPrice).toFixed(2)}/>
                        </div>
                    ))
                }
                
            </div>
        </div>
    )
}
export default Favorites;