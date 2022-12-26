import "./Products.css";
import { useContext } from "react";
import { useState } from "react";
import { ProductCards } from "../../components/Cards/Cards";
import { ContextData } from "../../context/Context";
import { brands } from "../../data/categories";
import { products } from "../../data/products";
import {AdvertisementSectionSmall} from "../../containers/AdvertisementSection";
import Accordion from "../../components/Accordion/Accordion";
import RecCardIconGray from "../../assets/icons/RecCardIconGray.svg";
import LineCardIconGray from "../../assets/icons/LineCardIconGray.svg";


function Products(){
    const [brandID, setBrandID] = useState("All");
    const {cart, priceAfterDiscount} = useContext(ContextData);
    const [value, onChange] = useState(1000);

    return(
        <div className="ProductsPage">
            <div className="ProductsPagesSidebar">
                <div className="SidebarBrands">
                    <p>Brands</p>
                    <div onClick={()=>setBrandID("All")} className={brandID === "All" ? "SidebarBrandsName Active" : "SidebarBrandsName"}>
                            <p>All</p>
                            <p>{products.length}</p>
                            </div>
                    {
                        brands.map((item, index)=>(
                            <div onClick={()=>setBrandID(item.id)} className={brandID === item.id ? "SidebarBrandsName Active" : "SidebarBrandsName"} key={index}>
                            <p>{item.name}</p>
                            <p>{products.filter(elem=>(item.id === elem.categoryId)).length }</p>
                            </div>
                        ))
                    }
                </div>
                <div className="PriceFilter">
                        <p>PRICES</p>
                    <div>
                        <p>Ranger: </p>
                        <p>$1-${value}</p>
                    </div>
                    <div>
                    <input 
                        type="range"
                        min="1" 
                        max="1000"
                        value={value}
                        onChange={({ target: { value: radius } }) => {
                                            onChange(radius);
                                        }}
                            />
                    </div>

                </div>
            </div>
            <div className="ProductsSide">
                    <div className="AdvertisementSectionLeft">
                    <AdvertisementSectionSmall/>
                    </div>
                    <div className="ProductsFilter">
                        <p>13 items</p>
                        <p>Sort By</p>
                        <span>
                            <Accordion title="Name" open={0} currentIndex={1} contents={["brands", "name"]}/>
                        </span>
                        <p>Show</p>
                        <span>
                            <Accordion title="12" open={0} currentIndex={1} contents={["8", "7"]}/>
                        </span>
                        <div>
                            <figure>
                                <img src={RecCardIconGray} alt="RecCardIconGray" />
                            </figure>
                            <figure>
                                <img src={LineCardIconGray} alt="RecCardIconGray" />
                            </figure>
                        </div>
                    </div>
                    <div className="ProductsList">
                    {
                        products.map((item, index)=>(brandID === "All" && priceAfterDiscount(item.discount, item.originalPrice) < value? 
                        <div key={index} className="ProductCard">
                        <ProductCards inCart={cart.length ? cart.filter((elem)=>(elem.id === item.id)).length : false} product={item} pic={item.picture} title={item.title} originalPrice={item.originalPrice} discount={item.discount} currentPrice={priceAfterDiscount(item.discount, item.originalPrice).toFixed(2)}/>
                        </div> :
                        brandID === item.categoryId && priceAfterDiscount(item.discount, item.originalPrice) < value ?
                        <div key={index} className="ProductCard">
                            <ProductCards inCart={cart.length ? cart.filter((elem)=>(elem.id === item.id)).length : false} product={item} pic={item.picture} title={item.title} originalPrice={item.originalPrice} discount={item.discount} currentPrice={priceAfterDiscount(item.discount, item.originalPrice).toFixed(2)}/>
                        </div> : <></>
                        )) 
                    }
               </div>
            </div>
        </div>
    )
}
export default Products;
