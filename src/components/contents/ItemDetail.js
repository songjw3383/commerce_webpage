import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { decreaseNum, increaseNum } from '../reducers/reducer';

import './ItemDetail.css'

function ItemDetail(props) {
    const [itemDetail, setitemDetail] = useState([]);

    const count = useSelector(state => state.num);
    const dispatch = useDispatch();
    useEffect(() => {
        const productDetail = props.location.state.productDetail;
        return setitemDetail(productDetail)
    }, [])

    const replaceFunc = () => {
        let text = props.location.state.productDetail.description;
        text = text.replace(/<(\/)?([a-zA-Z]*)(\s[a-zA-Z]*=[^>]*)?(\s)*(\/)?>/ig, "");
        return text;
    }

    const calcTotalPrice = () => {
        let total = props.location.state.productDetail.price.raw;
        return total * count
    }
    // console.log(props)
    return (
        <div className="itemDetail">
            <div className="itemDetail__left">
                <img src={itemDetail?.image?.url} alt="" />
            </div>
            <div></div>
            <div className="itemDetail__right">
                <span>{itemDetail.name}</span>
                <h4>{replaceFunc()}</h4>
                <div className="itemCalc">
                    <h3>{itemDetail?.price?.formatted_with_code}</h3>
                    <button onClick={() => dispatch(increaseNum())}>+</button>
                    <span>{count}</span>
                    <button onClick={() => dispatch(decreaseNum())}>-</button>
                </div>
                <div className="totalPrice">
                    <span>총 합계 : {calcTotalPrice()} 원</span>
                </div>
                <div className="paymentButton">
                    <button>
                        결제하기
                        </button>
                    <button onClick={() => props.location.onAddToCart(itemDetail.id, count)}>
                        장바구니 담기
                        </button>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail
