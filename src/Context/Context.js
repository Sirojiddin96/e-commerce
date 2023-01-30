import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { products } from '../data/products.js';
import {vouchers} from "../data/voucher";
import Swal from 'sweetalert2';
import 'react-toastify/dist/ReactToastify.css';
export const ContextData = React.createContext();
function ContextProvider({ children }) {
   
    const [brandID, setBrandID] = useState('All');
    const [windowSize, detectW] = useState({ innerWidth: window.innerWidth });
   
    const navig = useNavigate();
    const nav = useNavigate();
    const [changed, setChanged] = useState(
        localStorage.getItem('changed') ? true : false,
    );
    const [adminlog, setAdminlog] = useState(false);
    const [open, setOpen] = useState(null);
    const [cart, setCart] = useState(
        JSON.parse(localStorage.getItem('data'))
            ? JSON.parse(localStorage.getItem('data'))
            : [],
    );
    const [favorites, setFavorites] = useState(
        JSON.parse(localStorage.getItem('favorites'))
            ? JSON.parse(localStorage.getItem('favorites'))
            : [],
    );
    const [Clength, setClength] = useState(cart.length);
    const [mode, setMode] = useState('Rectangular');
    const [allowed, setAllowed] = useState(
        windowSize.innerWidth > 1024
            ? mode === 'Rectangular'
                ? 9
                : 4
            : windowSize.innerWidth >= 460
            ? mode === 'Rectangular'
                ? 6
                : 3
            : mode === 'Rectangular'
            ? 4
            : 2,
    );
    const [productlist, setProducts] = useState(
        changed === true
            ? JSON.parse(localStorage.getItem('productlist'))
                ? JSON.parse(localStorage.getItem('productlist'))
                : []
            : products,
    );
    const [add, setAdd] = useState(false);
    const [menu, setMenu] = useState(false);
    const [modal, setModal] = useState(false);
    const [side, setSide] = useState(false);
    const [allow, setAllow] = useState(8);
    const [voucher, setVoucher] = useState();
    const [coupon, setCoupon] = useState("");
    
    function checkVoucher(e) {
        e.preventDefault();
        vouchers.forEach(element => {
            if(element.code === voucher){
                setCoupon(element.discount);
            }
        });

    }
    const detectScreentWidth = () => {
        detectW({
            innerWidth: window.innerWidth,
        });
        setAllowed(
            windowSize.innerWidth >= 1024
                ? mode === 'Rectangular'
                    ? 9
                    : 4
                : windowSize.innerWidth >= 460
                ? mode === 'Rectangular'
                    ? 6
                    : 4
                : 4,
        );
        setAllowed(
            windowSize.innerWidth >= 1024
                ? mode === 'Rectangular'
                    ? 9
                    : 4
                : windowSize.innerWidth >= 460
                ? mode === 'Rectangular'
                    ? 6
                    : 4
                : 4,
        );
    };
    useEffect(() => {
        window.addEventListener('resize', detectScreentWidth);
        return () => {
            window.removeEventListener('resize', detectScreentWidth);
        };
    });

    useEffect(() => {
        localStorage.setItem('data', JSON.stringify(cart));
    }, [cart]);
    useEffect(() => {
        localStorage.setItem('favorites', JSON.stringify(favorites));
    }, [favorites]);
    useEffect(() => {
        localStorage.setItem('productlist', JSON.stringify(productlist));
    }, [productlist]);
    
    const [product, setProduct] = useState({
        id: '',
        title: '',
        category: '',
        originalPrice: '',
        discount: '',
        shippingFee: '',
        decription: '',
        brand: '',
        picture: [""],
    });
    let handleInput = (e) => {
        setProduct({
            ...product,
            [e.target.name]: e.target.value,
        });
    };
    let handleInputNumber = (e) => {
        if(+e.target.value>0){
            setProduct({
                ...product,
                [e.target.name]: +e.target.value,
            });
        }else{
            setProduct({
                ...product,
                [e.target.name]: "",
            });
        }
    };
    let handleRasm = (e) => {

        setProduct({
            ...product,
            [e.target.name]: [e.target.value]
        });
    };
    function clearInput() {
        setProduct({
            id: '',
            title: '',
            category: '',
            originalPrice: '',
            discount: '',
            shippingFee: '',
            brand: '',
            decription: '',
            picture: [""],
        });
    }
    function handleSend(e) {
        e.preventDefault();
        if (product.id === '') {
            setProducts([
                ...productlist,
                { ...product, id: new Date().getTime()},
            ]);
        } else {
            setProducts(
                productlist.map((item) =>
                    item.id === product.id ? product : item,
                ),
            );
        }
        clearInput();
        setAdd(!add);
        setChanged(true);
        localStorage.setItem('changed', JSON.stringify(true));
        navig('/uhgjobiejfoprfrtyuiyuowiw[wpriirqrr]p[fewfdkfjdlgja');
    }
    function editItem(item) {
        nav('/uhgjobiejfoprfrtyuiyuowiw[wpriirqrr]p[fewfdkfjdlgja/AddProduct');
        setAdd(!add);
        setProduct({
            id: item.id,
            title: item.title,
            category: item.category,
            originalPrice: item.originalPrice,
            discount: item.discount,
            shippingFee: item.shippingFee,
            brand: item.brand,
            decription: item.decription,
            picture: item.picture[0],
        });
    }

    function addCart(n) {
        if (cart.length !== 0) {
            for(let i = 0; i < cart.length; i++){
                if (cart[i].id === n.id) {
                    delteCartItem(i);
                    return;
                } 
            }
            setCart([...cart, { ...n, quantityInCart: 1 }]);
            setClength(cart.length + 1);
        }else{
            setCart([...cart, { ...n, quantityInCart: 1 }]);
            setClength(cart.length + 1);
        }
    }
    function addFavorite(i) {
        setFavorites([...favorites, { ...i, quantityInFavorites: 1 }]);
    }
    function deleteFavorite(i) {
        setFavorites(favorites.filter((elem) => elem.id !== i.id));
    }
    function toggle(i) {
        if (open === i) {
            return setOpen(null);
        }
        setOpen(i);
    }
    function priceAfterDiscount(dis, cur) {
        return cur - (cur * dis) / 100;
    }
    function increseQuantity(i) {
        setCart(
            cart.map((elem) =>
                elem.id === i.id
                    ? { ...elem, quantityInCart: elem.quantityInCart + 1 }
                    : elem,
            ),
        );
    }
    function descreaseQuantity(i) {
        setCart(
            cart.map((elem) =>
                elem.id === i.id && elem.quantityInCart > 1
                    ? { ...elem, quantityInCart: elem.quantityInCart - 1 }
                    : elem,
            ),
        );
    }
    function delteCartItem(i) {
        Swal.fire({
            title: 'Romove from Cart?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, remove it!',
            cancelButtonText: 'No, keep it'
          }).then((result) => {
            if (result.isConfirmed) {
                setCart(cart.filter((elem) => elem.id !== i.id));
                setClength(cart.length - 1);
      }
          })
        
    }
    const calcTotal = () => {
        let totalNumber = 0;
        cart.forEach((item) => {
            totalNumber +=
                item.quantityInCart *
                priceAfterDiscount(item.discount, item.originalPrice);
        });
        return totalNumber.toFixed(2);
    };
    const calcShipping = () => {
        let totalNumber = 0;
        cart.forEach((item) => {
            totalNumber += item.shippingFee;
        });
        return totalNumber;
    };
    const checkout = () => {
        let totalNumber = 0;
        cart.forEach((item) => {
            totalNumber +=
                item.shippingFee +
                item.quantityInCart *
                    priceAfterDiscount(item.discount, item.originalPrice);
        });
        if(coupon === ""){
            return totalNumber.toFixed(2);
        }else{
            return priceAfterDiscount(coupon, totalNumber).toFixed(2);
        }
    };
    function changeMode(modeName) {
        setMode(modeName);
        setAllowed(modeName === 'Rectangular' ? 9 : 4);
    }
    function AdminDeleteProduct(i) {
        Swal.fire({
            title: 'Delete this item?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, keep it'
          }).then((result) => {
            if (result.isConfirmed) {
                setProducts(productlist.filter((elem) => elem.id !== i.id));
                localStorage.setItem('changed', JSON.stringify(true));
                setChanged(true);
      }
          })
    }
    function clearCart(){
        setCart([]);
        setClength(0);
    }
    return (
        <ContextData.Provider
            value={{checkVoucher,
                voucher, setVoucher,coupon,
                allow,
                setAllow,
                side,
                setSide,
                modal,
                setModal,
                windowSize,
                menu,
                setMenu,
                handleInputNumber,
                editItem,
                setAdd,
                add,
                product,
                handleInput,
                handleRasm,
                handleSend,
                AdminDeleteProduct,
                productlist,
                adminlog,
                setAdminlog,
                deleteFavorite,
                addFavorite,
                favorites,
                allowed,
                mode,
                changeMode,
                checkout,
                calcShipping,
                calcTotal,
                delteCartItem,
                descreaseQuantity,
                increseQuantity,
                Clength,
                priceAfterDiscount,
                addCart,
                cart,
                toggle,
                open,
                clearCart,
                brandID, setBrandID,
              
            }}>
            {children}
        </ContextData.Provider>
    );
}
export default ContextProvider;
