
import { useEffect, useState } from "react";

const Chatting = ({setPopName, selectedGnbIndex }) => {

    const [MessageToggle, setMessageToggle] = useState(false); 
    const [ChatAll, setChatAll] = useState(false);
    const [Btn01, setBtn01] = useState(false);
    const [Btn02, setBtn02] = useState(false);

    return (
        <>
        <div className="Chat">
            <div className="popMoBar" />
            <div className="subtop">
                <button type="button" className="subclose close16" onClick={(e) => {setPopName();}}/>
                <div className="popTit">채팅</div>
            </div>
            <div className="ChatCon">
                <div className="ChatInner Chat01">
                    <img className="ChatImg" src="/resources/img/bg.png" alt="프로필 사진 이미지" />
                    <div className="ChatProfile">
                        <div className="ChatID txt-12Gy3">아이디는여덟자만</div>
                        <div className="ChatBox">
                            <div className="ChatTxt txt-13">안녕하세요 😎</div>
                            <div className="ChatTime">09:30</div>
                        </div>
                    </div>
                </div>
                <div className="Chat-desc txt-14Gy1"><strong>학생회관</strong>에 입장했습니다.</div>
                <div className="ChatInner Chat01">
                    <img className="ChatImg" src="/resources/img/bg.png" alt="프로필 사진 이미지" />
                    <div className="ChatProfile">
                        <div className="ChatID txt-12Gy3">Olivia</div>
                        <div className="ChatBox">
                            <div className="ChatTxt txt-13">후배님들 안녕하세요 OT는 내일 모레 입 니다🔥 블베 앞에서 모일꺼예요 다들 늦지 않게 오세요~!!</div>
                            <div className="ChatTime">09:45</div>
                        </div>
                    </div>
                </div>
                <div className="ChatInner Chat01">
                    <img className="ChatImg" src="/resources/img/bg.png" alt="프로필 사진 이미지" />
                    <div className="ChatProfile">
                        <div className="ChatID txt-12Gy3">Lily</div>
                        <div className="ChatBox">
                            <div className="ChatTxt txt-13">네네 🙆‍♀️</div>
                            <div className="ChatTime">10:10</div>
                        </div>
                    </div>
                </div>
                <div className="ChatInner Chat01">
                    <img className="ChatImg" src="/resources/img/bg.png" alt="프로필 사진 이미지" />
                    <div className="ChatProfile">
                        <div className="ChatID txt-12Gy3">Sophia</div>
                        <div className="ChatBox">
                            <div className="ChatTxt txt-13">넵 동기들에게 공유하겠습니다!</div>
                            <div className="ChatTime">10:15</div>
                        </div>
                    </div>
                </div>
                <div className="ChatInner Chat02">
                    <img className="ChatImg" src="/resources/img/bg.png" alt="프로필 사진 이미지" />
                    <div className="ChatProfile">
                        <div className="ChatBox">
                            <div className="ChatTxt txt-13">네네 알겠습니다</div>
                            <div className="ChatTime">10:30</div>
                        </div>
                    </div>
                </div>
                <div className="ChatInner Chat01">
                    <img className="ChatImg" src="/resources/img/bg.png" alt="프로필 사진 이미지" />
                    <div className="ChatProfile">
                        <div className="ChatID txt-12Gy3">Isabella</div>
                        <div className="ChatBox">
                            <div className="ChatTxt txt-13">주의할께요!!</div>
                            <div className="ChatTime">10:15</div>
                        </div>
                    </div>
                </div>
                <div className="ChatInner Chat01">
                    <img className="ChatImg" src="/resources/img/bg.png" alt="프로필 사진 이미지" />
                    <div className="ChatProfile">
                        <div className="ChatID txt-12Gy3">Zoe</div>
                        <div className="ChatBox">
                            <div className="ChatTxt txt-13">네 내일 휴강이라 푹 쉬고 일찍 갈께요~~</div>
                            <div className="ChatTime">10:38</div>
                        </div>
                    </div>
                </div>
                <div className="ChatInner Chat01">
                    <img className="ChatImg" src="/resources/img/bg.png" alt="프로필 사진 이미지" />
                    <div className="ChatProfile">
                        <div className="ChatID txt-12Gy3">Jade</div>
                        <div className="ChatBox">
                            <div className="ChatTxt txt-13">학생서비스센터는 몇 층이예요? </div>
                            <div className="ChatTime">10:40</div>
                        </div>
                    </div>
                </div>
                <div className="ChatInner Chat01">
                    <img className="ChatImg" src="/resources/img/bg.png" alt="프로필 사진 이미지" />
                    <div className="ChatProfile">
                        <div className="ChatID txt-12Gy3">Cameron</div>
                        <div className="ChatBox">
                            <div className="ChatTxt txt-13">넵 동기들에게 공유하겠습니다!</div>
                            <div className="ChatTime">10:45</div>
                        </div>
                    </div>
                </div>
                <div className="ChatInner Chat02">
                    <img className="ChatImg" src="/resources/img/bg.png" alt="프로필 사진 이미지" />
                    <div className="ChatProfile">
                        <div className="ChatBox">
                            <div className="ChatTxt txt-13">샤워실은 3층 화장실 옆이예요</div>
                            <div className="ChatTime">10:46</div>
                        </div>
                    </div>
                </div>
                <div className="ChatInner Chat01">
                    <img className="ChatImg" src="/resources/img/bg.png" alt="프로필 사진 이미지" />
                    <div className="ChatProfile">
                        <div className="ChatID txt-12Gy3">아이디는여덟자만</div>
                        <div className="ChatBox">
                            <div className="ChatTxt txt-13">안녕하세요 😎</div>
                            <div className="ChatTime">09:30</div>
                        </div>
                    </div>
                </div>
                <div className="ChatInner Chat01">
                    <img className="ChatImg" src="/resources/img/bg.png" alt="프로필 사진 이미지" />
                    <div className="ChatProfile">
                        <div className="ChatID txt-12Gy3">Olivia</div>
                        <div className="ChatBox">
                            <div className="ChatTxt txt-13">후배님들 안녕하세요 OT는 내일 모레 입 니다🔥 블베 앞에서 모일꺼예요 다들 늦지 않게 오세요~!!</div>
                            <div className="ChatTime">09:45</div>
                        </div>
                    </div>
                </div>
                <div className="ChatInner Chat01">
                    <img className="ChatImg" src="/resources/img/bg.png" alt="프로필 사진 이미지" />
                    <div className="ChatProfile">
                        <div className="ChatID txt-12Gy3">Lily</div>
                        <div className="ChatBox">
                            <div className="ChatTxt txt-13">네네 🙆‍♀️</div>
                            <div className="ChatTime">10:10</div>
                        </div>
                    </div>
                </div>
                <div className="ChatInner Chat01">
                    <img className="ChatImg" src="/resources/img/bg.png" alt="프로필 사진 이미지" />
                    <div className="ChatProfile">
                        <div className="ChatID txt-12Gy3">Sophia</div>
                        <div className="ChatBox">
                            <div className="ChatTxt txt-13">넵 동기들에게 공유하겠습니다!</div>
                            <div className="ChatTime">10:15</div>
                        </div>
                    </div>
                </div>
                <div className="ChatInner Chat02">
                    <img className="ChatImg" src="/resources/img/bg.png" alt="프로필 사진 이미지" />
                    <div className="ChatProfile">
                        <div className="ChatBox">
                            <div className="ChatTxt txt-13">네네 알겠습니다</div>
                            <div className="ChatTime">10:30</div>
                        </div>
                    </div>
                </div>
                <div className="ChatInner Chat01">
                    <img className="ChatImg" src="/resources/img/bg.png" alt="프로필 사진 이미지" />
                    <div className="ChatProfile">
                        <div className="ChatID txt-12Gy3">Isabella</div>
                        <div className="ChatBox">
                            <div className="ChatTxt txt-13">주의할께요!!</div>
                            <div className="ChatTime">10:15</div>
                        </div>
                    </div>
                </div>
                <div className="ChatInner Chat01">
                    <img className="ChatImg" src="/resources/img/bg.png" alt="프로필 사진 이미지" />
                    <div className="ChatProfile">
                        <div className="ChatID txt-12Gy3">Zoe</div>
                        <div className="ChatBox">
                            <div className="ChatTxt txt-13">네 내일 휴강이라 푹 쉬고 일찍 갈께요~~</div>
                            <div className="ChatTime">10:38</div>
                        </div>
                    </div>
                </div>
                <div className="ChatInner Chat01">
                    <img className="ChatImg" src="/resources/img/bg.png" alt="프로필 사진 이미지" />
                    <div className="ChatProfile">
                        <div className="ChatID txt-12Gy3">Jade</div>
                        <div className="ChatBox">
                            <div className="ChatTxt txt-13">학생서비스센터는 몇 층이예요? </div>
                            <div className="ChatTime">10:40</div>
                        </div>
                    </div>
                </div>
                <div className="ChatInner Chat01">
                    <img className="ChatImg" src="/resources/img/bg.png" alt="프로필 사진 이미지" />
                    <div className="ChatProfile">
                        <div className="ChatID txt-12Gy3">Cameron</div>
                        <div className="ChatBox">
                            <div className="ChatTxt txt-13">넵 동기들에게 공유하겠습니다!</div>
                            <div className="ChatTime">10:45</div>
                        </div>
                    </div>
                </div>
                <div className="ChatInner Chat02">
                    <img className="ChatImg" src="/resources/img/bg.png" alt="프로필 사진 이미지" />
                    <div className="ChatProfile">
                        <div className="ChatBox">
                            <div className="ChatTxt txt-13">샤워실은 3층 화장실 옆이예요</div>
                            <div className="ChatTime">10:46</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="center">
                <button type="button" className="sec-btn-L-on02 tit-20Wt"
                onClick={() => {setChatAll(!ChatAll)}}
                >채팅 참여하기</button>
            </div>
        </div>
        {/* 채팅 확대창 */}
        {ChatAll &&
            <div className="Chat All">
                <div className="subtop">
                    <button type="button" className="subclose close16" onClick={(e) => {setPopName();}}/>
                    <div className="popTit">채팅</div>
                </div>
                <div className="ChatCon">
                    <div className="ChatInner Chat01">
                        <img className="ChatImg" src="/resources/img/bg.png" alt="프로필 사진 이미지" />
                        <div className="ChatProfile">
                            <div className="ChatID txt-12Gy3">아이디는여덟자만</div>
                            <div className="ChatBox">
                                <div className="ChatTxt txt-13">안녕하세요 😎</div>
                                <div className="ChatTime">09:30</div>
                            </div>
                        </div>
                    </div>
                    <div className="Chat-desc txt-14Gy1"><strong>학생회관</strong>에 입장했습니다.</div>
                    <div className="ChatInner Chat01">
                        <img className="ChatImg" src="/resources/img/bg.png" alt="프로필 사진 이미지" />
                        <div className="ChatProfile">
                            <div className="ChatID txt-12Gy3">Olivia</div>
                            <div className="ChatBox">
                                <div className="ChatTxt txt-13">후배님들 안녕하세요 OT는 내일 모레 입 니다🔥 블베 앞에서 모일꺼예요 다들 늦지 않게 오세요~!!</div>
                                <div className="ChatTime">09:45</div>
                            </div>
                        </div>
                    </div>
                    <div className="ChatInner Chat01">
                        <img className="ChatImg" src="/resources/img/bg.png" alt="프로필 사진 이미지" />
                        <div className="ChatProfile">
                            <div className="ChatID txt-12Gy3">Lily</div>
                            <div className="ChatBox">
                                <div className="ChatTxt txt-13">네네 🙆‍♀️</div>
                                <div className="ChatTime">10:10</div>
                            </div>
                        </div>
                    </div>
                    <div className="ChatInner Chat01">
                        <img className="ChatImg" src="/resources/img/bg.png" alt="프로필 사진 이미지" />
                        <div className="ChatProfile">
                            <div className="ChatID txt-12Gy3">Sophia</div>
                            <div className="ChatBox">
                                <div className="ChatTxt txt-13">넵 동기들에게 공유하겠습니다!</div>
                                <div className="ChatTime">10:15</div>
                            </div>
                        </div>
                    </div>
                    <div className="ChatInner Chat02">
                        <img className="ChatImg" src="/resources/img/bg.png" alt="프로필 사진 이미지" />
                        <div className="ChatProfile">
                            <div className="ChatBox">
                                <div className="ChatTxt txt-13">네네 알겠습니다</div>
                                <div className="ChatTime">10:30</div>
                            </div>
                        </div>
                    </div>
                    <div className="ChatInner Chat01">
                        <img className="ChatImg" src="/resources/img/bg.png" alt="프로필 사진 이미지" />
                        <div className="ChatProfile">
                            <div className="ChatID txt-12Gy3">Isabella</div>
                            <div className="ChatBox">
                                <div className="ChatTxt txt-13">주의할께요!!</div>
                                <div className="ChatTime">10:15</div>
                            </div>
                        </div>
                    </div>
                    <div className="ChatInner Chat01">
                        <img className="ChatImg" src="/resources/img/bg.png" alt="프로필 사진 이미지" />
                        <div className="ChatProfile">
                            <div className="ChatID txt-12Gy3">Zoe</div>
                            <div className="ChatBox">
                                <div className="ChatTxt txt-13">네 내일 휴강이라 푹 쉬고 일찍 갈께요~~</div>
                                <div className="ChatTime">10:38</div>
                            </div>
                        </div>
                    </div>
                    <div className="ChatInner Chat01">
                        <img className="ChatImg" src="/resources/img/bg.png" alt="프로필 사진 이미지" />
                        <div className="ChatProfile">
                            <div className="ChatID txt-12Gy3">Jade</div>
                            <div className="ChatBox">
                                <div className="ChatTxt txt-13">학생서비스센터는 몇 층이예요? </div>
                                <div className="ChatTime">10:40</div>
                            </div>
                        </div>
                    </div>
                    <div className="ChatInner Chat01">
                        <img className="ChatImg" src="/resources/img/bg.png" alt="프로필 사진 이미지" />
                        <div className="ChatProfile">
                            <div className="ChatID txt-12Gy3">Cameron</div>
                            <div className="ChatBox">
                                <div className="ChatTxt txt-13">넵 동기들에게 공유하겠습니다!</div>
                                <div className="ChatTime">10:45</div>
                            </div>
                        </div>
                    </div>
                    <div className="ChatInner Chat02">
                        <img className="ChatImg" src="/resources/img/bg.png" alt="프로필 사진 이미지" />
                        <div className="ChatProfile">
                            <div className="ChatBox">
                                <div className="ChatTxt txt-13">샤워실은 3층 화장실 옆이예요</div>
                                <div className="ChatTime">10:46</div>
                            </div>
                        </div>
                    </div>
                    <div className="ChatInner Chat01">
                        <img className="ChatImg" src="/resources/img/bg.png" alt="프로필 사진 이미지" />
                        <div className="ChatProfile">
                            <div className="ChatID txt-12Gy3">아이디는여덟자만</div>
                            <div className="ChatBox">
                                <div className="ChatTxt txt-13">안녕하세요 😎</div>
                                <div className="ChatTime">09:30</div>
                            </div>
                        </div>
                    </div>
                    <div className="ChatInner Chat01">
                        <img className="ChatImg" src="/resources/img/bg.png" alt="프로필 사진 이미지" />
                        <div className="ChatProfile">
                            <div className="ChatID txt-12Gy3">Olivia</div>
                            <div className="ChatBox">
                                <div className="ChatTxt txt-13">후배님들 안녕하세요 OT는 내일 모레 입 니다🔥 블베 앞에서 모일꺼예요 다들 늦지 않게 오세요~!!</div>
                                <div className="ChatTime">09:45</div>
                            </div>
                        </div>
                    </div>
                    <div className="ChatInner Chat01">
                        <img className="ChatImg" src="/resources/img/bg.png" alt="프로필 사진 이미지" />
                        <div className="ChatProfile">
                            <div className="ChatID txt-12Gy3">Lily</div>
                            <div className="ChatBox">
                                <div className="ChatTxt txt-13">네네 🙆‍♀️</div>
                                <div className="ChatTime">10:10</div>
                            </div>
                        </div>
                    </div>
                    <div className="ChatInner Chat01">
                        <img className="ChatImg" src="/resources/img/bg.png" alt="프로필 사진 이미지" />
                        <div className="ChatProfile">
                            <div className="ChatID txt-12Gy3">Sophia</div>
                            <div className="ChatBox">
                                <div className="ChatTxt txt-13">넵 동기들에게 공유하겠습니다!</div>
                                <div className="ChatTime">10:15</div>
                            </div>
                        </div>
                    </div>
                    <div className="ChatInner Chat02">
                        <img className="ChatImg" src="/resources/img/bg.png" alt="프로필 사진 이미지" />
                        <div className="ChatProfile">
                            <div className="ChatBox">
                                <div className="ChatTxt txt-13">네네 알겠습니다</div>
                                <div className="ChatTime">10:30</div>
                            </div>
                        </div>
                    </div>
                    <div className="ChatInner Chat01">
                        <img className="ChatImg" src="/resources/img/bg.png" alt="프로필 사진 이미지" />
                        <div className="ChatProfile">
                            <div className="ChatID txt-12Gy3">Isabella</div>
                            <div className="ChatBox">
                                <div className="ChatTxt txt-13">주의할께요!!</div>
                                <div className="ChatTime">10:15</div>
                            </div>
                        </div>
                    </div>
                    <div className="ChatInner Chat01">
                        <img className="ChatImg" src="/resources/img/bg.png" alt="프로필 사진 이미지" />
                        <div className="ChatProfile">
                            <div className="ChatID txt-12Gy3">Zoe</div>
                            <div className="ChatBox">
                                <div className="ChatTxt txt-13">네 내일 휴강이라 푹 쉬고 일찍 갈께요~~</div>
                                <div className="ChatTime">10:38</div>
                            </div>
                        </div>
                    </div>
                    <div className="ChatInner Chat01">
                        <img className="ChatImg" src="/resources/img/bg.png" alt="프로필 사진 이미지" />
                        <div className="ChatProfile">
                            <div className="ChatID txt-12Gy3">Jade</div>
                            <div className="ChatBox">
                                <div className="ChatTxt txt-13">학생서비스센터는 몇 층이예요? </div>
                                <div className="ChatTime">10:40</div>
                            </div>
                        </div>
                    </div>
                    <div className="ChatInner Chat01">
                        <img className="ChatImg" src="/resources/img/bg.png" alt="프로필 사진 이미지" />
                        <div className="ChatProfile">
                            <div className="ChatID txt-12Gy3">Cameron</div>
                            <div className="ChatBox">
                                <div className="ChatTxt txt-13">넵 동기들에게 공유하겠습니다!</div>
                                <div className="ChatTime">10:45</div>
                            </div>
                        </div>
                    </div>
                    <div className="ChatInner Chat02">
                        <img className="ChatImg" src="/resources/img/bg.png" alt="프로필 사진 이미지" />
                        <div className="ChatProfile">
                            <div className="ChatBox">
                                <div className="ChatTxt txt-13">샤워실은 3층 화장실 옆이예요</div>
                                <div className="ChatTime">10:46</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="ChatMessage">
                    <div className="MessageBox">
                        <button type="button" className="MessageBoxBtn txt-13Gy9" onClick={() => {setMessageToggle(!MessageToggle)}}> 
                            전체{" "}
                            <span className={`${MessageToggle ? "downArrow" : "downArrow up"}`}></span>
                        </button>
                            {MessageToggle && 
                                <div className="Message-toggle txt-13Gy7">
                                    <button type="button">주변</button>
                                    <button type="button">전체</button>
                                </div>
                            }
                        <textarea type="text" className="messageInput txt-13Gy3" rows="1"/>
                        <button type="submit" 
                        className={`${Btn01 ? "Enteroff32" : "Enteron32"}`}
                        onClick={() => {setBtn01(!Btn01)}} />
                    </div>
                </div>
            </div>
        }
        {/* 가로 채팅입력창 */}
        {Btn01&&
                <div className="ChatMessage_con">
                    <div className="layer">
                        <div className="ChatMessage">
                            <div className="MessageBox">
                                <button type="button" className="MessageBoxBtn txt-13Gy9" onClick={() => {setMessageToggle(!MessageToggle)}}> 
                                    전체{" "}
                                    <span className={`${MessageToggle ? "downArrow" : "downArrow up"}`}></span>
                                </button>
                                    {MessageToggle && 
                                        <div className="Message-toggle txt-13Gy7">
                                            <button type="button">주변</button>
                                            <button type="button">전체</button>
                                        </div>
                                    }
                                <textarea type="text" className="messageInput txt-13Gy3" rows="1"/>
                                <button type="submit" 
                                className={`${Btn02 ? "EnterOff20" : "EnterOn20"}`}
                                onClick={() => {setBtn02(!Btn02)}} />
                            </div>
                        </div>
                </div>
            </div>
        }
    </>
    )
}
export default Chatting;