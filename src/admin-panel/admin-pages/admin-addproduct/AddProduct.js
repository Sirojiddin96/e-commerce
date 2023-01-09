import { useContext } from "react";
import { ContextData } from "../../../context/Context";
import "./AddProduct.css";
function AddProduct(){
    const {handleInputBrand, handleInputNumber, product, handleInput, handleRasm, handleSend} = useContext(ContextData);
    return(
        <div className="AddProductPage">
            <div className="AddProductPageForm">
                <form onSubmit={(e)=>handleSend(e)}>
                    <p>Product name</p><input type="text" name="title" value={product.title} placeholder="Enter Product name" onInput={(e)=>handleInput(e)}/>
                    <p>Product Category</p>
                    <select onInput={(e)=>handleInput(e)} value={product.category} className="AddProductPageFormSelect" name="category" id="Sorting">
                                <option value="None">None</option>
                                <option value="Sneakers">Sneakers</option>
                                <option value="Bags">Bags</option>
                                <option value="Belt">Belt</option>
                                <option value="Sunglasses">Sunglasses</option>
                    </select>
                     <p>Original Price</p><input type="number" name="originalPrice" value={product.originalPrice} placeholder="Enter Original Price" onInput={(e)=>handleInputNumber(e)}/>
                    <p>Discount</p><input type="number" name="discount" value={product.discount} placeholder="Enter Discount" onInput={(e)=>handleInputNumber(e)}/>
                    <p>Shipping Fee</p><input type="number" name="shippingFee" value={product.shippingFee} placeholder="Enter Shipping Fee" onInput={(e)=>handleInputNumber(e)}/>
                    <p>Brand</p><input type="text" name="brand" value={product.brand} placeholder="Enter Brand" onInput={(e)=>handleInputBrand(e)}/>
                    <p>Description</p><input type="text" name="decription" value={product.decription} placeholder="Enter Decription" onInput={(e)=>handleInput(e)}/>
                    <p>Picture URL</p><input type="text" name="picture" value={product.picture[0]} placeholder="Enter Picture" onInput={(e)=>handleRasm(e)}/>
                    <button className="SubmitButton">Submit</button>
                </form>
            </div>
        </div>
    )
}
export default AddProduct;