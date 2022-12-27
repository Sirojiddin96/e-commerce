import "./Products.css";
import { useContext } from "react";
import { useState } from "react";
import { ProductCards, ProductCardsHorizontal} from "../../components/Cards/Cards";
import { ContextData } from "../../context/Context";
import { brands } from "../../data/categories";
import { products } from "../../data/products";
import {AdvertisementSectionSmall} from "../../containers/AdvertisementSection";
import RecCardIconGray from "../../assets/icons/RecCardIconGray.svg";
import LineCardIconGray from "../../assets/icons/LineCardIconGray.svg";
import RecCardIconBlue from "../../assets/icons/RecCardIconBlue.svg";
import LineCardIconBlue from "../../assets/icons/LineCardIconBlue.svg";


function Products(){
    const [brandID, setBrandID] = useState("All");
    const {mode, setMode, cart, priceAfterDiscount} = useContext(ContextData);
    const [value, onChange] = useState(1000);
    const [sort, setSort] = useState(products);
    function hangleSorting(e){
        let option = e.target.value;
        if(option === "None"){
        setSort([...products].sort((a, b)=> {
            return a.id - b.id;
        }))
        }else if(option === "Name"){
        setSort([...products].sort((a, b)=> {
            return a.title > b.title ? 1 : -1;
        }))
        }else{
        setSort([...products].sort((a, b) => {
            return a.originalPrice - b.originalPrice;
        } ) )
        }
    }
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
                        <div className="ProductsFilterLeft">
                            <p>{products.filter(item=>(brandID === "All" && priceAfterDiscount(item.discount, item.originalPrice) < value ? item : brandID === item.categoryId && priceAfterDiscount(item.discount, item.originalPrice) < value)).length} Items </p>
                            <p>Sort By</p>
                            <select onInput={(e)=>hangleSorting(e)} name="sort" id="Sorting">
                                <option value="None">None</option>
                                <option value="Name">Name</option>
                                <option value="Price">Price</option>
                            </select>
                        </div>
                        <div className="ProductsFilterRight">
                            <figure onClick={()=>setMode("Rectangular")}>
                                <img src={mode === "Rectangular" ? RecCardIconBlue : RecCardIconGray} alt="RecCardIconGray" />
                            </figure>
                            <figure onClick={()=>setMode("Line")}>
                                <img src={mode === "Line" ? LineCardIconBlue : LineCardIconGray} alt="RecCardIconGray" />
                            </figure>
                        </div>
                    </div>
                    <div className="ProductsList">
                    {
                        sort.map((item, index)=>(brandID === "All" && priceAfterDiscount(item.discount, item.originalPrice) < value ? mode === "Rectangular" ?
                        <div key={index} className="ProductCard">
                            <ProductCards inCart={cart.length ? cart.filter((elem)=>(elem.id === item.id)).length : false} product={item} pic={item.picture} title={item.title} originalPrice={item.originalPrice} discount={item.discount} currentPrice={priceAfterDiscount(item.discount, item.originalPrice).toFixed(2)}/>
                        </div> :
                        <div key={index} className="ProductCardHorizontal">
                            <ProductCardsHorizontal description={item.decription} inCart={cart.length ? cart.filter((elem)=>(elem.id === item.id)).length : false} product={item} pic={item.picture} title={item.title} originalPrice={item.originalPrice} discount={item.discount} currentPrice={priceAfterDiscount(item.discount, item.originalPrice).toFixed(2)}/>
                        </div>  :
                        brandID === item.categoryId && priceAfterDiscount(item.discount, item.originalPrice) < value ? mode === "Rectangular" ?
                        <div key={index} className="ProductCard">
                            <ProductCards inCart={cart.length ? cart.filter((elem)=>(elem.id === item.id)).length : false} product={item} pic={item.picture} title={item.title} originalPrice={item.originalPrice} discount={item.discount} currentPrice={priceAfterDiscount(item.discount, item.originalPrice).toFixed(2)}/>
                        </div> :
                        <div key={index} className="ProductCardHorizontal">
                            <ProductCardsHorizontal description={item.decription} inCart={cart.length ? cart.filter((elem)=>(elem.id === item.id)).length : false} product={item} pic={item.picture} title={item.title} originalPrice={item.originalPrice} discount={item.discount} currentPrice={priceAfterDiscount(item.discount, item.originalPrice).toFixed(2)}/>
                        </div>
                         : <></>
                        )) 
                    }
               </div>
            </div>
        </div>
    )
}
export default Products;
