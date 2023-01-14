import { useContext, useState } from "react";
import { ContextData } from "../../../context/Context";
import "./AdminProducts.css";
import { AdminProductCards } from "../../../components/Cards/Cards";
function AdminProducts(){
    const {productlist, allowed, priceAfterDiscount} = useContext(ContextData);
    const [value] = useState(1000);
    const [page, setPage] = useState(1);
    const listLenght = productlist.filter(item=>(priceAfterDiscount(item.discount, item.originalPrice) < value ? item : priceAfterDiscount(item.discount, item.originalPrice) < value)).length;
    const lastPage = Math.ceil(listLenght/allowed);
    const pageNumbers = [];
    for(let i = 0; i < lastPage; i++){
        pageNumbers.push(i+1);
    }
    return(
        <div className="AdminProductsPage">
        <div className="AdminProductsSide">
                <div className={allowed === 9 ? "AdminProductsList Rectangular9" : allowed === 6 ? "AdminProductsList Rectangular6": "AdminProductsList Rectangular4"}>
                {   productlist.length !== 0 ? 
                    productlist.slice((page-1)*allowed,allowed*page).map((item, index)=>(
                    <div key={index} className="AdminProductCard">
                        <AdminProductCards product={item} pic={item.picture[0]} title={item.title} originalPrice={item.originalPrice} discount={item.discount} currentPrice={priceAfterDiscount(item.discount, item.originalPrice).toFixed(2)}/>
                    </div>))
                    :
                    <div className="ProductsListEmpty">
                        <p>There is no product</p>
                    </div>    
                }
           </div>
           <div className="ProductsPageNumbers">
           { pageNumbers.map(item=>(
                <div onClick={()=>setPage(item)} className={item === page ? "PaginationPage Active" : "PaginationPage"} key={item}>
                    <p>{item}</p>
                </div>
           ))}
           </div>
        </div>
    </div>
    )
}
export default AdminProducts;