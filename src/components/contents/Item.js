import React from 'react'
import { Link } from 'react-router-dom'
import "./Item.css"

function Item({product, onAddToCart}) {
        console.log(onAddToCart)
        return (
        <div className="product">
            <Link to={{
                pathname: `/Products/${product.id}`,
                onAddToCart: onAddToCart,
                state:{productDetail:product}
            
            }} 
                ><img src={product?.image?.url} alt="" />
            </Link> 
            <h4 className="title">{product.name}</h4>
            <span className="price">{product.price.formatted}원</span>
        </div>
    )
}

export default Item
