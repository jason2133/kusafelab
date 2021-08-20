import React from 'react'
import './DetailDaily.css'

const DetailDaily = () => {
    function Calculate() {
        if (document.test.q1[0].checked) {
            var a1 = 1;
        }
        else if (document.test.q1[1].checked) {
            // eslint-disable-next-line
            var a1 = 0;
        }

        if (document.test.q2[0].checked) {
            var a2 = 1;
        }
        else if (document.test.q2[1].checked) {
            // eslint-disable-next-line
            var a2 = 0;
        }

        if (document.test.q3[0].checked) {
            var a3 = 1;
        }
        else if (document.test.q3[1].checked) {
            // eslint-disable-next-line
            var a3 = 0;
        }

        if (document.test.q4[0].checked) {
            var a4 = 1;
        }
        else if (document.test.q4[1].checked) {
            // eslint-disable-next-line
            var a4 = 0;
        }

        if (document.test.q5[0].checked) {
            var a5 = 1;
        }
        else if (document.test.q5[1].checked) {
            // eslint-disable-next-line
            var a5 = 0;
        }

        var score = ((a1 + a2 + a3 + a4 + a5) * 1)

        if ( -0.5 < score & score < 1.1) {
            alert('안전 불감증이 의심됩니다. 안전사고를 예방하기 위해서는 안전수칙을 아는 것이 중요하니, 이에 대해 오늘부터 공부하는 것은 어떠신가요?')
        }
        else if (1.9 < score & score < 3.1) {
            alert('아직 자세한 내용에 대한 숙지가 조금 부족한 것 같아요. 우리 함께 더 공부하도록 합시다!')
        }
        else if (3.9 < score & score < 5.1) {
            alert('내가 바로 실험왕! 안전하게 실험을 하고 계시네요.')
        }
        else {
            alert('모든 문항에 답해주시기 바랍니다.')
        }
    }

    function reset() {
        document.getElementById('q1').value=""
        document.getElementById('q2').value=""
        document.getElementById('q3').value=""
        document.getElementById('q4').value=""
        document.getElementById('q5').value=""
    }
    
    return (
        <div className="upper">
            <div className="intro">
                <p><b>연구실 안전 인지도 점검</b></p>
                <br/><p>연구실 안전 인지도 점검하기</p>
            </div>
            <div className="photo">
                <img src={require("../../img/a_info.jpg").default} alt="" width="100%" height="100%" />
            </div>            
            <div className="phototitle">
              <p>고려대학교 우정정보관 및 미래융합기술관</p>
            </div>
            <form name="test">
            <div className="quiz">
                    <p>1. <b>[실험 전]</b> 나는 사전유해인자위험분석 보고의 중요성에 대해 인지하고 있으며, 절차를 숙지하고 있다.</p>
                    <div className="ox">
                    <label><input type="radio" name="q1"></input>그렇다</label>
                    <label><input type="radio" name="q1"></input>그렇지 않다</label>
                    </div>

                    <p>2. <b>[실험 전]</b> 나는 안전교육을 성실히 이수하고 있으며, 안전교육의 목적이나 필요성에 대해 인지하고 있다.</p>
                    <div className="ox">
                    <label><input type="radio" name="q2"></input>그렇다</label>
                    <label><input type="radio" name="q2"></input>그렇지 않다</label>
                    </div>

                    <p>3. <b>[실험 중]</b> 나는 실험 종류에 맞는 올바른 보호구 착용법을 알고 있다.</p>
                    <div className="ox">
                    <label><input type="radio" name="q3"></input>그렇다</label>
                    <label><input type="radio" name="q3"></input>그렇지 않다</label>
                    </div>

                    <p>4. <b>[실험 후]</b> 나는 실험 후 정리정돈을 철저하게 하고 있다.</p>
                    <div className="ox">
                    <label><input type="radio" name="q4"></input>그렇다</label>
                    <label><input type="radio" name="q4"></input>그렇지 않다</label>
                    </div>

                    <p>5. <b>[실험 후]</b> 나는 실험 후 폐기물 처리과정을 잘 숙지하고 있다.</p>
                    <div className="ox">
                    <label><input type="radio" name="q5"></input>그렇다</label>
                    <label><input type="radio" name="q5"></input>그렇지 않다</label>
                    </div>
            </div>
            <div className="button">
                    <button onClick={Calculate}>제출</button>
                    <button onClick={reset}>다시 입력</button>
            </div>
            </form>
        </div>      
    )
}

export default DetailDaily