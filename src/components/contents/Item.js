import React from 'react'
import "./Item.css"

function Item({product}) {

    // const replaceFunc = () => {
    //     let text = product.description;
    //     text = text.replace(/<(\/)?([a-zA-Z]*)(\s[a-zA-Z]*=[^>]*)?(\s)*(\/)?>/ig, "");
    //     return text;
    // }

    console.log(product)
    return (
        <div className="product" id={product.id}>
            <img src={product?.image?.url} alt="" />
            <h4 className="title">{product.name}</h4>
            <span className="price">{product.price.formatted}</span>
            
        </div>
    )
}

export default Item
