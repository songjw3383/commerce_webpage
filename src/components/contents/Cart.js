import React from 'react'
import './Cart.css'

function Cart({cart, handleUpdateCartQty, handleRemoveFromCart, handleEmpty}) {
    const isEmpty = !cart?.line_items?.length;
    
    const EmptyCart = () => {
        return <div className="emptyMsg">You have no items in your shopping cart, Please adding some items!</div>
    };
    
    const FilledCart = () => (
        <div className="cart__list">
            <div className="cart__title">
                <ul>
                    <li>Image</li>
                    <li>Name</li>
                    <li>Quantity</li>
                    <li>Price</li>
                    <button onClick={handleEmpty}>Remove all</button>
                </ul>
            </div>
            {cart.line_items.map((item) => (
                <div className="cart__item" key={item.id}>
                    <img src={item.image.url} alt="" />
                    <span className="item__title">{item.name}</span>
                    <button onClick={() => handleUpdateCartQty(item.id, item.quantity + 1)}>+</button><span>{item.quantity}</span><button onClick={() => handleUpdateCartQty(item.id, item.quantity -1)}>-</button>
                    <span>{item.line_total.formatted_with_code}</span>
                    <button className="remove_item" onClick={() => handleRemoveFromCart(item.id)}>Remove</button>
                </div>
            ))}
            <div className="cart__total">
                <h4>order total</h4>
                <h4>{cart.subtotal.formatted_with_code}</h4>
            </div>
        </div>
    )
    
    return (
        <div className="cart">
            <h4>장바구니</h4>
            { isEmpty ? <EmptyCart /> : <FilledCart />}
        </div>
    )
}

export default Cart
