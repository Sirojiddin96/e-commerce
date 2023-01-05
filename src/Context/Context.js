import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { products } from "../data/products.js";
export const ContextData = React.createContext();

function ContextProvider({children}) {
    const navig = useNavigate();
    const nav = useNavigate();
    const [changed, setChanged] = useState(localStorage.getItem("changed") ? true : false);
    const [adminlog, setAdminlog] = useState(localStorage.getItem("changed") ? true : false);
    const [open, setOpen] = useState(null);
    const [cart, setCart] = useState(JSON.parse(localStorage.getItem("data")) ? JSON.parse(localStorage.getItem("data")) : []);
    const [favorites, setFavorites] = useState(JSON.parse(localStorage.getItem("favorites")) ? JSON.parse(localStorage.getItem("favorites")) : []);
    const [Clength, setClength] = useState(cart.length);
    const [mode, setMode] = useState("Rectangular");
    const [allowed, setAllowed] = useState(mode === "Rectangular" ? 9 : 4);
    const [productlist, setProducts] = useState(changed===true ? (JSON.parse(localStorage.getItem("productlist")) ? JSON.parse(localStorage.getItem("productlist")) : []) : products);
    const [add, setAdd] = useState(false);
    useEffect(() => {
      localStorage.setItem("data", JSON.stringify(cart));
    }, [cart]);
    useEffect(() => {
      localStorage.setItem("favorites", JSON.stringify(favorites));
    }, [favorites]);
    useEffect(() => {
      localStorage.setItem("productlist", JSON.stringify(productlist));
    }, [productlist]);
    const [product, setProduct] = useState(
        {
            id: "",
            title: "",
            category: "",
            originalPrice: "",
            discount: "",
            shippingFee: "",
            brand: "",
            description: "",
            picture: "",
        }
    )
    let handleInput = (e) => {
        setProduct({
          ...product,
          [e.target.name]: e.target.value,
        });
      };
      let handleRasm = (e) => {
        setProduct({
          ...product,
          picture: [...product.picture, e.target.value],
        });
      };
      function clearInput(){
        setProduct({
          id: "",
          title: "",
          category: "",
          originalPrice: "",
          discount: "",
          shippingFee: "",
          brand: "",
          description: "",
          picture: "",
        })
      }
      function handleSend(e){
        e.preventDefault();
        if(product.id === ""){
          setProducts([...productlist, {...product, id: new Date().getTime()}]);
          
        }else{
          setProducts(
            productlist.map((item)=>(
              item.id === product.id ? product : item
            ))
          )
        }
        clearInput();
        setAdd(!add);
        setChanged(true);
        navig("/uhgjobiejfoprfrtyuiyuowiw[wpriirqrr]p[fewfdkfjdlgja")
    }

    function editItem(item){
      nav("/uhgjobiejfoprfrtyuiyuowiw[wpriirqrr]p[fewfdkfjdlgja/AddProduct")
      setAdd(!add);
      setProduct({
        id: item.id,
        title: item.title,
        category: item.category,
        originalPrice: item.originalPrice,
        discount: item.discount,
        shippingFee: item.shippingFee,
        brand: item.brand,
        description: item.description,
        picture: item.picture[0]
      })
    }
     
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
      setCart(cart.map((elem) => (elem.id === i.id && elem.quantityInCart > 1 ?
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
      function AdminDeleteProduct(i){
        setProducts(productlist.filter((elem)=>(elem.id !== i.id)));
        localStorage.setItem("changed", JSON.stringify(true));
        setChanged(true);
      }

    return(
        <ContextData.Provider value={{editItem, setAdd, add, product, handleInput, handleRasm, handleSend, AdminDeleteProduct, productlist, adminlog, setAdminlog, deleteFavorite, addFavorite, favorites, allowed, mode, changeMode, checkout, calcShipping, calcTotal, delteCartItem, descreaseQuantity, increseQuantity, Clength, priceAfterDiscount, addCart, cart, toggle, open}}>
            {children}
        </ContextData.Provider>
    )

}
export default ContextProvider;

