import React from 'react'
import './DetailCheck.css'

const DetailCheck = () => {
    return (
        <div className="upper">
            <div className="intro">
                <p><b>연구실 안전 인지도 점검</b></p>
                <br/><p>나는 지금 안전하게 실험을 하고 있나?</p>
            </div>
            <div className="photo">
                <img src={require("../../img/korea-yonsei.jpg").default} alt="" width="100%" height="100%" />
            </div>            
            <div className="phototitle">
              <p>연구실 안전 인지도 점검</p>
            </div>
            <div className="intro">
                <p>본 페이지 보완 예정, 질문에 따른 체크 후 최종 점수 합산으로 결과 보여주는 방식으로 개발 예정</p>
            </div>
        </div>
    )
}

export default DetailCheck