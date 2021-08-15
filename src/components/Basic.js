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
          
          <div className="intro">
            <p><b>고려대학교 스마트캠퍼스 커넥터는</b></p>
            <p><b>안전한 연구실을 구축하기 위해 노력합니다.</b></p>
          </div>

          {/* 조선일보 기사 2007 ~ 2015 */}
          <div className="photo">
            <img src={require("../img/labsafe1.jpg").default} alt="" width="100%" height="100%" />
          </div>
          <div className="phototitle">
            <p>출처 : 사흘에 한번꼴 사고 터지는 대학 실험실 (조선일보, 2016)</p>
          </div>
          <div className="writing">
            <p><b>꾸준히 발생하는 대학 실험실 사고 (2007 ~ 2015)</b></p>
            <p>과학기술정보통신부에 따르면 2007~2015년 대학과 정부 출연 연구 기관 등의 실험실에서 난 안전사고는 총 1122건에 달합니다.
              이 가운데 약 89%(999건)가 대학에서 발생했습니다. 사흘에 한 번꼴(연평균 111건)로 대학 실험실에서 안전사고가 발생한 셈입니다.
            </p>
          </div>

          {/* 5년간 2016 ~ 2021 */}
          <div className="photo">
            <img src={require("../img/labsafe2.jpg").default} alt="" width="100%" height="100%" />
          </div>
          <div className="phototitle">
            <p>출처 : "학생만 억울" 산재 적용 못 받는 대학 실험실 (부산일보, 2020)</p>
          </div>
          <div className="writing">
            <p><b>매년 100건 이상 발생하는 대학 실험실 사고 (2016 ~ 2020)</b></p>
            <p>전혜숙(더불어민주당 · 서울 광진구) 의원실이 과학기술정보통신부에 받은 자료에 따르면, 최근 5년간 발생한 실험실 안전사고 842건 중 대학 실험실에서 발생한 사고는 586건(69.8%)에 달합니다.
              피해자 수도 전체 923명 가운데 대학생과 대학원생을 포함한 학생연구원이 637명(69%)으로 가장 많습니다.
            </p>
          </div>

          {/* 비전 제시 */}
          <div className ="vision">
            <h3><b><p>고려대학교 스마트캠퍼스 커넥터는</p>
            <p>ICT/IoT 플랫폼 기반 안전한 연구환경을</p> 
            <p>조성하는데 앞장서겠습니다.</p></b></h3>
          </div>

          {/* 세부항목 제시 */}
          <div className="writing2">
            <p><b>하나. Data 기반 연구실 안전정보시스템</b></p>
            <p>- 법규 준수를 위한 증적 취합, 환경, 위험 정보 취합
              <br/>- 국가연구안전관리본부, 화학물질안전원 등과 MOU 추진
              <br/>- Data Insight 서비스 제공 (환경, 위험정보, 의무사항 등 안내)
            </p>
          </div>

          <div className="writing2">
            <p><b>둘. 사용자 경험을 위한 플랫폼</b></p>
            <p>- 연구실 현황 및 환경 등에 대한 정보 제공
              <br/>- 연구실 안전 책임자/관리자의 만족도 및 편의성 향상
              <br/>- ICT/IoT 기반 사용자 경험 제공을 통한 선순환체계 수립
              <br/>- 연구실 안전 분야 Micro Degree 제공 방안 검토
            </p>
          </div>

          <div className="writing2">
            <p><b>셋. 전문조직 기반의 안정화된 플랫폼 운영</b></p>
            <p>- 법적준거성 확보를 위한 전문조직 구축
              <br/>- 연안법, 산안법, 화관법, 교육시설법, 중대재해법 등 대비
              <br/>- 연구실 안전 분야, 비상상황 대응 전문 분야 등 특성화
              <br/>- 연구실 사고대응 방제센터 플랫폼 구축
            </p>
          </div>

          <div className="writing2">
            <p><b>넷. Web + App 기반 서비스 채계</b></p>
            <p>- 안전포켓북, 비상대응절차, 알림서비스 등 구축
            </p>
          </div>

      </>
    )
}

export default Basic
