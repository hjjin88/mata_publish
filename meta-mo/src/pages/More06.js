
import { useEffect, useState } from "react";

const More06 = ({setPopName }) => {

    return (
        <>
        <div className="More">
            <button type="button" className="subclose close16" onClick={ e => { setPopName(); }} />
            <ul className="more-ty02 txt-11">
                <li><img src="/img/campus24.svg" alt="캠퍼스 버튼 이미지" /><p>캠퍼스</p></li>
                <li><img src="/img/closet24.svg" alt="옷장 버튼 이미지" /><p>옷장</p></li>
                <li><img src="/img/dressingTable24.svg" alt="화장대 버튼 이미지" /><p>화장대</p></li>
                <li><img src="/img/pointShop24.svg" alt="포인트 상점 버튼 이미지" /><p>포인트 상점</p></li>
            </ul>
        </div>
        </>
    )
}
export default More06;
