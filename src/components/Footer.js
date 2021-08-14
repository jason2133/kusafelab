import React from 'react'
import './Footer.css'

const Footer = () => {
    return (
        <div className="Foot">
            <div className="Logoleft">
                <a href="https://kugc.korea.ac.kr/kugc/index.do" target="_blank" rel="noreferrer">
                    <img src = {require('../img/ku_tiger.svg').default} alt="" />
                </a>
            </div>
            
            <div className="Info">
                <p><b>고려대학교 스마트캠퍼스 커넥터</b> 
                <br/>안전한 연구실팀
                </p>
                <p>[02841] 서울특별시 성북구 안암로 145 고려대학교 서울캠퍼스
                <br/>TEL : 02-3290-
                <br/>E-mail : @korea.ac.kr 
                {/* <br/>Instagram: 
                    <a href="https://www.instagram.com/korea_university_smart/" target="_blank" rel="noreferrer">
                    <img src = {require('../img/insta76.png').default} alt="" />
                    </a> */}
                <br/>    
                <br/>Instagram : <b>
                    <a href="https://www.instagram.com/korea_university_smart/" target="_blank" rel="noreferrer">
                        @korea_university_smart
                    </a>
                </b>
                <br/>Official Website : <b>
                    <a href="https://kugc.korea.ac.kr/kugc/index.do" target="_blank" rel="noreferrer">
                        고려대학교 안전관리팀
                    </a>
                </b>
                </p>
                <p>Copyright (C) 2021 Korea University. All Rights Reserved.</p>
            </div>
            <div className="Clear"></div>
        </div>
    )
}

export default Footer
