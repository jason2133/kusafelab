import React from 'react'
import './Bar.css'

// style="margin-left: auto; margin-right: auto; display: block;"
// width="35%" height="35%"

const Bar = () => {
    return (
        <div className = "Template">
            {/* https://sugang.korea.ac.kr/resources/img/login/logo.png */}
            <a href="/">
                <img src = {require('../img/logo.png').default} alt="" />
            </a>
        </div>
    )
}

export default Bar
