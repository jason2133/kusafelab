import React from 'react'
import './Bar.css'

// style="margin-left: auto; margin-right: auto; display: block;"
// width="35%" height="35%"

const Bar = () => {
    return (
        <div className = "Template">
            {/* https://sugang.korea.ac.kr/resources/img/login/logo.png */}
            <img src = {require('../img/logo.png').default} alt="" />
        </div>
    )
}

export default Bar
