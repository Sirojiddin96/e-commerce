import React, { useEffect, useState } from "react";

export const ContextData = React.createContext();

function ContextProvider({children}) {
    const [open, setOpen] = useState(null);
    const [cart, setCart] = useState(JSON.parse(localStorage.getItem("data")) ? JSON.parse(localStorage.getItem("data")) : []);
    const [favorites, setFavorites] = useState(JSON.parse(localStorage.getItem("favorites")) ? JSON.parse(localStorage.getItem("favorites")) : []);
    const [Clength, setClength] = useState(cart.length);
    const [mode, setMode] = useState("Rectangular");
    const [allowed, setAllowed] = useState(mode === "Rectangular" ? 9 : 4)
      useEffect(() => {
        localStorage.setItem("data", JSON.stringify(cart));
      }, [cart]);
      useEffect(() => {
        localStorage.setItem("favorites", JSON.stringify(favorites));
      }, [favorites]);
    function addCart(i) {
      if(cart.length !== 0){
        cart.forEach((item)=>{
          if(i.id !== item.id){
            setCart([...cart, {...i, quantityInCart: 1}]);
          }else{
            alert("You have already added this item");
          }
      })}else{
        setCart([...cart, {...i, quantityInCart: 1}]);
      }
      
      setClength(cart.length+1);
    }
    function addFavorite(i) {
            setFavorites([...favorites, {...i, quantityInFavorites: 1}]);
        }
    function deleteFavorite(i){
      setFavorites(favorites.filter((elem)=>(elem.id !== i.id )));
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
      function changeMode(modeName){
        setMode(modeName);
        setAllowed(modeName === "Rectangular" ? 9 : 4);
      }

    return(
        <ContextData.Provider value={{deleteFavorite, addFavorite, favorites, allowed, mode, changeMode, checkout, calcShipping, calcTotal, delteCartItem, descreaseQuantity, increseQuantity, Clength, priceAfterDiscount, addCart, cart, toggle, open}}>
            {children}
        </ContextData.Provider>
    )

}
export default ContextProvider;

