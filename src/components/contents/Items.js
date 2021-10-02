import React, { useState } from 'react'
import "./Items.css"
import Item from './Item';
// import { useDispatch, useSelector} from "react-redux";
// import { decreaseNum, increaseNum } from '../reducers/reducer';

function Items({products}) {
    
    return (
        <div className="item">
            <div className="itemImage">
               {products.map((product) => (
                       <Item product={product} />
               ))}
            </div>
        </div>
    )
}

export default Items
