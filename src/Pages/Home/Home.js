import { useContext, useEffect, useState } from "react";
import {
    ProductCards,
    IconCard,
    HorizontalNewsCard,
    HorizontalProductCard
} from "../../components/Cards/Cards";
import { news } from "../../data/news";
import { products, featured } from "../../data/products";
import { services } from "../../data/services";
import { lists } from '../../data/categories';
import { AdvertisementSection } from "../../containers/AdvertisementSection";
import { ContextData } from "../../context/Context";
import PromotionCard from '../../components/Promotion';
import "./Home.css";
import "../../styles/home/home.css";

import PromotionImage from "../../assets/images/PromotionImage.svg";

function Home() {
    const { favorites, cart, priceAfterDiscount } = useContext(ContextData);
    const [module, setModule] = useState("All");
    const [allowed, setAllowed] = useState(8);
    const [loading, setLoading] = useState(false);
    const [filteredProds, setFilteredProds] = useState([])

    function sortProducts(name) {
        setLoading(true);
        setModule(name);
        setAllowed(8)
        setTimeout(() => {
            setLoading(false); /// loading
        }, 1000);
        if (name === 'All') return setFilteredProds(products)
        const filteredProd = products.filter(prod => prod.category === name)
        setFilteredProds(filteredProd)
    }
    const promotionProds = () => {
        return products.filter(prod => prod.category === 'Promotion')
    }
    const requestLoadMore = () => setAllowed(prevState => prevState + 8)
    useEffect(() => {
        sortProducts('All')
    }, [])
    return (
        <div className="home-page">
            <div className="home-section">
                <figure>
                    <img src={PromotionImage} alt="Promotion" />
                </figure>
                <div className="banner-title">
                    <p>Super Flash Sale 50% Off</p>
                </div>
                <div className="promotion-cards">
                    {promotionProds().map((product, index) => {
                        return (
                            <PromotionCard
                                index={index}
                                key={product.id}
                                product={product}
                                pic={product.picture[0]}
                                title={product.title}
                                originalPrice={product.originalPrice}
                                discount={product.discount}
                                currentPrice={priceAfterDiscount(product.discount, product.originalPrice).toFixed(2)}
                            />
                        )
                    })}
                </div>
            </div>
            <div className="best-seller-area">
                <div className="best-seller-title">
                    <p>BEST SELLER</p>
                </div>
                <div className="best-seller-section">
                    {
                        lists.map(list => {
                            return (
                                <div
                                    key={list.id}
                                    onClick={() => sortProducts(list.name)}
                                    className={module === list.name ? "module active" : "module"}><p>{list.name}</p></div>
                            )
                        })
                    }
                </div>
                <div className="product-lists">
                    {
                        loading ?
                            <div className="is-loading">
                                <p>Loading...</p>
                            </div>
                            :
                            filteredProds.map((item, index) => index < allowed ? (
                                <div key={index} className="products">
                                    <ProductCards
                                        inFavorites={favorites.length ?
                                            favorites.filter((elem) => (elem.id === item.id)).length : false}
                                        inCart={cart.length ? cart.filter((elem) => (elem.id === item.id)).length : false}
                                        product={item}
                                        pic={item.picture[0]}
                                        title={item.title}
                                        originalPrice={item.originalPrice}
                                        discount={item.discount}
                                        currentPrice={priceAfterDiscount(item.discount, item.originalPrice).toFixed(2)} />
                                </div>
                            ) :
                                <></>

                            )
                    }
                </div>
                {
                    filteredProds.length > allowed ?
                        <div
                            className="load-more-products"
                            onClick={() => requestLoadMore()}>
                            <div>
                                <p>LOAD MORE</p>
                            </div>
                        </div> : <></>
                }

            </div>
            <div className="advertising-section">
                <AdvertisementSection />
            </div>
            <div className="service-section">
                {
                    services.map((item, index) => (
                        <div key={index} className="ServicesCardHolder">
                            <IconCard
                                picture={item.logo}
                                title={item.title}
                                description={item.description}
                            />
                        </div>
                    ))
                }
            </div>
            <div className="news-section">
                <div className="news-title">
                    <p>LATEST NEWS</p>
                </div>
                <div className="common-card">
                    {
                        news.map((item, index) => (
                            <div className="new-card" key={index}>
                                <HorizontalNewsCard
                                    picture={item.picture}
                                    date={item.date}
                                    title={item.title}
                                    description={item.description}
                                />
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className="featured-products">
                <div className="featured-title">
                    <p>FEATURED PRODUCTS</p>
                </div>
                <div className="common-card">
                    {
                        featured.map((item, index) => (
                            <div key={index} className="feature-card">
                                <HorizontalProductCard
                                    picture={item.picture}
                                    title={item.title}
                                    oldPrice={item.originalPrice}
                                    newPrice={item.newPrice}
                                />
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
export default Home;