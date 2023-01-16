import { useContext, useEffect, useState } from 'react';
import {
    ProductCards,
    IconCard,
    HorizontalNewsCard,
    PromotionCardONe,
    PromotionCardTwo,
    PromotionCardThree,
} from '../../components/Cards/Cards';
import Footer from '../../containers/Footer';
import { news } from '../../data/news';
import { services } from '../../data/services';
import { lists } from '../../data/categories';
import { AdvertisementSection } from '../../containers/AdvertisementSection';
import { ContextData } from '../../context/Context';
import './Home.css';
import '../../styles/home/home.css';
import {mainProducts} from "../../data/products";
import PromotionImage from '../../assets/images/PromotionImage.svg';
import Header from '../../containers/Header';

function Home() {
    const {
        allow,
        setAllow,
        productlist,
        favorites,
        cart,
        priceAfterDiscount,
    } = useContext(ContextData);
    const [module, setModule] = useState('All');
    const [loading, setLoading] = useState(false);
    const [filteredProds, setFilteredProds] = useState([]);

    function sortProducts(name) {
        setLoading(true);
        setModule(name);
        setAllow(8);
        setTimeout(() => {
            setLoading(false); /// loading
        }, 1000);
        if (name === 'All') return setFilteredProds(productlist);
        const filteredProd = productlist.filter(
            (prod) => prod.category === name,
        );
        setFilteredProds(filteredProd);
    }
    const requestLoadMore = () => setAllow((prevState) => prevState + 8);
    useEffect(() => {
        sortProducts('All');
    }, []);
    return (
        <div className="home-page">
            <Header />
            <div className="home-section">
                <figure>
                    <img src={PromotionImage} alt="Promotion" />
                </figure>
                <div className="banner-title">
                    <p>Super Flash Sale 50% Off</p>
                </div>
                <div className="HomePageCards">
                    <div>
                        <PromotionCardONe
                            product={mainProducts[0]}
                            pic={mainProducts[0].picture[0]}
                            title={mainProducts[0].title}
                            originalPrice={mainProducts[0].originalPrice}
                            discount={mainProducts[0].discount}
                            currentPrice={priceAfterDiscount(
                                mainProducts[0].discount,
                                mainProducts[0].originalPrice,
                            ).toFixed(2)}
                        />
                    </div>
                    <div>
                        <PromotionCardTwo
                            product={mainProducts[1]}
                            pic={mainProducts[1].picture[0]}
                            title={mainProducts[1].title}
                            originalPrice={mainProducts[1].originalPrice}
                            discount={mainProducts[1].discount}
                            currentPrice={priceAfterDiscount(
                                mainProducts[1].discount,
                                mainProducts[1].originalPrice,
                            ).toFixed(2)}
                        />
                    </div>
                    <div>
                        <PromotionCardThree
                            product={mainProducts[2]}
                            pic={mainProducts[2].picture[0]}
                            title={mainProducts[2].title}
                            originalPrice={mainProducts[2].originalPrice}
                            discount={mainProducts[2].discount}
                            currentPrice={priceAfterDiscount(
                                mainProducts[2].discount,
                                mainProducts[2].originalPrice,
                            ).toFixed(2)}
                        />
                    </div>
                </div>
            </div>
            <div className="best-seller-area">
                <div className="best-seller-title">
                    <p>BEST SELLER</p>
                </div>
                <div className="best-seller-section">
                    {lists.map((list) => {
                        return (
                            <div
                                key={list.id}
                                onClick={() => sortProducts(list.name)}
                                className={
                                    module === list.name
                                        ? 'module active'
                                        : 'module'
                                }>
                                <p>{list.name}</p>
                            </div>
                        );
                    })}
                </div>
                <div className="product-lists">
                    {loading ? (
                        <div className="is-loading">
                            <p>Loading...</p>
                        </div>
                    ) : (
                        filteredProds.map((item, index) =>
                            index < allow ? (
                                <div key={index} className="products">
                                    <ProductCards
                                        inFavorites={
                                            favorites.length
                                                ? favorites.filter(
                                                      (elem, i) =>
                                                          elem.id === item.id,
                                                  ).length
                                                : false
                                        }
                                        inCart={
                                            cart.length
                                                ? cart.filter(
                                                      (elem) =>
                                                          elem.id === item.id,
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
                            ) : (
                                <></>
                            ),
                        )
                    )}
                </div>
                {filteredProds.length > allow ? (
                    <div
                        className="load-more-products"
                        onClick={() => requestLoadMore()}>
                        <div>
                            <p>LOAD MORE</p>
                        </div>
                    </div>
                ) : (
                    <></>
                )}
            </div>
            <div className="advertising-section">
                <AdvertisementSection />
            </div>
            <div className="service-section">
                {services.map((item, index) => (
                    <div key={index} className="ServicesCardHolder">
                        <IconCard
                            picture={item.logo}
                            title={item.title}
                            description={item.description}
                        />
                    </div>
                ))}
            </div>
            <div className="news-section">
                <div className="news-title">
                    <p>LATEST NEWS</p>
                </div>
                <div className="common-card">
                    {news.map((item, index) => (
                        <div className="new-card" key={index}>
                            <HorizontalNewsCard
                                picture={item.picture}
                                date={item.date}
                                title={item.title}
                                description={item.description}
                            />
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    );
}
export default Home;
