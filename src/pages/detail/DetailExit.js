import React from 'react'
import './DetailExit.css'

const DetailExit = () => {
    return (
        <div className="upper">
            <div className="intro">
                <p><b>비상시 대피 안내</b></p>
                <br/><p>비상대피도를 보고 싶은 건물을 선택하세요.</p>
            </div>
            <div className="photobuilding">
                <img src={require("../../img/wooinfo6.jpg").default} alt="" width="100%" height="100%" />
            </div>  
        </div>
    )
}

export default DetailExit