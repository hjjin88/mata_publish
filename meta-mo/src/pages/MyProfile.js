import { useEffect, useRef, useState } from "react";
import PopFooter from "./PopFooter";

const MyProfile = ({ popName, setPopName }) => {

    const [view, setView] = useState(false); 
    const [Bun01, setBun01] = useState(false);
    const [isOn, setisOn] = useState(false);
    const toggleHandler = () => {
    setisOn(!isOn)
    }
    return (
        <>
        <div className="layer" />
        <div className="MyProfile">
            <button type="button" className="subclose close16" onClick={ e => { setPopName(); }} />
            <div className="popTit">마이 프로필</div>
            <div className="MyProfileCon">
                <div className="MyProfileInner">
                    <div className="online">
                        <div className="onlineCon">
                            <div className="markOn"></div>
                            <button type="button" onClick={() => {setView(!view)}}>
                                <div>Online{" "}</div>
                                {view ? <svg className="downArrow up" /> : <svg className="downArrow" />} 
                            </button>
                        </div>
                        {view && 
                            <ul className="onlineList">
                                <li>
                                    <div className="onlineCon">
                                        <div className="markOn"></div>
                                        <button type="button">
                                            <div>Online{" "}</div>
                                            {view ? <svg className="downArrow up" /> : <svg className="downArrow" />} 
                                        </button>
                                    </div>
                                </li>
                                <li>
                                    <div className="onlineCon">
                                        <div className="markGy"></div>
                                        <button type="button"><div>Sleeping</div></button>
                                    </div>
                                </li>
                            </ul>
                        }
                    </div>
                    {/* Sleeping 상태 */}
                    {/* <div className="online offline">
                        <div className="onlineCon">
                            <div className="markGy"></div>
                            <button type="button" onClick={() => {setView(!view)}}>
                                <div>Sleeping{" "}</div>
                                {view ? <svg className="downArrowWt12" /> : <svg className="downArrowWt12 up" />} 
                            </button>
                        </div>
                        {view && 
                            <ul className="onlineList">
                                <li>
                                    <div className="onlineCon">
                                        <div className="markGy"></div>
                                        <button type="button">
                                            <div>Sleeping{" "}</div> 
                                            {view ? <svg className="downArrowWt12 up" /> : <svg className="downArrowWt12" />} 
                                        </button>
                                    </div>
                                </li>
                                <li>
                                    <div className="onlineCon">
                                        <div className="markOn"></div>
                                        <button type="button"><div>Online</div></button>
                                    </div>
                                </li>
                            </ul>
                        }
                    </div> */}
                    <img className="MyProfileImg" src="/resources/img/bg.png" alt="프로필 이미지" />
                    <button type="button" className="changeBtn">
                        <img src="/resources/img/camera18.svg" alt="프로필 이미지 변경 버튼 이미지" />
                    </button>
                    <div className="tit-18Bk2 pdb5">Jennie Park</div>
                    <div className="phone-number txt-14Gy2">
                        <div className="userID">CA761232-ED42-11CE-BACD-00AA0057B223</div>
                        <button type="button" className="copy17" onClick={toggleHandler} />
                    </div>
                    <div className="Point tit-13Wt">
                        <span>p</span>
                        <p>2,30555503</p>
                    </div>
                </div>
                <div className="MyProfileList">
                    <dl className="form-list">
                        <dt className="form-label">
                            <p className="tit-13Bk">닉네임 변경</p>
                            <p className="txt-13Bk3">(8자 이내로 입력)</p>
                        </dt>
                        <dd className="form-group">
                            <input className="form-control txt-13Gy3" type="text" placeholder="닉네임을 입력하세요." />
                            <button type="button" onClick={() => {setBun01(!Bun01)}}>
                                <div className={`form-btn ${Bun01 ? "on" : null }`}>변경</div>
                            </button>
                        </dd>
                    </dl>
                    <dl className="form-list">
                        <dt className="form-label">
                            <p className="tit-13Bk">유버스 ID</p>
                            <p className="txt-13Bk3">(30일에 한 번 변경 가능)</p>
                        </dt>
                        <dd className="form-group">
                            <input className="form-control txt-13Gy3" type="text" placeholder="ID를 입력하세요." />
                            <button type="button" className="form-btn-data">D-28</button>
                        </dd>
                    </dl>
                    {/* <dl className="form-list">
                        <dt className="form-label">
                            <p className="tit-13Bk">유저 ID</p>
                        </dt>
                        <dd className="form-group">
                            <input className="form-control txt-13Gy3" type="text" placeholder="ID를 입력하세요." />
                            <button type="button" onClick={() => {setBun01(!Bun01)}}>
                                <div className={`form-btn ${Bun01 ? "on" : null }`}>확인</div>
                            </button>
                        </dd>
                    </dl> */}
                    <dl className="form-list">
                        <dt className="form-label">
                            <p className="tit-13Bk">인증정보</p>
                        </dt>
                        <dd className="form-group">
                            <input className="form-control txt-13Gy3" type="text" placeholder="인증정보를 입력하세요." />
                            <button type="button" onClick={() => {setBun01(!Bun01)}}>
                                <div className={`form-btn ${Bun01 ? "on" : null }`}>
                                    {" "}{Bun01 ? '인증' : '인증됨'}
                                </div>
                            </button>
                        </dd>
                    </dl>
                    <ul className="ProfileFooter txt-13GyC">
                        <button type="button">회원탈퇴</button>
                        <button type="button" className="LRBar">이용약관 확인</button>
                        <button type="button">고객센터</button>
                    </ul>
                </div>
            </div>
            {isOn &&
                <div className="Copypop txt-13Gy5">복사되었습니다.</div>
            }
            <PopFooter popName={popName} setPopName={setPopName} />
        </div>
        </>
    )
}
export default MyProfile;
