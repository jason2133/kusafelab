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
                <img src={require("../../img/a_info.jpg").default} alt="" width="100%" height="100%" />
            </div>            
            <div className="phototitle">
              <p>고려대학교 우정정보관 및 미래융합기술관</p>
            </div>
            <div className="quiz">
                    <p>1. <b>[실험 전]</b> 나는 사전유해인자위험분석 보고의 중요성에 대해 인지하고 있으며, 절차를 숙지하고 있다.</p>

                    <p>2. <b>[실험 전]</b> 나는 안전교육을 성실히 이수하고 있으며, 안전교육의 목적이나 필요성에 대해 인지하고 있다.</p>
                    
                    <p>3. <b>[실험 중]</b> 나는 실험 종류에 맞는 올바른 보호구 착용법을 알고 있다.</p>

                    <p>4. <b>[실험 후]</b> 나는 실험 후 정리정돈을 철저하게 하고 있다.</p>

                    <p>5. <b>[실험 후]</b> 나는 실험 후 폐기물 처리과정을 잘 숙지하고 있다.</p>

            </div>
        </div>   
    )
}

export default DetailDaily