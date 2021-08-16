import React, { useState } from 'react'
import Select from 'react-select'

import './DetailExit.css'

const DetailExit = () => {
    const [choice, setChoice] = useState(0)

    return (
        <div className="upper">
            <div className="intro">
                <p><b>비상시 대피 안내</b></p>
                <br/><p>비상대피도를 보고 싶은 건물을 선택하세요.</p>
            </div>
            
            <div className="select">
                <select 
                    className="custom-select"
                    onChange={(e) => {
                        const selectedBuilding = e.target.value
                        setChoice(selectedBuilding)
                    }}
                >

                    <option value="생명과학관(동관)">생명과학관(동관)</option>
                    <option value="생명과학관(서관)">생명과학관(서관)</option>
                </select>
                {choice}
            </div>

            <div className="photobuilding">
                <img src={require("../../img/wooinfo6.jpg").default} alt="" width="100%" height="100%" />
            </div>  
        </div>
    )
}

export default DetailExit