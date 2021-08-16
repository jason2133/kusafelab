import React from 'react'
import './DetailTel.css'

const DetailTel = () => {
    return (
        <div className="upper">
            <div className="intro">
                <p><b>응급상황 전화번호</b></p>
            </div>
            <div className="photo">
                <img src={require("../../img/1919.jpg").default} alt="" width="100%" height="100%" />
            </div>            
            <div className="phototitle">
              <p>고장시 아이구 아이구로 전화하세요!</p>
            </div>
            <div className="intro">
                <b><p>고려대학교 관리처 안전관리팀</p>
                <p>긴급출동요청 02-3290-1919</p></b>
            </div>
            <div className="photo">
                <img src={require("../../img/kumed.jpg").default} alt="" width="100%" height="100%" />
            </div>
            <div className="photo">
                <img src={require("../../img/kumedlogo.jpg").default} alt="" width="100%" height="100%" />
            </div>                        
            {/* <div className="phototitle">
              <p>고려대학교 안암병원</p>
            </div> */}
            <div className="intro">
                <b><p>고려대학교 안암병원</p>
                <p>응급의료센터 02-3290-5373~4</p></b>
            </div>
        </div>
    )
}

export default DetailTel