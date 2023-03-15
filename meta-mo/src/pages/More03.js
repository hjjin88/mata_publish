
import { useEffect, useState } from "react";

const More03 = ({setPopName }) => {

    return (
        <>
        <div className="More">
            <button type="button" className="subclose close16" onClick={ e => { setPopName(); }} />
            <ul className="more-ty02 txt-11">
                <li><img src="/img/studyStatus24.svg" alt="스터디 현황 버튼 이미지" /><p>스터디 현황</p></li>
                <li><img src="/img/studyRanking24.svg" alt="스터디 랭킹 버튼 이미지" /><p>스터디 랭킹</p></li>
                <li><img src="/img/privateScreen24.svg" alt="전용화면 버튼 이미지" /><p>전용화면</p></li>
                <li><img src="/img/BGM.svg" alt="BGM 버튼 이미지" /><p>BGM</p></li>
                <li><img src="/img/camView24.svg" alt="캠보기 버튼 이미지" /><p>캠보기</p></li>
            </ul>
        </div>
        </>
    )
}
export default More03;
