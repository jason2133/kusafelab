import React from 'react'
import './Footer.css'

const Footer = () => {
    return (
        <div className="Foot">
          <p>Instagram : @korea_university_smart</p>
          <p>Copyright (C) 2021 Korea University. All Rights Reserved.</p>
          <div className="Logo">
            <a href="https://stat.korea.ac.kr/stat/index.do" target="_blank" rel="noreferrer">
                <img src = {require('../img/ku_tiger.svg').default} alt="" />
            </a>
            <a href="https://stat.korea.ac.kr/stat/index.do" target="_blank" rel="noreferrer">
                <img src = {require('../img/insta76.png').default} alt="" />
            </a>            
          </div>
        </div>
    )
}

export default Footer
