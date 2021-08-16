import React from 'react'
import './DetailStat.css'

const DetailStat = () => {
    return (
        <div className="upper">
            <div className="intro">
                <b><p>과학고대! 고려대학교에는 생명과학대학,</p>
                <p>공과대학, 보건과학대학, 이과대학 등에</p>
                <p>소속된 수많은 연구실이 있습니다.</p></b>
            </div>
            <div className="photo">
                <img src={require("../../img/kufsd.jpg").default} alt="" width="100%" height="100%" />
            </div>            
            <div className="phototitle">
              <p>1993년, 세계 최초로 자율주행차를 개발한 고려대학교 산업공학과</p>
            </div>
            <div className="intro">
                <p>연구원분들이 연구를 열심히 하면서도,</p>
                <p>종종 안전사고가 발생하기도 하는데요.</p>
            </div>
            <div className="photo">
                <img src={require("../../img/kugc.png").default} alt="" width="100%" height="100%" />
            </div>
            <div className="phototitle">
              <p>고려대학교 안전관리팀</p>
            </div>
            <div className="intro">
                <p>연구실 안전관리에 힘쓰고 있는</p>
                <p><b>고려대학교 안전관리팀</b>의</p>
                <p>2017년부터 2021년까지의</p>
                <p><b>연구실 안전사고 기록을</b></p>
                <p><b>직접 분석</b>해보았습니다.</p>
                <br/>
                <p><b>고려대학교 연구실의 안전사고 현황</b>에</p>
                <p>대해 한 번 알아볼까요?</p>
            </div>
            <div className="photo">
                <img src={require("../../img/accident_count.png").default} alt="" width="100%" height="100%" />
            </div>
            <div className="phototitle">
              <p>출처 : 고려대학교 안전관리팀 연구실사고 기록 (2017~2021)</p>
              <p>단위 : 건</p>
            </div>
            <div className="intro">
                <p>2017~2021년, 고려대학교 연구실에서는</p>
                <p>공과대학 15건, 보건과학대학 7건,</p>
                <p>생명과학대학 6건, 이과대학 8건으로</p>
                <p><b>총 36건의 안전사고가 발생</b>했습니다.</p>
            </div>
            <div className="photo">
                <img src={require("../../img/accident_type.png").default} alt="" width="100%" height="100%" />
            </div>
            <div className="phototitle">
              <p>출처 : 고려대학교 안전관리팀 연구실사고 기록 (2017~2021)</p>
              <p>단위 : 건</p>
            </div>
            <div className="intro">
                <p><b>사고 유형</b>으로는 각각 9건으로</p>
                <p><b>절상과 화학물질 누출</b>이</p>
                <p>가장 많이 발생했습니다.</p>
            </div>
            <div className="photo">
                <img src={require("../../img/accident_cause.png").default} alt="" width="100%" height="100%" />
            </div>
            <div className="phototitle">
              <p>출처 : 고려대학교 안전관리팀 연구실사고 기록 (2017~2021)</p>
              <p>단위 : 건</p>
            </div>
            <div className="intro">
                <p><b>사고 원인</b>으로는 20건으로</p>
                <p><b>실험 중 부주의</b>가</p>
                <p>가장 큰 원인입니다.</p>
            </div>
            <div className="photo">
                <img src={require("../../img/kusv.jpg").default} alt="" width="100%" height="100%" />
            </div>
            <div className="phototitle">
              <p>고려대학교 스마트캠퍼스 커넥터 로고 사진이 없어서 아무거나 넣었습니다</p>
            </div>
            <div className="intro">
                <p><b>고려대학교 스마트캠퍼스 커넥터</b>에서는</p>
                <p><b>안전한 연구 환경을 구축</b>하려고</p>
                <p>노력하고 있습니다.</p>
                <br/>
                <p><b>안전한 연구 환경을 구축</b>하기 위한 활동들,</p>
                <p><b>학우 여러분들의 많은 관심 부탁드립니다!</b></p>
            </div>
        </div>
    )
}

export default DetailStat
