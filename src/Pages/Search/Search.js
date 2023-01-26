import { useContext } from 'react';
import { ContextData } from '../../context/Context';
import { useState } from 'react';
import { ProductCards } from '../../components/Cards/Cards';
import './Search.css';
import Header from '../../containers/Header';
function Search() {
    const [search, setSearch] = useState('');
    const { favorites, cart, priceAfterDiscount, productlist } =
        useContext(ContextData);
    return (
        <div className="SearchPage">
            <Header />
            <div className="SearchInputDiv">
                <input
                    onChange={(e) => setSearch(e.target.value)}
                    type="text"
                    placeholder="Type in the product name"
                />
            </div>
            <div className="SearchProducts">
                {productlist
                    .filter((elem) => {
                        if (elem.name === '') {
                            return elem;
                        } else if (
                            elem.title
                                .toLowerCase()
                                .includes(search.toLowerCase())
                        ) {
                            return elem;
                        }
                    })
                    .map((item, index) => (
                        <div className="SearchProductsHolder" key={index}>
                            <ProductCards
                                inFavorites={
                                    favorites.length
                                        ? favorites.filter(
                                              (elem) => elem.id === item.id,
                                          ).length
                                        : false
                                }
                                inCart={
                                    cart.length
                                        ? cart.filter(
                                              (elem) => elem.id === item.id,
                                          ).length
                                        : false
                                }
                                product={item}
                                pic={item.picture[0]}
                                title={item.title}
                                originalPrice={item.originalPrice}
                                discount={item.discount}
                                currentPrice={priceAfterDiscount(
                                    item.discount,
                                    item.originalPrice,
                                ).toFixed(2)}
                            />
                        </div>
                    ))}
            </div>
        </div>
    );
}
export default Search;
