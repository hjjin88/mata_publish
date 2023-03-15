
import { useEffect, useState } from "react";

const LtTopBar = ({ popName, setPopName }) => {

    const [Person, setPerson] = useState(false);
    const [Speaker, setSpeaker] = useState(false);

    return (
        <>
        <div className="LtTopBar">
            <div className="LtTop">
                <button type="button" className="hamburgerMenu24" onClick={ e => { setPopName('Menu'); }} />
                {/* 상담실에서 나가기 버튼 이미지*/}
                {/* <button type="button" className="exit24" onClick={ e => { setPopName('ConsEnd'); }} /> */}
                <button type="button" className="loc" onClick={ e => { setPopName('Map'); }}>
                    <img src="/resources/img/location24.svg" alt="현재장소 이름 이미지" />
                    <div>평화문(정문)으로 가보자요요요오오오</div>
                </button>
            </div>
            <div className="RtTop">
                <button type="button">
                    <img src="/resources/img/fullScreen24.svg" alt="전체화면 이미지" />
                </button>
                <button type="button" onClick={() => {setPerson(!Person)}}>
                    {Person ? <div className="person3rd24" /> : <div className="personFirst24" />} 
                </button>
                <button type="button" onClick={() => {setSpeaker(!Speaker)}}>
                    {Speaker ? <div className="speakerOff24" /> : <div className="speakerOn24" />} 
                </button>
            </div>
            
        </div>
        </>
    )
}
export default LtTopBar;
