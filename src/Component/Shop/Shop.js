import React, { useEffect, useState } from 'react';
import { addToDb, getStoryes } from '../../utilities/fakedb';
import Cart from '../cadt/cart';
import Product from '../Product-curd/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProduct] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProduct(data))
    }, [])
    useEffect(() => {
        const storedCart = getStoryes();
        for(const id in  storedCart){
        const addProduct = products.find(product => product.id === id);
        console.log(addProduct)
    }
    }, [products])
    const handelAddtocart = (product) =>{
        const newCart = [...cart, product]
        setCart(newCart)
        addToDb(product.id)
    }


    return (
        <div className='Shop-container'>
            <div className='Product-container'>
            {
                products.map(product=> <Product
                    key={product.id}
                    product={product}
                    handelAddtocart={handelAddtocart}
                    ></Product>)
            }
            </div>
            <div className='caurd-container'>
            <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;