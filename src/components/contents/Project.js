import React from 'react'
import './Project.css'
import Fade from 'react-reveal/Fade'

import vid1 from '../images/project__src/video1.mp4'
import bg1 from '../images/project__src/1.jpg'
import bg2 from '../images/project__src/2.jpg'
import bg3 from '../images/project__src/3.jpg'
import bg4 from '../images/project__src/4.jpg'
import bg5 from '../images/project__src/5.jpg'
import bg6 from '../images/project__src/6.jpg'

function Project() {
    return (
        <>
            <div className="project">
                <div className="content__one">
                    <video className="vid1" autoPlay muted src={vid1}></video>
                </div>
                <div className="content__two">
                    <Fade bottom>
                        <img src={bg1} alt="" />
                        <img src={bg2} alt="" />
                        <img src={bg3} alt="" />
                        <img src={bg4} alt="" />
                        <img src={bg5} alt="" />
                        <img src={bg6} alt="" />
                    </Fade>
                </div>
            </div>

        </>
    )
}
export default Project
