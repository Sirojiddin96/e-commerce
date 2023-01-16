import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { products } from '../data/products.js';
import { brands } from '../data/categories';
export const ContextData = React.createContext();
function ContextProvider({ children }) {
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
    const [Cmodal, setCModal] = useState(false);
    const [Amodal, setAModal] = useState(false);
    const [Aprod, setAProduct] = useState();
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
    }, [windowSize]);

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
        categoryId: '',
        decription: '',
        brand: '',
        picture: '',
    });
    let handleInput = (e) => {
        setProduct({
            ...product,
            [e.target.name]: e.target.value,
        });
    };
    let handleInputNumber = (e) => {
        setProduct({
            ...product,
            [e.target.name]: +e.target.value,
        });
    };
    let handleInputBrand = (e) => {
        let name = e.target.value;
        setProduct({
            ...product,
            brand: name,
        });
        brands.forEach((item) => {
            if (name.includes(item.name)) {
                setProduct({
                    ...product,
                    categoryId: +item.id,
                });
            } else {
                setProduct({
                    ...product,
                    brand: name,
                });
            }
        });
    };
    let handleRasm = (e) => {
        setProduct({
            ...product,
            picture: [...product.picture, e.target.value],
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
            categoryId: '',
            picture: '',
        });
    }
    function handleSend(e) {
        e.preventDefault();
        if (product.id === '') {
            setProducts([
                ...productlist,
                { ...product, id: new Date().getTime() },
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
            description: item.description,
            picture: item.picture[0],
        });
    }

    function addCart(i) {
        if (cart.length !== 0) {
            cart.forEach((item) => {
                if (i.id !== item.id) {
                    setCart([...cart, { ...i, quantityInCart: 1 }]);
                } else {
                    alert('You have already added this item');
                }
            });
        } else {
            setCart([...cart, { ...i, quantityInCart: 1 }]);
        }

        setClength(cart.length + 1);
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
        setCart(cart.filter((elem) => elem.id !== i.id));
        setClength(cart.length - 1);
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
        return totalNumber.toFixed(2);
    };
    function changeMode(modeName) {
        setMode(modeName);
        setAllowed(modeName === 'Rectangular' ? 9 : 4);
    }
    function AdminDeleteProduct(i) {
        setProducts(productlist.filter((elem) => elem.id !== i.id));
        localStorage.setItem('changed', JSON.stringify(true));
        setChanged(true);
    }
    return (
        <ContextData.Provider
            value={{
                Aprod,
                setAProduct,
                Amodal,
                setAModal,
                Cmodal,
                setCModal,
                allow,
                setAllow,
                side,
                setSide,
                modal,
                setModal,
                windowSize,
                menu,
                setMenu,
                handleInputBrand,
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
            }}>
            {children}
        </ContextData.Provider>
    );
}
export default ContextProvider;
