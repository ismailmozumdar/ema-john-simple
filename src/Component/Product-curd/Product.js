import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'

const Product = ({handelAddtocart, product}) => {
    // const {handelAddtocart, product} = props;
    const {name, img, seller, price, ratings} = product;
    return (
        <div className='Product'>
            <img src={img} alt="" />
            <div className='info'>
            <p className='Product-name'>{name}</p>
            <p>price: ${price}</p>
            <p>seller: {seller}</p>
            <p>ratings: {ratings}</p>
            </div>
            <button onClick={()=> handelAddtocart(product)} className='btn-cart'>
                <p className='cart-text'>Add to cart </p>
            <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Product;