
import { useEffect, useState } from "react";

const ProfileView = ({setPopName}) => {

    const [isOn, setisOn] = useState(false);
    const toggleHandler = () => {
    setisOn(!isOn)
    }
    
    return (
        <>
        <div className="layer" />
        <div className="ProfileView">
            <button type="button" className="subclose close16" onClick={ e => { setPopName(); }} />
            <div className="MyProfileCon">
                <div className="MyProfileInner">
                    <div className="online">
                        <div className="onlineCon">
                            <div className="markOn"></div>
                            <button type="button">
                                <div>Online</div>
                            </button>
                        </div>
                    </div>
                    <img className="MyProfileImg" src="/resources/img/bg.png" alt="프로필 이미지" />
                    <div className="distance tit-14Gy2">3.9m</div>
                    <div className="tit-18Bk2">Jennie Park</div>
                    <div className="phone-number txt-14Gy2">
                        <div className="userID">CA761232-ED42-11CE-BACD-00AA0057B223</div>
                        <button type="button" className="copy17" onClick={toggleHandler} />
                    </div>
                    <div className="Point tit-13Wt">
                        <img src="/resources/img/msg12.svg" alt="유저 아이콘 이미지" />
                        <p>메세지 보내기</p>
                    </div>
                    <div className="ProfileView-btns txt-11Gy2">
                        <button type="button">
                            <img src="/resources/img/following24.svg" alt="유저 아이콘 이미지" />
                            <p>팔로우</p>                              
                        </button>
                        <button type="button" className="">
                            <img src="/resources/img/follow24.svg" alt="유저 아이콘 이미지" />
                            <p>따라가기</p>                        
                        </button>
                    </div>
                </div>
            </div>
            {isOn &&
                <div className="Copypop txt-13Gy5">복사되었습니다.</div>
            }
        </div>
    </>
    )
}
export default ProfileView;