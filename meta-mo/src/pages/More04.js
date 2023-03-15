
import { useEffect, useState } from "react";

const More04 = ({setPopName }) => {

    return (
        <>
        <div className="More">
            <button type="button" className="subclose close16" onClick={ e => { setPopName(); }} />
            <ul className="more-ty02 txt-11">
                <li><img src="/img/studyStatus24.svg" alt="스터디 현황 버튼 이미지" /><p>스터디 현황</p></li>
                <li><img src="/img/studyRanking24.svg" alt="스터디 랭킹 버튼 이미지" /><p>스터디 랭킹</p></li>
                <li><img src="/img/privateScreen24.svg" alt="전용화면 버튼 이미지" /><p>전용화면</p></li>
                <li><img src="/img/screenShare24.svg" alt="화면공유 버튼 이미지" /><p>화면공유</p></li>
                <li><img src="/img/hostPass24.svg" alt="방장 넘기기 버튼 이미지" /><p>방장 넘기기</p></li>
            </ul>
        </div>
        </>
    )
}
export default More04;