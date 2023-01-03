import React from 'react'
import { useNavigate } from "react-router-dom";

import "../styles/components/promotions.css"

const Promotion = (props) => {
  const navig = useNavigate();
  const { product, pic, title, originalPrice, discount, currentPrice, index } = props;
  const price = index === 0 ? 'price-bottom' : index === 1 ? 'price-top' : 'last-prod-price';
  const discountClass = index === 0 ? 'first-prod-discount' : index === 1 ? 'second-prod-discount' : 'last-prod-discount';

  const navigateToDetails = (prodId) => {
    navig(`/products/${prodId}`)
  }

  return (
    <div onClick={() => navigateToDetails(product.id)} className="promotion">
      <div>
        <span className='product-title'>{title}</span>
        <span className={`default ${price}`}>${currentPrice}</span>
      </div>
      <figure><img src={pic} alt="product"/></figure>
      <div className={discountClass}>
        <del className='original-price'>${originalPrice}</del>
        <span className="product-discount">{discount}% Off</span>
      </div>
    </div>
  )
}

export default Promotion