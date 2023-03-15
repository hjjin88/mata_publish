
import { useEffect, useState } from "react";

const Emoji = ({setPopName }) => {

    return (
        <>
        <div className="Emoji">
            <div className="popMoBar" />
            <div className="EmojiCon popCon">
                <ul className="EmojiList">
                    <li><button type="button" onClick={ e => { setPopName('EmojiAll'); }}><div className="allBtn">ALL</div></button></li>
                    <li><img src="/resources/img/icon.png" alt="이모티콘 이미지" /></li>
                    <li><img src="/resources/img/icon.png" alt="이모티콘 이미지" /></li>
                    <li><img src="/resources/img/icon.png" alt="이모티콘 이미지" /></li>
                    <li><img src="/resources/img/icon.png" alt="이모티콘 이미지" /></li>
                    <li><img src="/resources/img/icon.png" alt="이모티콘 이미지" /></li>
                    <li><img src="/resources/img/icon.png" alt="이모티콘 이미지" /></li>
                </ul>
            </div>
        </div>
        </>
    )
}
export default Emoji;
