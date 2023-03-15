
import { useEffect, useState } from "react";

const More12 = ({setPopName }) => {

    return (
        <>
        <div className="More">
            <button type="button" className="subclose close16" onClick={ e => { setPopName(); }} />
            <ul className="more-ty02 txt-11">
                <li><img src="/img/busyMessage.svg" alt="튜토리얼 버튼 이미지" /><p>튜토리얼</p></li>
                <li><img src="/img/screenShare24.svg" alt="스크린샷 버튼 이미지" /><p>스크린샷</p></li>
                <li><img src="/img/subtitle.svg" alt="공지사항 버튼 이미지" /><p>공지사항</p></li>
                <li><img src="/img/reportProblem.svg" alt="투표하기 버튼 이미지" /><p>투표하기</p></li>
                <li><img src="/img/declaration.svg" alt="악용사례 신고 버튼 이미지" /><p>악용사례 신고</p></li>
                <li><img src="/img/hostControlFunction.svg" alt="호스트 제어 기능 버튼 이미지" /><p>호스트 제어 기능</p></li>
                <li><img src="/img/MoreActivity.svg" alt="활동 버튼 이미지" /><p>활동</p></li>
                <li><img src="/img/setting.svg" alt="설정 버튼 이미지" /><p>설정</p></li>
            </ul>
        </div>
        </>
    )
}
export default More12;
