import React from 'react'
import './DetailStat.css'

const DetailStat = () => {
    return (
        <div className="upper">
            <div className="intro">
                <b><p>고려대학교 대학원생들을 위한</p>
                <p>관련 사이트들</p></b>
                <br/>
                <p>로고 사진을 클릭하면 해당 사이트에 접속하실 수 있습니다.</p>
            </div>
            
            <div className="photo">
                <a href="https://graduate.korea.ac.kr/grad/index.do" target="_blank" rel="noreferrer">
                    <img src={require("../../img/kugs.PNG").default} alt="" width="100%" height="100%" />
                </a>
            </div>            
            <div className="intro">
                <p>고려대학교 대학원</p>
            </div>

            <div className="photo">
                <a href="https://kugc.korea.ac.kr/kugc/index.do" target="_blank" rel="noreferrer">
                    <img src={require("../../img/kugc.png").default} alt="" width="100%" height="100%" />
                </a>
            </div>            
            <div className="intro">
                <p>고려대학교 안전관리팀</p>
            </div>
            
            <div className="photo">
                <a href="https://irb.korea.ac.kr/" target="_blank" rel="noreferrer">
                    <img src={require("../../img/kuirb.PNG").default} alt="" width="100%" height="100%" />
                </a>
            </div>            
            <div className="intro">
                <p>고려대학교 기관생명윤리위원회</p>
            </div>
            
            <div className="photo">
                <a href="https://library.korea.ac.kr/" target="_blank" rel="noreferrer">
                    <img src={require("../../img/kulib.png").default} alt="" width="100%" height="100%" />
                </a>
            </div>            
            <div className="intro">
                <p>고려대학교 도서관</p>
            </div> 

            <div className="photo">
                <a href="https://data.korea.ac.kr/" target="_blank" rel="noreferrer">
                    <img src={require("../../img/dataku.png").default} alt="" width="100%" height="100%" />
                </a>
            </div>            
            <div className="intro">
                <p>고려대학교 디지털정보처</p>
            </div>               
        </div>
    )
}

export default DetailStat
