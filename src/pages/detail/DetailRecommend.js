import React from 'react'
import './DetailRecommend.css'

const DetailRecommend = () => {
    return (
        <div className="upper">
            <div className="intro">
                <b><p>대학원생 대상 맞춤형 논문 추천 서비스</p>
                <p>★ 고려대학교 AI 선배 개발 ★</p></b>
            </div>
            <div className="photo">
                <img src={require("../../img/prob.jpeg").default} alt="" width="100%" height="100%" />
            </div>            
            <div className="phototitle">
              <p>현재 임시로 마음의소리 웹툰을 넣었으며, 별도의 4컷 만화를 제작해 도입할 예정</p>
            </div>
            <div className="intro">
                <p>고려대학교 디지털정보처는 국내 대학 최초로</p>
                <p>대학생 대상의 인공지능 기반 맞춤형 추천 서비스</p>
                <p>'AI 선배'를 개발했습니다.</p>
            </div>
            <div className="photo">
                <img src={require("../../img/dataku.png").default} alt="" width="100%" height="100%" />
            </div>
            <div className="phototitle">
              <p>고려대학교 디지털정보처</p>
            </div>
            <div className="intro">
                <p>현재 고려대학교 대학원과 협업하여</p>
                <p>대학원생을 위한 '맞춤형 논문 추천 서비스'를</p>
                <p>대학원생에게 제공하고 있습니다.</p>
            </div>
            <div className="photo">
                <img src={require("../../img/textmining2.jpg").default} alt="" width="100%" height="100%" />
            </div>
            <div className="phototitle">
              <p>텍스트 마이닝</p>
            </div>
            <div className="intro">
                <p>'맞춤형 논문 추천 서비스'는 개별 대학원생의</p>
                <p>(1) 지도교수님 및 가까운 교수님의 연구 업적</p>
                <p>(2) 수업 정보</p>
                <p>(3) 도서 정보</p>
                <p>등을 활용하여 학생별로 키워드를 추출한 후</p>
                <br/>
                <p>키워드를 기반으로 해외 저널에 등재된 논문 중</p>
                <p>가장 유사한 논문 10개를</p>
                <p>추천해주는 방식으로 진행되었습니다.</p>
            </div>
            <div className="photo">
                <img src={require("../../img/rec1.png").default} alt="" width="100%" height="100%" />
            </div>
            <div className="photo">
                <img src={require("../../img/rec2.png").default} alt="" width="100%" height="100%" />
            </div>
            <div className="phototitle">
              <p>고려대학교 디지털정보처 AI 선배</p>
              <p>대학원생을 위한 맞춤형 논문 추천 서비스 화면</p>
            </div>
            <div className="intro">
                <p>논문 10개의 저널명, 논문 제목, 논문 키워드, 연구분야에</p>
                <p>대한 정보를 제공하고 있습니다.</p>
                <br/>
                <p>논문의 자세한 내용을 살펴보기를 원하는 사람들은</p>
                <p>[원문보기]를 클릭하여 논문의 원문에 접근할 수 있습니다.</p>
                <br/>
                <b><p>본 서비스가 대학원생들이 논문을 작성하는데 있어</p> 
                <p>많은 도움이 되기를 바랍니다.</p></b>
            </div>
            <div className="photo">
                <img src={require("../../img/qrcode_recommend.png").default} alt="" width="100%" height="100%" />
            </div>
            <div className="phototitle">
              <p>QR 코드로 접속!</p>
            </div>
            <div className="intro">
                <b><p>빅데이터에 기반한 텍스트 마이닝과 유사도 분석을 통해</p>
                <p>최적의 논문을 알려주는 고려대학교 AI 선배.</p>
                <br/>
                <p>대학원생들을 위한 맞춤형 논문 추천 서비스.</p>
                <p>대학원생들의 많은 이용 바랍니다~!</p></b>
            </div>
        </div>
    )
}

export default DetailRecommend
