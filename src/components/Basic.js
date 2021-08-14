import React from 'react'
import './Bar.css'

// <p>안전한 연구실을 구축하기 위한 노력!</p>
// <p>고려대학교 스마트 캠퍼스 구축팀입니다.</p>

const Basic = () => {
    return (
        <>
          <img src={require("../img/campus1.jpg").default} alt="" width="100%" height="100%" />
          <p>안전한 연구실을 구축하기 위한 노력!</p>
          <p>고려대학교 스마트 캠퍼스 구축팀입니다.</p>
        </>
    )
}

export default Basic
