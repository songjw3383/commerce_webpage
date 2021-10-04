import React from 'react'
import './Footer.css'
import logo from '../images/logo.png'
function Footer() {
    return (
        <div className="footer">
            <div className="footer__top">
                <div>
                    <h4>Customer Servie</h4>
                    <h2>010-1234-5678</h2>
                    <h5>Mon-Fri 09:00 ~ 18:00</h5>
                </div>
                <div>
                    <h4>Bank Account</h4>
                    <h3>국민 1234-1234-1234</h3>
                    <h5>예금주 : 송재우</h5>
                </div>
                <div>
                    <h4>Company</h4>
                    <h5>서울시 서초구 양재동 0-0 101호</h5>
                    <h5>101-ho Yangjae-dong Secho-gu, Seoul </h5>
                </div>
            </div>
            <div className="footer__bottom">
                <div className="bottom__left">
                    <img src={logo} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Footer
