import React from 'react'
import './DetailDaily.css'

const DetailDaily = () => {
    return (
        <div className="upper">
            <div className="intro">
                <p><b>연구실 안전 인지도 점검</b></p>
                <br/><p>연구실 안전 인지도 점검하기</p>
            </div>
            <div className="photo">
                <img src={require("../../img/korea-yonsei.jpg").default} alt="" width="100%" height="100%" />
            </div>            
            <div className="phototitle">
              <p>연구실 안전 인지도 점검</p>
            </div>
            <div className="intro">
                <p>본 페이지 보완 예정, 체크박스 형식으로 개발 예정</p>
            </div>
        </div>   
    )
}

export default DetailDaily