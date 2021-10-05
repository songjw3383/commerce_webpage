import React from 'react'
import "./MainContent.css"
import bg1 from '../images/bg1.png'
import bg2 from '../images/1.jpg'
import Footer from './Footer'

function MainContent() {
    return (
        <>
            <div className="content">
                <div className="content one">
                    <img src={bg1} alt="" className="bg1"/>
                    
                </div>
                <div className="content two">
                    <img src={bg2} alt="" />
                    <img src={bg2} alt="" />
                    <img src={bg2} alt="" />
                </div>
                
                <Footer />
            </div>
            
         </>
    )
}

export default MainContent
