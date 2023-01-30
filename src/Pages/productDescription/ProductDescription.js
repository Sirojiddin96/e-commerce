import { useContext } from 'react';
import * as React from 'react';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import { useState} from 'react';
import { ContextData } from '../../context/Context';
import Footer from '../../containers/Footer';
import './ProductDescription.css';
import CartIconRed from '../../assets/icons/CartIconRed.svg';
import CartIconBlue from '../../assets/icons/CartIconBlue.svg';
import HeartIconBlue from '../../assets/icons/HeartIconBlue.svg';
import HeartIconRed from '../../assets/icons/HeartIconRed.svg';
import WhiteClose from "../../assets/icons/WhiteClose.svg";
import Header from '../../containers/Header';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Navigation, Thumbs, Pagination } from "swiper";
const ProductDescription = (props) => {
    const { item, inCart, inFavorites } = props;
    const [zoom, setZoom] = useState(false);
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const { addFavorite, deleteFavorite, priceAfterDiscount, addCart } =
        useContext(ContextData);
    return (
        <>
        {zoom ?
            <div onClick={()=>setZoom(false)} className='image-zoom-back'>
                <div className='zoom-close'><img src={WhiteClose} alt="close" onClick={()=>setZoom(false)} /></div>
                <div  onClick={(event) => event.stopPropagation()} className='image-zoom-content'>
                    <Swiper
                     style={{
                        "--swiper-navigation-color": "#fff",
                        "--swiper-pagination-color": "#fff",
                      }}
                      spaceBetween={10}
                      thumbs={{ swiper: thumbsSwiper }}
                      pagination={{
                          dynamicBullets: true,
                        }}
                        modules={[FreeMode, Navigation, Thumbs]}
                      className="mySwiper3"
                    >
                          {item.picture.map((elem, index) => (
                                <SwiperSlide>
                                    
                                        <img src={elem} key={index} alt="itempicture" className='QuickPinchZoomImage' />
                                </SwiperSlide>
                            ))}
                    </Swiper>
                </div>
            </div> :<></>
        }
        <div className={zoom ? "ProductDescriptionPage noscroll" : "ProductDescriptionPage"}>
            <Header />
            <div className="ProductDescriptionContent">
                <div className="ProductDescriptionPageLeft">
                    <div className="ProductDescriptionImageHolder">
                    <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        spaceBetween={10}
        thumbs={{ swiper: thumbsSwiper }}
        pagination={{
            dynamicBullets: true,
          }}
        modules={[FreeMode, Navigation, Thumbs, Pagination]}
        className="mySwiper2"
      >
                            {item.picture.map((elem, index) => (
                                <SwiperSlide>
                                        <img src={elem} key={index} onClick={()=>setZoom(true)} alt="itempicture" />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
                        {item.picture.map((elem, index) => (
                           <SwiperSlide>
                                <img src={elem} alt="elem" key={index} />
                                </SwiperSlide>
                            
                        ))}
                        </Swiper>
                </div>
                </div>
                <div className="ProductDescriptionPageRight">
                    <div className="ProductDescriptionTitle">
                        <p>{item.title}</p>
                    </div>
                    <div className="ProductDescriptionReview">
                        <Stack
                            onClick={(event) => event.stopPropagation()}
                            spacing={1}>
                            <Rating
                                name="half-rating"
                                defaultValue={2.5}
                                precision={0.5}
                            />
                        </Stack>
                        <p>0 reviews</p>
                        <p>Submit a review</p>
                    </div>
                    <div className="ProductDescriptionBottom">
                        <div className="ProductDescriptionPrice">
                            <p>
                                $
                                {priceAfterDiscount(
                                    item.discount,
                                    item.originalPrice,
                                ).toFixed(2)}
                            </p>
                            <p>
                                <del>${item.originalPrice}</del>
                                <span>{item.discount}% Off</span>
                            </p>
                        </div>
                        <div className="ProductDescription">
                            <p>{item.decription}</p>
                        </div>
                        <div className="Availability">
                            <p>Availability:</p>
                            <p>In stock</p>
                        </div>
                        <div className="Category">
                            <p>Category:</p>
                            <p>{item.category}</p>
                        </div>
                        <div className="Shipping">
                            <p>Shipping: </p>
                            <p>${item.shippingFee}</p>
                        </div>
                        <div className="ProductDescriptionCardsAction">
                            <div
                                onClick={() => addCart(item)}
                                className="ProductDescriptionCardsCart">
                                <figure>
                                    <img
                                        src={
                                            inCart ? CartIconRed : CartIconBlue
                                        }
                                        alt="CartIconRed"
                                    />
                                </figure>
                                <p>Add To Cart</p>
                            </div>
                            <div
                                onClick={() =>
                                    inFavorites
                                        ? deleteFavorite(item)
                                        : addFavorite(item)
                                }
                                className="ProductDescriptionCardsLike">
                                <figure>
                                    <img
                                        src={
                                            inFavorites
                                                ? HeartIconRed
                                                : HeartIconBlue
                                        }
                                        alt="HeartIconBlue"
                                    />
                                </figure>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
        </>
    );
};
export default ProductDescription;