import React, { useState } from 'react'
import "./Items.css"
import Item from './Item';
import Footer from './Footer';
// import { useDispatch, useSelector} from "react-redux";
// import { decreaseNum, increaseNum } from '../reducers/reducer';

function Items({products, onAddToCart}) {
    
    return (
        <div className="item">
            <div className="itemImage">
               {products.map((product) => (
                       <Item product={product} key={product.id} onAddToCart={onAddToCart} />
               ))}
            </div>
        </div>
    )
}

export default Items
