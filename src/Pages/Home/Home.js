import Promotion from "../../utils/images/PromotionImage.svg";
import { PromotionCardONe, PromotionCardTwo, PromotionCardThree, ProductCards, IconCard, HorizontalNewsCard, HorizontalProductCard } from "../../Components/Cards/Cards";
import CrossBag from "../../utils/images/CrossBag.svg";
import Max270 from "../../utils/images/Max270.svg";
import NikeAir from "../../utils/images/NikeAir.svg";
import { useContext, useState } from "react";
import "./Home.css";


import AdvertisementSection from "../../AdvertisementSection/AdvertisementSection";
import FreeShipping from "../../utils/icons/FreeShipping.svg";
import Refund from "../../utils/icons/Refund.svg";
import Support from "../../utils/icons/Support.svg";
import NikeLogo from "../../utils/icons/NikeLogo.svg";
import FigmaLogo from "../../utils/icons/FigmaLogo.svg";
import KronosLogo from "../../utils/icons/KronosLogo.svg";
import FeaturedShoe from "../../utils/images/FeaturedShoe.svg";
import { ContextData } from "../../Context/Context";
function Home(){
    const {priceAfterDiscount, products} = useContext(ContextData);
    const [module,setModule] = useState("All");
    const [allowed, setAllowed] = useState(8);
    const [promotioProducts] = useState([
        {id: 1, picture: CrossBag, title: "FS - QUILTED MAXI CROSS BAG", originalPrice: 534.33, discount: 24},
        {id: 2, picture: Max270, title: "FS - Nike Air Max 270 React...", originalPrice: 534.33, discount: 24},
        {id: 3, picture: NikeAir, title: "FS - Nike Air Max 270 React...", originalPrice: 534.33, discount: 24},
    ])
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
    const [services] = useState([
        {logo: FreeShipping, title: "FREE SHIPPING", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."},
        {logo: Refund, title: "100% REFUND", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."},
        {logo: Support, title: "SUPPORT 24/7", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."}
    ])
    const [news] = useState([
        {picture: NikeLogo, date: "01 Jan, 2015", title: "Fashion Industry", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."},
        {picture: FigmaLogo, date: "01 Jan, 2015", title: "Best Design Tools", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."},
        {picture: KronosLogo, date: "01 Jan, 2015", title: "HR Community", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."},
    ]);
    const [featured] = useState([
        {picture: FeaturedShoe, title: "Blue Swade Nike Sneakers", originalPrice: 599, newPrice: 499},
        {picture: FeaturedShoe, title: "Blue Swade Nike Sneakers", originalPrice: 599, newPrice: 499},
        {picture: FeaturedShoe, title: "Blue Swade Nike Sneakers", originalPrice: 599, newPrice: 499},
    ])

        
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
                        <PromotionCardONe pic={promotioProducts[0].picture} title={promotioProducts[0].title} originalPrice={promotioProducts[0].originalPrice} discount={promotioProducts[0].discount} currentPrice={priceAfterDiscount(promotioProducts[0].discount, promotioProducts[0].originalPrice).toFixed(2)}/>
                    </div>
                    <div>
                        <PromotionCardTwo pic={promotioProducts[1].picture} title={promotioProducts[1].title} originalPrice={promotioProducts[1].originalPrice} discount={promotioProducts[1].discount} currentPrice={priceAfterDiscount(promotioProducts[1].discount, promotioProducts[1].originalPrice).toFixed(2)}/>
                    </div>
                    <div>
                        <PromotionCardThree pic={promotioProducts[2].picture} title={promotioProducts[2].title} originalPrice={promotioProducts[2].originalPrice} discount={promotioProducts[0].discount} currentPrice={priceAfterDiscount(promotioProducts[2].discount, promotioProducts[2].originalPrice).toFixed(2)}/>
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
                                <ProductCards product={item} pic={item.picture} title={item.title} originalPrice={item.originalPrice} discount={item.discount} currentPrice={priceAfterDiscount(item.discount, item.originalPrice).toFixed(2)}/>
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