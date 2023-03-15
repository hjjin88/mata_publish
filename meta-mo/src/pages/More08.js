
import { useEffect, useState } from "react";

const More08 = ({setPopName }) => {

    return (
        <>
        <div className="More">
            <button type="button" className="subclose close16" onClick={ e => { setPopName(); }} />
            <ul className="more-ty01 txt-11">
                <li><img src="/img/screenShare24.svg" alt="화면공유 버튼 이미지" /><p>화면공유</p></li>
                <li><img src="/img/privateScreen24.svg" alt="전용화면 버튼 이미지" /><p>전용화면</p></li>
            </ul>
        </div>
        </>
    )
}
export default More08;
