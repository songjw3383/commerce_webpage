import React from 'react'
import './Footer.css'

function Footer() {
    return (
        <div className="footer">
            <div className="footer__top">
                <div>
                    <h4>고객 서비스</h4>
                </div>
                <div>
                    <h4>법적 고지</h4>
                </div>
                <div>
                    <h4>커뮤니케이션</h4>
                </div>
            </div>
            <div className="footer__bottom">
                <div className="bottom__left">상표</div>
                <div className="bottom__right">회사 정보</div>
            </div>
        </div>
    )
}

export default Footer
