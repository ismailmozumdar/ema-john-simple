import React, { useEffect, useState } from 'react';
import Cart from '../cadt/cart';
import Product from '../Product-curd/Product';
import './Shop.css'

const Shop = () => {
    const [product, setProduct] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProduct(data))
    }, [])
    const handelAddtocart = (product) =>{
        const newCart = [...cart, product]
        setCart(newCart)
    }

    return (
        <div className='Shop-container'>
            <div className='Product-container'>
            {
                product.map(product=> <Product
                    key={product.id}
                    product={product}
                    handelAddtocart={handelAddtocart}
                    ></Product>)
            }
            </div>
            <div className='caurd-container App'>
            <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;