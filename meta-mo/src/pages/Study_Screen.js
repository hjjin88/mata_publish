
import { useEffect, useState } from "react";

const Study_Screen = ({popName, setPopName}) => {

    return (
        <>
        <div className="layer01" />
        <div className="PrivateScreen Study_Screen">
            {/* 화면보기 1인 */}
            <div className="cam-con ty01">
                <div className="camScreen">
                    <video src=""/>
                    <div className="cam-desc txt-13Bk center">카메라 없음</div>
                    <img className="topLt-pfp" src="/resources/img/bg.png" alt="화면 이미지" />
                    <div className="btLt">
                        <img className="bottom-pfp" src="/resources/img/bg.png" alt="프로필 이미지" />
                        <p>Sophia</p>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default Study_Screen;
