import { useEffect, useState } from "react";

const NpcTourStart = ({ popName, setPopName }) => {

    const [isMark, setisMark] = useState(false);
    const [isOn, setisOn] = useState(false);
    const toggleHandler = () => {
    setisOn(!isOn);
    };

    return (
    <>
        <div className="Npc-guide Tb-Npc-guide">
            <button type="button" className="subclose close16" onClick={(e) => {setPopName('TourEnd');}} />
            <div className="popTit">빽다방 아르바이트생</div>
            <img className="Npc-img" src="/resources/img/npc_paik.png" alt="NPC 빽다방 이미지" />
            {/* <img className="Npc-img" src="/resources/img/npc_hanshin.png" alt="NPC 한신포차 이미지" /> */}
            <div className="con-wrap">
                <div className="con-inner-col">
                    <div className="Invite-guide tit-15Bk">
                        어서오세요! 빽다방 숙명여대점입니다~
                        유버스에서만 진행하는 특별한 미션이 기다리고 있습니다!
                        한번 참여해 보시겠어요?
                        어서오세요! 빽다방 숙명여대점입니다~
                        유버스에서만 진행하는 특별한 미션이 기다리고 있습니다!
                        한번 참여해 보시겠어요?
                        어서오세요! 빽다방 숙명여대점입니다~
                        유버스에서만 진행하는 특별한 미션이 기다리고 있습니다!
                        한번 참여해 보시겠어요?
                        어서오세요! 빽다방 숙명여대점입니다~
                        유버스에서만 진행하는 특별한 미션이 기다리고 있습니다!
                        한번 참여해 보시겠어요?
                        어서오세요! 빽다방 숙명여대점입니다~
                        유버스에서만 진행하는 특별한 미션이 기다리고 있습니다!
                        한번 참여해 보시겠어요?
                        어서오세요! 빽다방 숙명여대점입니다~
                        유버스에서만 진행하는 특별한 미션이 기다리고 있습니다!
                        한번 참여해 보시겠어요?
                    </div>
                    <button type="button" className="sec-btn on-02">
                        다음
                    </button>
                </div>
            </div>
        </div>
        {/* 미션 알림 아이콘 */}
        <button type="button" className="Npc-alert">
            <img src="/resources/img/npc-alert50.svg" alt="미션 알림 아이콘" />
        </button>
        {/* 이벤트 보기 아이콘 */}
        <button type="button" className="Event-view">
            <img src="/resources/img/zoom50.svg" alt="이벤트 보기 아이콘" />
        </button>
        {/* 이벤트 재생 아이콘 */}
        <button type="button" className="Event-play">
            <img src="/resources/img/play50.svg" alt="이벤트 재생 아이콘" />
        </button>
    </>
    );
};
export default NpcTourStart;
