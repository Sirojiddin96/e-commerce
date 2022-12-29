import Promotion from "../../assets/images/PromotionImage.svg";
import { PromotionCardONe, PromotionCardTwo, PromotionCardThree, ProductCards, IconCard, HorizontalNewsCard, HorizontalProductCard } from "../../components/Cards/Cards";
import { news } from "../../data/news";
import { useContext, useState } from "react";
import "./Home.css";
import { products, featured } from "../../data/products";
import { services } from "../../data/services";
import {AdvertisementSection} from "../../containers/AdvertisementSection";
import { ContextData } from "../../context/Context";
function Home(){
    const {favorites, cart, priceAfterDiscount} = useContext(ContextData);
    const [module,setModule] = useState("All");
    const [allowed, setAllowed] = useState(8);
    const [loading, setLoading] = useState(false);
    const [count, setCount] = useState(products.length);
    const [productLength] = useState(
        {
            allLength: () =>{return products.length},
            bagsLength: () =>{
                let c = 0;
                products.forEach((elem)=>{
                if(elem.category === "Bags"){
                c++;
                }
                } )
                return c;
                },
            sneakersLength: () =>{
                let c = 0;
                products.forEach((elem)=>{
                    if(elem.category === "Sneakers"){
                        c++;
                    }
                } )
                return c;
            },
            beltLength: () =>{
                let c = 0;
                products.forEach((elem)=>{
                    if(elem.category === "Belt"){
                        c++;
                    }
                } )
                return c;
            },
            sunglassesLength: () =>{
                let c = 0;
                products.forEach((elem)=>{
                    if(elem.category === "Sunglasses"){
                        c++;
                    }
                } )
                return c;
            }
        }
    );
 
    function changeModule(name){
        setLoading(true);
        
        setModule(name);
        if(name === "All"){
            setCount(productLength.allLength);
        }
        else if(name === "Bags"){
            setCount(productLength.bagsLength);
        }
        else if(name === "Sneakers"){
            setCount(productLength.sneakersLength);
        }
        else if(name === "Belt"){
            setCount(productLength.beltLength);
        }else{
            setCount(productLength.sunglassesLength);
        }
        clearchangeAllowed();
        setTimeout(() => {
            setLoading(false);
          }, 10);
    }
    function clearchangeAllowed(){
        setAllowed(8);
    }
    return(
        <div className="HomePage">
            <div className="HomePageSection1">
                <figure>
                    <img src={Promotion} alt="Promotion" />
                </figure>
                <div className="HomePageTitle">
                    <p>Super Flash Sale 50% Off</p>
                </div>
                <div className="HomePageCards"> 
                    <div>
                        <PromotionCardONe product={products[17]} pic={products[17].picture[0]} title={products[17].title} originalPrice={products[17].originalPrice} discount={products[17].discount} currentPrice={priceAfterDiscount(products[17].discount, products[17].originalPrice).toFixed(2)}/>
                    </div>
                    <div>
                        <PromotionCardTwo product={products[5]} pic={products[5].picture[0]} title={products[5].title} originalPrice={products[5].originalPrice} discount={products[5].discount} currentPrice={priceAfterDiscount(products[5].discount, products[5].originalPrice).toFixed(2)}/>
                    </div>
                    <div>
                        <PromotionCardThree product={products[37]} pic={products[37].picture[0]} title={products[37].title} originalPrice={products[37].originalPrice} discount={products[37].discount} currentPrice={priceAfterDiscount(products[37].discount, products[37].originalPrice).toFixed(2)}/>
                    </div>
                </div>
            </div>
            <div className="HomePageSection2">
                <div className="HomePageSection2Title">
                    <p>BEST SELLER</p>
                </div>
                <div className="HomePageSection2Modules">
                    <div onClick={()=>changeModule("All")} className={module === "All"  ? "module active" : "module"}><p>All</p></div>
                    <div onClick={()=>changeModule("Bags")} className={module === "Bags"  ? "module active" : "module"}><p>Bags</p></div>
                    <div onClick={()=>changeModule("Sneakers")} className={module === "Sneakers"  ? "module active" : "module"}><p>Sneakers</p></div>
                    <div onClick={()=>changeModule("Belt")} className={module === "Belt"  ? "module active" : "module"}><p>Belt</p></div>
                    <div onClick={()=>changeModule("Sunglasses")} className={module === "Sunglasses"  ? "module active" : "module"}><p>Sunglasses</p></div>
                </div>
                <div className="HomePageSection2ProductCards">
                    { 
                    loading  ? 
                        <div className="HomePageSection2ProductCardsLoading">
                            <p>Loading...</p>
                        </div>
                     :
                        products.filter((elem)=>{
                            if(elem.category === module){
                                return elem;
                            }else if(module === "All"){
                                return elem;
                            }                       
                        })
                        .map((item, index)=> index<allowed ? (
                            <div key={index} className="ProductsCardHolder">
                                <ProductCards inFavorites={favorites.length ? favorites.filter((elem)=>(elem.id === item.id)).length : false} inCart={cart.length ? cart.filter((elem)=>(elem.id === item.id)).length : false} product={item} pic={item.picture[0]} title={item.title} originalPrice={item.originalPrice} discount={item.discount} currentPrice={priceAfterDiscount(item.discount, item.originalPrice).toFixed(2)}/>
                            </div>
                            ) : <></>
                            
                            )
                        }
                </div>
                {
                    count>allowed ? 
                    <div className="LoadMoreDiv" onClick={()=>setAllowed(allowed+allowed)}>
                        <div>
                            <p>LOAD MORE</p>
                        </div>
                    </div> : <></>
                }
                
            </div>
            <div className="HomePagesSection3">
                <AdvertisementSection/>
            </div>
            <div className="HomePagesSection4">
                {
                    services.map((item, index)=>(
                        <div key={index} className="ServicesCardHolder">
                            <IconCard picture={item.logo} title={item.title} description={item.description}/>
                        </div>
                    ))
                }
            </div>
            <div className="HomePagesSection5">
                <div className="HomePagesSection5Title">
                    <p>LATEST NEWS</p>
                </div>
                <div className="HomePagesSection5Cards">
                    {
                        news.map((item,index)=>(
                            <div className="NewsCardHolder">
                                <HorizontalNewsCard picture={item.picture} date={item.date} title={item.title} description={item.description}/>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className="HomePagesSection6">
                <div className="HomePagesSection6Title">
                    <p>FEATURED PRODUCTS</p>
                </div>
                <div className="FeaturedProductsCards">
                    {
                        featured.map((item, index)=>(
                            <div key={index} className="FeaturedProductsCardHolder">
                                <HorizontalProductCard picture={item.picture} title={item.title} oldPrice={item.originalPrice} newPrice={item.newPrice}/>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
export default Home;