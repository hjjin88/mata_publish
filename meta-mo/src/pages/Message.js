import { useEffect, useState } from "react";
import PopFooter from "./PopFooter";

const Message = ({ popName, setPopName }) => {

    const [isOn, setisOn] = useState(false);
    const toggleHandler = () => {
      setisOn(!isOn)
    };

    return (
        <>
        <div className="layer" />
            <div className="Message">
                <button type="button" className="subclose close16" onClick={ e => { setPopName(); }} />
                <div className="popTit">메세지</div>
                <div className="con-wrap">
                    <ul className="con-inner-col">
                        <li className={`"message-check ${isOn ? "message-check" : null }`} onClick={toggleHandler}>
                            <div className="Profile-box">
                                <div className="Profile-set" >
                                    <img className="Profile-img" src="/resources/img/bg.png" alt="프로필 사진 이미지" />
                                </div>
                                <div className="IDBox">
                                    <p className="ID txt-15Bk">ZZAZANG</p>
                                    <p className="txt-11Gy3 message-txt">안녕하세요. ZZAZANG입니다. 안녕하세요. ZZAZANG입니다.안녕하세요. ZZAZANG입니다.안녕하세요.ZZAZANG입니다.안녕하세요. ZZAZANG입니다.안녕하세요.ZZAZANG입니다.안녕하세요. ZZAZANG입니다.안녕하세요.ZZAZANG입니다.안녕하세요. ZZAZANG입니다.안녕하세요.ZZAZANG입니다.안녕하세요. ZZAZANG입니다.안녕하세요. </p>
                                </div>
                            </div>
                            <div className="message-desc txt-11Wt">
                                <div className="message-time txt-11Gy112">오전 9:08</div>
                                <div className="-No ">99</div>
                            </div>
                            <div className="message-btn txt-13Wt">
                                <button type="button" onClick={ e => { setPopName('MessageInner'); }}>보기</button>
                                <button type="button">삭제</button>
                            </div>
                        </li>
                        <li>
                            <div className="Profile-box" >
                                <div className="Profile-set img-set4" >
                                    <img className="Profile-img" src="/resources/img/bg.png" alt="프로필 사진 이미지" />
                                    <img className="Profile-img" src="/resources/img/bg.png" alt="프로필 사진 이미지" />
                                    <img className="Profile-img" src="/resources/img/bg.png" alt="프로필 사진 이미지" />
                                    <img className="Profile-img" src="/resources/img/bg.png" alt="프로필 사진 이미지" />
                                </div>
                                <div className="IDBox">
                                    <p className="ID txt-15Bk">ZZAZANG</p>
                                    <p className="txt-11Gy3 message-txt">안녕하세요. ZZAZANG입니다. 안녕하세요. ZZAZANG입니다.안녕하세요. ZZAZANG입니다.안녕하세요.ZZAZANG입니다.안녕하세요. ZZAZANG입니다.안녕하세요.ZZAZANG입니다.안녕하세요. ZZAZANG입니다.안녕하세요.ZZAZANG입니다.안녕하세요. ZZAZANG입니다.안녕하세요.ZZAZANG입니다.안녕하세요. ZZAZANG입니다.안녕하세요. </p>
                                </div>
                            </div>
                            <div className="message-desc txt-11Wt">
                                <div className="message-time txt-11Gy112">오전 9:08</div>
                                <div className="-No ">99</div>
                            </div>
                            <div className="message-btn txt-13Wt">
                                <button className="">보기</button>
                                <button className="">삭제</button>
                            </div>
                        </li>
                        <li className={`"message-check ${isOn ? "message-check" : null }`} onClick={toggleHandler}>
                            <div className="Profile-box">
                                <div className="Profile-set img-set2" >
                                    <img className="Profile-img" src="/resources/img/bg.png" alt="프로필 사진 이미지" />
                                    <img className="Profile-img" src="/resources/img/bg.png" alt="프로필 사진 이미지" />
                                </div>
                                <div className="IDBox">
                                    <p className="ID txt-15Bk">ZZAZANG</p>
                                    <p className="txt-11Gy3 message-txt">안녕하세요. ZZAZANG입니다. 안녕하세요. ZZAZANG입니다.안녕하세요. ZZAZANG입니다.안녕하세요.ZZAZANG입니다.안녕하세요. ZZAZANG입니다.안녕하세요.ZZAZANG입니다.안녕하세요. ZZAZANG입니다.안녕하세요.ZZAZANG입니다.안녕하세요. ZZAZANG입니다.안녕하세요.ZZAZANG입니다.안녕하세요. ZZAZANG입니다.안녕하세요. </p>
                                </div>
                            </div>
                            <div className="message-desc txt-11Wt">
                                <div className="message-time txt-11Gy112">2023-01-21</div>
                                <div className="-No ">99</div>
                            </div>
                            <div className="message-btn txt-13Wt">
                                <button className="">보기</button>
                                <button className="">삭제</button>
                            </div>
                        </li>
                        <li>
                            <div className="Profile-box">
                                <div className="Profile-set" >
                                    <img className="Profile-img" src="/resources/img/bg.png" alt="프로필 사진 이미지" />
                                </div>
                                <div className="IDBox">
                                    <p className="ID txt-15Bk">ZZAZANG</p>
                                    <p className="txt-11Gy3 message-txt">안녕하세요. ZZAZANG입니다. 안녕하세요. ZZAZANG입니다.안녕하세요. ZZAZANG입니다.안녕하세요.ZZAZANG입니다.안녕하세요. ZZAZANG입니다.안녕하세요.ZZAZANG입니다.안녕하세요. ZZAZANG입니다.안녕하세요.ZZAZANG입니다.안녕하세요. ZZAZANG입니다.안녕하세요.ZZAZANG입니다.안녕하세요. ZZAZANG입니다.안녕하세요. </p>
                                </div>
                            </div>
                            <div className="message-desc txt-11Wt">
                                <div className="message-time txt-11Gy112">오전 9:08</div>
                                <div className="-No ">99</div>
                            </div>
                            <div className="message-btn txt-13Wt">
                                <button className="">보기</button>
                                <button className="">삭제</button>
                            </div>
                        </li>
                        <li>
                            <div className="Profile-box" >
                                <div className="Profile-set img-set4" >
                                    <img className="Profile-img" src="/resources/img/bg.png" alt="프로필 사진 이미지" />
                                    <img className="Profile-img" src="/resources/img/bg.png" alt="프로필 사진 이미지" />
                                    <img className="Profile-img" src="/resources/img/bg.png" alt="프로필 사진 이미지" />
                                    <img className="Profile-img" src="/resources/img/bg.png" alt="프로필 사진 이미지" />
                                </div>
                                <div className="IDBox">
                                    <p className="ID txt-15Bk">ZZAZANG</p>
                                    <p className="txt-11Gy3 message-txt">안녕하세요. ZZAZANG입니다. 안녕하세요. ZZAZANG입니다.안녕하세요. ZZAZANG입니다.안녕하세요.ZZAZANG입니다.안녕하세요. ZZAZANG입니다.안녕하세요.ZZAZANG입니다.안녕하세요. ZZAZANG입니다.안녕하세요.ZZAZANG입니다.안녕하세요. ZZAZANG입니다.안녕하세요.ZZAZANG입니다.안녕하세요. ZZAZANG입니다.안녕하세요. </p>
                                </div>
                            </div>
                            <div className="message-desc txt-11Wt">
                                <div className="message-time txt-11Gy112">오전 9:08</div>
                                <div className="-No ">99</div>
                            </div>
                            <div className="message-btn txt-13Wt">
                                <button className="">보기</button>
                                <button className="">삭제</button>
                            </div>
                        </li>
                        <li>
                            <div className="Profile-box">
                                <div className="Profile-set img-set2" >
                                    <img className="Profile-img" src="/resources/img/bg.png" alt="프로필 사진 이미지" />
                                    <img className="Profile-img" src="/resources/img/bg.png" alt="프로필 사진 이미지" />
                                </div>
                                <div className="IDBox">
                                    <p className="ID txt-15Bk">ZZAZANG</p>
                                    <p className="txt-11Gy3 message-txt">안녕하세요. ZZAZANG입니다. 안녕하세요. ZZAZANG입니다.안녕하세요. ZZAZANG입니다.안녕하세요.ZZAZANG입니다.안녕하세요. ZZAZANG입니다.안녕하세요.ZZAZANG입니다.안녕하세요. ZZAZANG입니다.안녕하세요.ZZAZANG입니다.안녕하세요. ZZAZANG입니다.안녕하세요.ZZAZANG입니다.안녕하세요. ZZAZANG입니다.안녕하세요. </p>
                                </div>
                            </div>
                            <div className="message-desc txt-11Wt">
                                <div className="message-time txt-11Gy112">오전 9:08</div>
                                <div className="-No ">99</div>
                            </div>
                            <div className="message-btn txt-13Wt">
                                <button className="">보기</button>
                                <button className="">삭제</button>
                            </div>
                        </li>
                        <li>
                            <div className="Profile-box">
                                <div className="Profile-set" >
                                    <img className="Profile-img" src="/resources/img/bg.png" alt="프로필 사진 이미지" />
                                </div>
                                <div className="IDBox">
                                    <p className="ID txt-15Bk">ZZAZANG</p>
                                    <p className="txt-11Gy3 message-txt">안녕하세요. ZZAZANG입니다. 안녕하세요. ZZAZANG입니다.안녕하세요. ZZAZANG입니다.안녕하세요.ZZAZANG입니다.안녕하세요. ZZAZANG입니다.안녕하세요.ZZAZANG입니다.안녕하세요. ZZAZANG입니다.안녕하세요.ZZAZANG입니다.안녕하세요. ZZAZANG입니다.안녕하세요.ZZAZANG입니다.안녕하세요. ZZAZANG입니다.안녕하세요. </p>
                                </div>
                            </div>
                            <div className="message-desc txt-11Wt">
                                <div className="message-time txt-11Gy112">오전 9:08</div>
                                <div className="-No">99</div>
                            </div>
                            <div className="message-btn txt-13Wt">
                                <button className="">보기</button>
                                <button className="">삭제</button>
                            </div>
                        </li>
                        <li>
                            <div className="Profile-box">
                                <div className="Profile-set" >
                                    <img className="Profile-img" src="/resources/img/bg.png" alt="프로필 사진 이미지" />
                                </div>
                                <div className="IDBox">
                                    <p className="ID txt-15Bk">ZZAZANG</p>
                                    <p className="txt-11Gy3 message-txt">안녕하세요. ZZAZANG입니다. 안녕하세요. ZZAZANG입니다.안녕하세요. ZZAZANG입니다.안녕하세요.ZZAZANG입니다.안녕하세요. ZZAZANG입니다.안녕하세요.ZZAZANG입니다.안녕하세요. ZZAZANG입니다.안녕하세요.ZZAZANG입니다.안녕하세요. ZZAZANG입니다.안녕하세요.ZZAZANG입니다.안녕하세요. ZZAZANG입니다.안녕하세요. </p>
                                </div>
                            </div>
                            <div className="message-desc txt-11Wt">
                                <div className="message-time txt-11Gy112">오전 9:08</div>
                                <div className="-No">99</div>
                            </div>
                            <div className="message-btn txt-13Wt">
                                <button className="">보기</button>
                                <button className="">삭제</button>
                            </div>
                        </li>
                        <li>
                            <div className="Profile-box">
                                <div className="Profile-set" >
                                    <img className="Profile-img" src="/resources/img/bg.png" alt="프로필 사진 이미지" />
                                </div>
                                <div className="IDBox">
                                    <p className="ID txt-15Bk">ZZAZANG</p>
                                    <p className="txt-11Gy3 message-txt">안녕하세요. ZZAZANG입니다. 안녕하세요. ZZAZANG입니다.안녕하세요. ZZAZANG입니다.안녕하세요.ZZAZANG입니다.안녕하세요. ZZAZANG입니다.안녕하세요.ZZAZANG입니다.안녕하세요. ZZAZANG입니다.안녕하세요.ZZAZANG입니다.안녕하세요. ZZAZANG입니다.안녕하세요.ZZAZANG입니다.안녕하세요. ZZAZANG입니다.안녕하세요. </p>
                                </div>
                            </div>
                            <div className="message-desc txt-11Wt">
                                <div className="message-time txt-11Gy112">오전 9:08</div>
                                <div className="-No">99</div>
                            </div>
                            <div className="message-btn txt-13Wt">
                                <button className="">보기</button>
                                <button className="">삭제</button>
                            </div>
                        </li>
                        <li>
                            <div className="Profile-box">
                                <div className="Profile-set" >
                                    <img className="Profile-img" src="/resources/img/bg.png" alt="프로필 사진 이미지" />
                                </div>
                                <div className="IDBox">
                                    <p className="ID txt-15Bk">ZZAZANG</p>
                                    <p className="txt-11Gy3 message-txt">안녕하세요. ZZAZANG입니다. 안녕하세요. ZZAZANG입니다.안녕하세요. ZZAZANG입니다.안녕하세요.ZZAZANG입니다.안녕하세요. ZZAZANG입니다.안녕하세요.ZZAZANG입니다.안녕하세요. ZZAZANG입니다.안녕하세요.ZZAZANG입니다.안녕하세요. ZZAZANG입니다.안녕하세요.ZZAZANG입니다.안녕하세요. ZZAZANG입니다.안녕하세요. </p>
                                </div>
                            </div>
                            <div className="message-desc txt-11Wt">
                                <div className="message-time txt-11Gy112">오전 9:08</div>
                                <div className="-No">99</div>
                            </div>
                            <div className="message-btn txt-13Wt">
                                <button className="">보기</button>
                                <button className="">삭제</button>
                            </div>
                        </li>
                        <li>
                            <div className="Profile-box">
                                <div className="Profile-set" >
                                    <img className="Profile-img" src="/resources/img/bg.png" alt="프로필 사진 이미지" />
                                </div>
                                <div className="IDBox">
                                    <p className="ID txt-15Bk">ZZAZANG</p>
                                    <p className="txt-11Gy3 message-txt">안녕하세요. ZZAZANG입니다. 안녕하세요. ZZAZANG입니다.안녕하세요. ZZAZANG입니다.안녕하세요.ZZAZANG입니다.안녕하세요. ZZAZANG입니다.안녕하세요.ZZAZANG입니다.안녕하세요. ZZAZANG입니다.안녕하세요.ZZAZANG입니다.안녕하세요. ZZAZANG입니다.안녕하세요.ZZAZANG입니다.안녕하세요. ZZAZANG입니다.안녕하세요. </p>
                                </div>
                            </div>
                            <div className="message-desc txt-11Wt">
                                <div className="message-time txt-11Gy112">오전 9:08</div>
                                <div className="-No">99</div>
                            </div>
                            <div className="message-btn txt-13Wt">
                                <button className="">보기</button>
                                <button className="">삭제</button>
                            </div>
                        </li>
                    </ul>
                </div>
                <PopFooter popName={popName} setPopName={setPopName} />
            </div>
        </>
    )
}
export default Message;
