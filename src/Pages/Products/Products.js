import "./Products.css";
import { useContext } from "react";
import { useState } from "react";
import Footer from "../../containers/Footer";
import { ProductCards, ProductCardsHorizontal} from "../../components/Cards/Cards";
import { ContextData } from "../../context/Context";
import { brands } from "../../data/categories";
import RecCardIconGray from "../../assets/icons/RecCardIconGray.svg";
import LineCardIconGray from "../../assets/icons/LineCardIconGray.svg";
import RecCardIconBlue from "../../assets/icons/RecCardIconBlue.svg";
import LineCardIconBlue from "../../assets/icons/LineCardIconBlue.svg";
import FilterIcon from "../../assets/icons/FilterIcon.png";
import Header from "../../containers/Header";
function Products(){
    const firstP = "<<";
    const prevP = "<";
    const lastP = ">>";
    const nextP = ">";
    const [brandID, setBrandID] = useState("All");
    const {modal, setModal, productlist, favorites, allowed, mode, changeMode, cart, priceAfterDiscount} = useContext(ContextData);
    const [value, onChange] = useState(1000);
    const [sort, setSort] = useState(productlist);
    const [page, setPage] = useState(1);
    const listLenght = sort.filter(item=>(brandID === "All" && priceAfterDiscount(item.discount, item.originalPrice) < value ? item : brandID === item.categoryId && priceAfterDiscount(item.discount, item.originalPrice) < value)).length;
    const lastPage = Math.ceil(listLenght/allowed);
    const pageNumbers = [];
    const [blank, setBlank] = useState(false);
    const [range, setRange] = useState({beginnig: 0, ending: listLenght > 6 ? 6 : listLenght});
    for(let i = 0; i < lastPage; i++){
        pageNumbers.push(i+1);
    }
    function hangleSorting(e){
        let option = e.target.value;
        if(option === "None"){
        setSort([...sort].sort((a, b)=> {
            return a.id - b.id;
        }))
        }else if(option === "Name A-Z"){
        setSort([...sort].sort((a, b)=> {
            return a.title > b.title ? 1 : -1;
        }))
        }else if(option === "Name Z-A"){
            setSort([...sort].sort((a, b)=> {
                return b.title > a.title ? 1 : -1;
            }))
            }
        else if(option === "Price min-max"){
            setSort([...sort].sort((a, b)=> {
                return a.originalPrice - b.originalPrice;
            }))
            }
        else{
        setSort([...sort].sort((a, b) => {
            return b.originalPrice - a.originalPrice;
        } ) )
        }
    }
    const listFilter = [];
    for (let i = 0; i < sort.length; i++) {
        if(brandID === "All" && priceAfterDiscount(sort[i].discount, sort[i].originalPrice) < value){
            listFilter.push(sort[i]);
        }else if(brandID === sort[i].categoryId && priceAfterDiscount(sort[i].discount, sort[i].originalPrice) < value){
            listFilter.push(sort[i]);
        }
    }
    function settingPage(item){
        setTimeout(()=>setBlank(false), 100);
        setBlank(true);
        setPage(item);
        if(item>=4){
            if(item < lastPage - 2){
                setRange({beginnig: item-1, ending: item + 3});
                console.log(pageNumbers);
            }else if(item === lastPage - 2){
                setRange({beginnig:  item-1, ending: item + 3});
            }else if(item === lastPage - 1){
                setRange({beginnig:  item-2, ending: item + 2});
            }else if(item === lastPage){
                setRange({beginnig:  item-3, ending: item+1});
            }
        }else if(item<4){
            if(item === 3){
                setRange({beginnig: item-1, ending: item + 3});
            }else if(item === 2){
                setRange({beginnig: item-1, ending: item + 4});
            }else{
                setRange({beginnig: item, ending: item + 5});
            }
        }
    }
    return(
        <>
        { blank ? 
        <div style={{height: "100vh"}}>
        </div> :
        <>
        <Header/>
        <div onClick={()=>setModal(false)} className={modal ? "FilterModalBlack Show" : "FilterModalBlack"}>
            </div>
            <div className={modal ? "FilterSideContent Show" : "FilterSideContent"}> 
                <div className="ButtonCloseDiv">
                    <button onClick={()=>setModal(false)}>x</button>
                </div>
                <div className="FilterSideBrands">
                    <p>Brands</p>
                    <div onClick={()=>{setBrandID("All"); setPage(1)}} className={brandID === "All" ? "SidebarBrandsName Active" : "SidebarBrandsName"}>
                            <p>All</p>
                            <p>{productlist.length}</p>
                            </div>
                    {
                        brands.map((item, index)=>(
                            <div onClick={()=>{setBrandID(item.id); setPage(1)}} className={brandID === item.id ? "SidebarBrandsName Active" : "SidebarBrandsName"} key={index}>
                            <p>{item.name}</p>
                            <p>{productlist.filter(elem=>(item.id === elem.categoryId)).length }</p>
                            </div>
                        ))
                    }
                </div>
                <div className="FilterSidePrice">
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
                                            onChange(radius); setPage(1)
                                        }}
                            />
                    </div>
                </div>
            </div>
        <div className="ProductsPage">
            <div className="ProductsPagesSidebar">
                <div className="SidebarBrands">
                    <p>Brands</p>
                    <div onClick={()=>{setBrandID("All"); settingPage(1)}} className={brandID === "All" ? "SidebarBrandsName Active" : "SidebarBrandsName"}>
                            <p>All</p>
                            <p>{productlist.length}</p>
                            </div>
                    {
                        brands.map((item, index)=>(
                            <div onClick={()=>{setBrandID(item.id); settingPage(1)}} className={brandID === item.id ? "SidebarBrandsName Active" : "SidebarBrandsName"} key={index}>
                                <p>{item.name}</p>
                                <p>{productlist.filter(elem=>(item.id === elem.categoryId)).length }</p>
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
                                            onChange(radius); setPage(1)
                                        }}
                            />
                    </div>

                </div>
            </div>
            <div className="ProductsSide">
                    <div className="ProductsFilter">
                        <div className="ProductsFilterLeft">
                            <div><p>{listLenght} Items</p></div>
                            <div><p>Sort By</p></div>
                            <select onInput={(e)=>{hangleSorting(e)}} name="sort" id="Sorting">
                                <option value="None">None</option>
                                <option value="Name A-Z">Name A-Z</option>
                                <option value="Name Z-A">Name Z-A</option>
                                <option value="Price min-max">Price min-max</option>
                                <option value="Price max-min">Price max-min</option>
                            </select>
                            <div><p>Filter</p></div>
                            <div onClick={()=>setModal(true)} className="FilterIconDiv">
                                <figure>
                                    <img src={FilterIcon} alt="FilterIcon" />
                                </figure>
                            </div>
                        </div>
                        <div className="ProductsFilterRight">
                            <figure onClick={()=>{changeMode("Rectangular"); settingPage(1)}}>
                                <img src={mode === "Rectangular" ? RecCardIconBlue : RecCardIconGray} alt="RecCardIconGray" />
                            </figure>
                            <figure onClick={()=>{changeMode("Line"); settingPage(1)}}>
                                <img src={mode === "Line" ? LineCardIconBlue : LineCardIconGray} alt="RecCardIconGray" />
                            </figure>
                        </div>
                    </div>
                    <div className={allowed === 9 ? "ProductsList Rectangular9" : allowed === 6 ? "ProductsList Rectangular6" :  allowed === 4 && mode==="Rectangular" ? "ProductsList Rectangular4" : "ProductsList Line"}>
                    {   listFilter.length !== 0 ? 
                        listFilter.slice((page-1)*allowed,allowed*page).map((item, index)=>(mode === "Rectangular" ?
                        <div key={index} className="ProductCard">
                            <ProductCards inFavorites={favorites.length ? favorites.filter((elem)=>(elem.id === item.id)).length : false} inCart={cart.length ? cart.filter((elem)=>(elem.id === item.id)).length : false} product={item} pic={item.picture[0]} title={item.title} originalPrice={item.originalPrice} discount={item.discount} currentPrice={priceAfterDiscount(item.discount, item.originalPrice).toFixed(2)}/>
                        </div> :
                        <div key={index} className="ProductCardHorizontal">
                            <ProductCardsHorizontal inFavorites={favorites.length ? favorites.filter((elem)=>(elem.id === item.id)).length : false} description={item.decription} inCart={cart.length ? cart.filter((elem)=>(elem.id === item.id)).length : false} product={item} pic={item.picture[0]} title={item.title} originalPrice={item.originalPrice} discount={item.discount} currentPrice={priceAfterDiscount(item.discount, item.originalPrice).toFixed(2)}/>
                        </div> )) : 
                        <div className="ProductsListEmpty">
                            <p>There is no product</p>
                        </div>    
                    }
               </div>
               <div className="ProductsPageNumbers">
                <div className="ProductsPageNumbersLeft"> 
                {    page !== 1 ? 
                    <>
                        <div onClick={()=>settingPage(1)} className={"PaginationPage"}>
                            <p>{firstP}</p>
                        </div>
                        <div onClick={()=>settingPage(page-1)} className={"PaginationPage"}>
                        <p>{prevP}</p>
                        </div>
                    </>
                      : <><div className={"PaginationPage"}></div><div className={"PaginationPage"}></div></>
                }
                {    range.beginnig >= 3 ? 
                        <>
                            <div onClick={()=>settingPage(1)} className={"PaginationPage"}>
                            <p>{1}</p>
                            </div>
                            <div className={"PaginationPage"}>
                                <p>...</p>
                            </div>
                        </>
                        : <><div className={"PaginationPage"}></div><div className={"PaginationPage"}></div></>
                        
                }
                </div>
                <div className="ProductsPageNumbersMiddle">
                {   pageNumbers.map(item=>(item>range.beginnig-2 && item<range.ending ?
                            <div onClick={()=>settingPage(item)} className={item === page ? "PaginationPage Active" : "PaginationPage"} key={item}>
                                <p>{item}</p>
                            </div> : <></>
                ))
                }
                </div>
                <div className="ProductsPageNumbersRight">
                 {    page < lastPage - 2 && lastPage > 5 ? 
                      <>
                      <div className={"PaginationPage"}>
                          <p>...</p>
                      </div>
                      <div onClick={()=>settingPage(lastPage)} className={"PaginationPage"}>
                      <p>{lastPage}</p>
                      </div>
                  </>
                  : <><div className={"PaginationPage"}></div><div className={"PaginationPage"}></div></>
                }
                 {    page !== lastPage ? 
                    <>
                        <div onClick={()=>settingPage(page+1)} className={"PaginationPage"}>
                            <p>{nextP}</p>
                        </div>
                        <div onClick={()=>settingPage(lastPage)} className={"PaginationPage"}>
                            <p>{lastP}</p>
                        </div>
                    </>
                      : <><div className={"PaginationPage"}></div><div className={"PaginationPage"}></div></>
                }
                </div>
               </div>
            </div>
        </div>
        <Footer/>
        </>}
        </>
    )
}

export default Products;
