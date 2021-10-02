import React from 'react'
import "./About.css"
import logo from "../images/logo.png"
function About() {
    return (
        <div className="about">
            <div className="title">
            <span>Who are we?</span>
            </div>
            <div className="description">
                <p>저희 브랜드는 2021년부터 설립되었으며 여유있는 실루엣과 소재를 바탕으로 편안한 착용감을 추구하는 스트리트 캐주얼 기반 브랜드입니다.
                이번 봄/여름 컬렉션 주제는 'NEW AND FLOWER' 이며, 각자가 생각하는 아름다운 꽃이 무엇인지에 대한 질문을 통해 의류에 담아봤습니다.</p>

                <p>Our brand was established in 2021 and is a street casual-based brand that pursues a comfortable fit based on a relaxed silhouette and material.
                The theme of this spring/summer collection is 'NEW AND FLOWER', and we put it into clothing by asking what beautiful flowers each of us thinks.</p>
            </div>
            <div className="logo">
                <img src={logo} alt="" />
            </div>
        </div>
    )
}

export default About
