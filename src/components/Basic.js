import React from 'react'
import './Basic.css'

// <p>안전한 연구실을 구축하기 위한 노력!</p>
// <p>고려대학교 스마트 캠퍼스 구축팀입니다.</p>

const Basic = () => {
    return (
      <>
        <div className="container">
          {/*  width="100%" height="100%" */}
          <img src={require("../img/back70.PNG").default} alt="" width="100%" height="100%" />
          
          <div className="name">
            <span>KU SAFE LAB</span>
            <span>Smart Campus Connector,
              <br/>Korea University
            </span>
          </div>
          
          {/* <div className="topleft">
          <h1>KU SAFE LAB</h1>
          <h4>Smart Campus Connector,
          <br/>Korea University</h4> 
          </div> */}
          </div>
          
          <div className="content">
            <p>안전한 연구실을 구축하기 위한 노력!</p>
            <p>고려대학교 스마트캠퍼스 커넥터입니다.</p>
          </div>
      </>
    )
}

export default Basic
