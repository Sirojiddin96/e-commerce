import React, { useEffect, useState } from "react";
export const ContextData = React.createContext();

function ContextProvider({children}) {
    const [open, setOpen] = useState(null);
    const [cart, setCart] = useState(JSON.parse(localStorage.getItem("data")) ? JSON.parse(localStorage.getItem("data")) : []);
    const [Clength, setClength] = useState(cart.length);

      useEffect(() => {
        localStorage.setItem("data", JSON.stringify(cart));
      }, [cart]);

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
        <ContextData.Provider value={{checkout, calcShipping, calcTotal, delteCartItem, descreaseQuantity, increseQuantity, Clength, priceAfterDiscount, addCart, cart, toggle, open}}>
            {children}
        </ContextData.Provider>
    )

}
export default ContextProvider;

