import React, { useState } from 'react'
import Select from 'react-select'

import './DetailExit.css'

const DetailExit = () => {
    const [choice, setChoice] = useState(0)

    const onChange = (value) => {
        if ('a1') {
            console.log('가')
        }
        else if ('a2') {
            console.log('나')
        }
    }

    const options = [
        // a : 생명과학대학
        { value: 'a1', label: '생명과학관(동관)'},
        { value: 'a2', label: '생명과학관(서관)'},
        { value: 'a3', label: 'CJ식품안전관'},

        // b : 이과대학
        { value: 'b1', label: '아산이학관'},
        { value: 'b2', label: '메디힐지구환경관'},
        { value: 'b3', label: '이학관 별관'},

        // c : 공과대학
        { value: 'c1', label: '산학관'},
        { value: 'c2', label: '공학관'},
        { value: 'c3', label: '창의관'},
        { value: 'c4', label: '신공학관'},

        // d : 정보대학, 스마트보안학부
        { value: 'd1', label: '우정정보관'},
        { value: 'd2', label: '미래융합기술관'},
        { value: 'd3', label: '로봇융합관'},

        // e : 보건과학대학
        { value: 'e1', label: '하나과학관'},

        // f : 실험전용건물
        { value: 'f1', label: '제2실험관'},
        { value: 'f2', label: '환경실험관'},
        { value: 'f3', label: '풍동실험관'},

        // g : 공용 공간
        { value: 'g1', label: '하나스퀘어'},
        { value: 'g2', label: '과학도서관'},
        { value: 'g3', label: '애기능생활관'},
    ]

    const MyComponent = () => (
        // <Select options={options} />
        <Select 
        styles = {{ // zIndex 
            menu: provided => ({...provided, zIndex: 999}) 
        }} 
        value={options.find(op => { // choice state에 따라 디폴트 option 세팅 
            return op.value === choice 
        })} 
        placeholder="건물을 선택하세요." 
        onChange={(value) => { 
            onChange(value.value); 
        }}
        options={options} />
    )

    return (
        <div className="upper">
            <div className="intro">
                <p><b>비상시 대피 안내</b></p>
                <br/><p>비상대피도를 보고 싶은 건물을 선택하세요.</p>
            </div>
            
            <div className="select">
                <MyComponent />
            </div>

            <div className="photobuilding">
                <img src={require("../../img/wooinfo6.jpg").default} alt="" width="100%" height="100%" />
            </div>  
        </div>
    )
}

export default DetailExit