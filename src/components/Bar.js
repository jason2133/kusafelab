import React from 'react'
import './Bar.css'
import Navigation from './Navigation'

// style="margin-left: auto; margin-right: auto; display: block;"
// width="35%" height="35%"

const Bar = () => {
    return (
        <div className = "Template">
            {/* https://sugang.korea.ac.kr/resources/img/login/logo.png */}
            <div className="logo">
                <a href="/">
                    <img src = {require('../img/logo.png').default} alt="" />
                </a>
            </div>
            <div className="toggle">
                <Navigation />
            </div>
        </div>
    )
}

export default Bar
