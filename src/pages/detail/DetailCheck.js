import React from 'react'
import './DetailCheck.css'

const DetailCheck = () => {
    return (
        <div className="upper">
            <div className="intro">
                <p><b>일일 안전 점검 체크리스트</b></p>
            </div>
            <div className="photo">
                <img src={require("../../img/hoi5.jpg").default} alt="" width="100%" height="100%" />
            </div>
            <div className="intro">
                <br/><p>오늘 하루도 안전하게 연구하셨나요?</p> 
                <br/><p><b>일일 실험실 안전점검 10계명!</b></p>
            </div>
        </div>
    )
}

export default DetailCheck