
import { useEffect, useState } from "react";
// import styled, { css } from 'styled-components';

const RtBar = ({ popName, setPopName }) => {
    // 변수 추가 내용 확인하기
    // static defaultProps={
    //     name:'기본이름'
    // }

    const [Camera, setCamera] = useState(false);
    const [Mike, setMike] = useState(false);
    
    return (
        <>
        <div className="RtBar txt-11Wt"> 
            <div> 
                <button type="button" onClick={ e => { setPopName('MyProfile'); }}>
                    <img className="pfp" src="/resources/img/img2.png" alt="마이프로필 이미지" />
                </button>
                <button type="button">
                    <img src="/resources/img/msg24.svg" alt="메시지 이미지" onClick={ e => { setPopName('Message'); }}/>
                    <div className="-No txt-9Wt">99</div>
                </button>
                <button type="button" onClick={() => {setCamera(!Camera)}}>
                    <img src="/resources/img/cameraOn24.svg" alt="카메라 이미지" />
                    {Camera ? <span className="markOn" /> : <span className="markOff" />} 
                </button>
                <button type="button" onClick={() => {setMike(!Mike)}}>
                    <img src="/resources/img/mikeOn24.svg" alt="카메라 이미지" />
                    {Mike ? <span className="markOn" /> : <span className="markOff" />} 
                </button>
            </div>
        </div>
        </>
        )
}
export default RtBar;
