import React from 'react'
import './Bar.css'
// import Toggle from './Toggle'

// style="margin-left: auto; margin-right: auto; display: block;"
// width="35%" height="35%"

const Bar = () => {
    return (
        <div className = "Template">
            {/* https://sugang.korea.ac.kr/resources/img/login/logo.png */}
            <div className="logo">
                <a href="/">
                    <img src = {require('../img/logo140.png').default} alt="" />
                </a>
                {/* <div className="toggle"> */}
                    {/* <Toggle /> */}
                {/* </div> */}
            </div>
        </div>
    )
}

export default Bar
