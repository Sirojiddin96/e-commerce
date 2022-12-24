import React, { useEffect, useState } from "react";
import ColorfulSneakers from "../utils/images/ColorfulSneakers.svg";
import RedBag from "../utils/images/RedBag.svg";
import BlackBelt from "../utils/images/BlackBelt.jpg";
import BlueGlasses from "../utils/images/BlueGlasses.jpeg";
import BlueSneakers from "../utils/images/BlueSneakers.svg";
import BlueSoleSneakers from "../utils/images/BlueSoleSneakers.svg";
import BrownBelt from "../utils/images/BrownBelt.jpg";
import GreenBelt from "../utils/images/GreenBelt.jpg";
import GreenGlasses from "../utils/images/GreenGlasses.jpeg";
import JapaneseBelt from "../utils/images/JapaneseBelt.jpg";
import MilkyBag from "../utils/images/MilkyBag.svg";
import OrageGlasses from "../utils/images/OrageGlasses.jpg";
import PairSneakers from "../utils/images/PairSneakers.svg";
import RoundGlasses from "../utils/images/RoundGlasses.jpg";
import YellowSneakers from "../utils/images/YellowSneakers.svg";
import CrossBag from "../utils/images/CrossBag.svg";


export const ContextData = React.createContext();

function ContextProvider({children}) {
    const [open, setOpen] = useState(null);
    const [products, setProducts] = useState([
      {id: 0, category: "Sneakers", picture: ColorfulSneakers, title: "Nike Air Max 270 React", originalPrice: 534.33, discount: 24, shippingFee: 5, brand: "Nike"},
      {id: 1, category: "Sneakers", picture: ColorfulSneakers, title: "Nike Air Max 270 React", originalPrice: 534.33, discount: 24, shippingFee: 5, brand: "Airmax"},
      {id: 2, category: "Bags", picture: RedBag, title: "Nike Air Max 270 React", originalPrice: 534.33, discount: 24, shippingFee: 5, brand: "Vans"},
      {id: 3, category: "Sneakers", picture: BlueSneakers, title: "Nike Air Max 270 React", originalPrice: 534.33, discount: 24, shippingFee: 5, brand: "Nike"},
      {id: 4, category: "Sneakers", picture: BlueSoleSneakers, title: "Nike Air Max 270 React", originalPrice: 534.33, discount: 24, shippingFee: 5, brand: "Nike"},
      {id: 5, category: "Sneakers", picture: YellowSneakers, title: "Nike Air Max 270 React", originalPrice: 534.33, discount: 24, shippingFee: 5, brand: "Airmax"},
      {id: 6, category: "Sneakers", picture: PairSneakers, title: "Nike Air Max 270 React", originalPrice: 534.33, discount: 24, shippingFee: 5, brand: "Nike"},
      {id: 7, category: "Sneakers", picture: BlueSneakers, title: "Nike Air Max 270 React", originalPrice: 534.33, discount: 24, shippingFee: 5, brand: "Airmax"},
      {id: 8, category: "Belt", picture: BlackBelt, title: "Nike Air Max 270 React", originalPrice: 534.33, discount: 24, shippingFee: 5, brand: "Peter"},
      {id: 9, category: "Sunglasses", picture: BlueGlasses, title: "Nike Air Max 270 React", originalPrice: 534.33, discount: 24, shippingFee: 5, brand: "Ray-Ban"},
      {id: 10, category: "Belt", picture: BrownBelt, title: "Nike Air Max 270 React", originalPrice: 534.33, discount: 24, shippingFee: 5, brand: "Nike"},
      {id: 11, category: "Belt", picture: GreenBelt, title: "Nike Air Max 270 React", originalPrice: 534.33, discount: 24, shippingFee: 5, brand: "Nike"},
      {id: 12, category: "Bags", picture: MilkyBag, title: "Nike Air Max 270 React", originalPrice: 534.33, discount: 24, shippingFee: 5, brand: "Vans"},
      {id: 13, category: "Bags", picture: MilkyBag, title: "Nike Air Max 270 React", originalPrice: 534.33, discount: 24, shippingFee: 5, brand: "Vans"},
      {id: 14, category: "Bags", picture: MilkyBag, title: "Nike Air Max 270 React", originalPrice: 534.33, discount: 24, shippingFee: 5, brand: "Vans"},
      {id: 15, category: "Belt", picture: JapaneseBelt, title: "Nike Air Max 270 React", originalPrice: 534.33, discount: 24, shippingFee: 5, brand: "Peter"},
      {id: 16, category: "Sunglasses", picture: OrageGlasses, title: "Nike Air Max 270 React", originalPrice: 534.33, discount: 24, shippingFee: 5, brand: "Ray-Ban"},
      {id: 17, category: "Bags", picture: CrossBag, title: "Nike Air Max 270 React", originalPrice: 534.33, discount: 24, shippingFee: 5, brand: "Vans"},
      {id: 18, category: "Bags", picture: MilkyBag, title: "Nike Air Max 270 React", originalPrice: 534.33, discount: 24, shippingFee: 5, brand: "Vans"},
      {id: 19, category: "Bags", picture: MilkyBag, title: "Nike Air Max 270 React", originalPrice: 534.33, discount: 24, shippingFee: 5, brand: "Vans"},
      {id: 20, category: "Sunglasses", picture: RoundGlasses, title: "Nike Air Max 270 React", originalPrice: 534.33, discount: 24, shippingFee: 5, brand: "Ray-Ban"},
      {id: 21, category: "Sunglasses", picture: GreenGlasses, title: "Nike Air Max 270 React", originalPrice: 534.33, discount: 24, shippingFee: 5, brand: "Ray-Ban"},
      {id: 22, category: "Bags", picture: RedBag, title: "Nike Air Max 270 React", originalPrice: 534.33, discount: 24, shippingFee: 5, brand: "Vans"},
      {id: 23, category: "Sunglasses", picture: RoundGlasses, title: "Nike Air Max 270 React", originalPrice: 534.33, discount: 24, shippingFee: 5, brand: "Ray-Ban"},
      {id: 24, category: "Sunglasses", picture: GreenGlasses, title: "Nike Air Max 270 React", originalPrice: 534.33, discount: 24, shippingFee: 5, brand: "Ray-Ban"},
      {id: 25, category: "Sunglasses", picture: RoundGlasses, title: "Nike Air Max 270 React", originalPrice: 534.33, discount: 24, shippingFee: 5, brand: "Ray-Ban"},
      {id: 26, category: "Sunglasses", picture: GreenGlasses, title: "Nike Air Max 270 React", originalPrice: 534.33, discount: 24, shippingFee: 5, brand: "Ray-Ban"},
      {id: 27, category: "Sunglasses", picture: RoundGlasses, title: "Nike Air Max 270 React", originalPrice: 534.33, discount: 24, shippingFee: 5, brand: "Ray-Ban"},
      {id: 28, category: "Sunglasses", picture: GreenGlasses, title: "Nike Air Max 270 React", originalPrice: 534.33, discount: 24, shippingFee: 5, brand: "Ray-Ban"},
      {id: 29, category: "Belt", picture: JapaneseBelt, title: "Nike Air Max 270 React", originalPrice: 534.33, discount: 24, shippingFee: 5, brand: "Peter"},
      {id: 30, category: "Belt", picture: JapaneseBelt, title: "Nike Air Max 270 React", originalPrice: 534.33, discount: 24, shippingFee: 5, brand: "Peter"},
      {id: 31, category: "Belt", picture: JapaneseBelt, title: "Nike Air Max 270 React", originalPrice: 534.33, discount: 24, shippingFee: 5, brand: "Peter"},
      {id: 32, category: "Belt", picture: JapaneseBelt, title: "Nike Air Max 270 React", originalPrice: 534.33, discount: 24, shippingFee: 5, brand: "Peter"},
      {id: 33, category: "Belt", picture: JapaneseBelt, title: "Nike Air Max 270 React", originalPrice: 534.33, discount: 24, shippingFee: 5, brand: "Peter"},
      {id: 34, category: "Belt", picture: JapaneseBelt, title: "Nike Air Max 270 React", originalPrice: 534.33, discount: 24, shippingFee: 5, brand: "Peter"},
      {id: 35, category: "Sneakers", picture: ColorfulSneakers, title: "Nike Air Max 270 React", originalPrice: 534.33, discount: 24, shippingFee: 5, brand: "Airmax"},
      {id: 36, category: "Sneakers", picture: ColorfulSneakers, title: "Nike Air Max 270 React", originalPrice: 534.33, discount: 24, shippingFee: 5, brand: "Nike"}
  ])
    const [brands, setBrands] = useState({})
    const [cart, setCart] = useState(JSON.parse(localStorage.getItem("data")) ? JSON.parse(localStorage.getItem("data")) : []);
    const [Clength, setClength] = useState(cart.length);

      useEffect(() => {
        localStorage.setItem("data", JSON.stringify(cart));
      }, [cart]);

    function sortBrands(){
      products.forEach((item)=>{
        if(item.brand !== brands[item.brand]){
          setBrands({...brands, [item.brand] : item})
        }
      })
    }
    function addCart(i) {
      if(cart.length !== 0){
        cart.forEach((item)=>{
          if(i.id !== item.id){
            setCart([...cart, {...i, quantityInCart: 1}]);
            console.log("Added to cart")
          }else{
            alert("You have already added this item");
          }
      })}else{
        setCart([...cart, {...i, quantityInCart: 1}]);
      }
      
      setClength(cart.length+1);
    }
    

    function toggle(i){
        if(open === i){
          return setOpen(null);
        }
        setOpen(i);
      }
    function priceAfterDiscount(dis, cur){
        return cur - (cur*dis/100);
    }
    function increseQuantity(i){
      setCart(cart.map((elem) => (elem.id === i.id ?
        {...elem, quantityInCart: elem.quantityInCart + 1} : elem
      )));
    }
    function descreaseQuantity(i){
      setCart(cart.map((elem) => (elem.id === i.id && elem.quantityInCart>1 ?
        {...elem, quantityInCart: elem.quantityInCart - 1} : elem
      )));
    }
    function delteCartItem(i){
      setCart(cart.filter((elem)=>(elem.id !== i.id)));
      setClength(cart.length-1); 
    }
    const calcTotal=()=>{
      let totalNumber = 0;
      cart.forEach((item)=>{
          totalNumber += item.quantityInCart*priceAfterDiscount(item.discount, item.originalPrice);
      })
      return totalNumber.toFixed(2);
      }
      const calcShipping=()=>{
        let totalNumber = 0;
        cart.forEach((item)=>{
            totalNumber += item.shippingFee;
        })
        return totalNumber.toFixed(2);
      }
      const checkout=()=>{
        let totalNumber = 0;
        cart.forEach((item)=>{
            totalNumber += item.shippingFee + item.quantityInCart*priceAfterDiscount(item.discount, item.originalPrice);
        })
        return totalNumber.toFixed(2);
      }

    return(
        <ContextData.Provider value={{ brands, checkout, calcShipping, calcTotal, delteCartItem, descreaseQuantity, increseQuantity, Clength, priceAfterDiscount, addCart, cart, products, toggle, open}}>
            {children}
        </ContextData.Provider>
    )

}
export default ContextProvider;

