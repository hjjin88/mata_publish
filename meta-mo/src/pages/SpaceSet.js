import { useEffect, useState } from "react";
import PopFooter from "./PopFooter";

const SpaceSet = ({ popName, setPopName }) => {

    const [MikeToggle, setMikeToggle] = useState(false); 
    const [MikeOn, setMikeOn] = useState(false);
    const [CamOn, setCamOn] = useState(false);

    const [CamToggle, setCamToggle] = useState(false); 

    const [Toggle, setToggle] = useState(false); 
    return (
        <>
        <div className="SpaceSet CtPop">
            <button type="button" className="subclose close16" onClick={ e => { setPopName(); }}></button>
            <div className="subTit">스페이스 설정</div>
            <div className="con-wrap">
                <div className="con-inner-col">
                  <div className="SpaceSet_input">
                    <div className="input_con top">
                      <p className="tit">스페이스 URL</p> 
                      {/* <div className="input_box"> */}
                        <input className="input_box" type="text" placeholder="http://example.com/시스템 자동생성"/>
                        <button  type="button" className="copyGy17"/>
                      {/* </div> */}
                    </div>
                    <div className="input_con bottom">
                      <p className="tit">인증되지 않은 사용자 입장 허용</p> 
                        <button type="button" className="input_box" onClick={() => {setToggle(!Toggle)}}> 
                            ON{" "}
                            <span className={`downArrow ${Toggle ? "up" : null }`}></span>
                        </button>
                        {Toggle && 
                          <div className="Toggle">
                              <button type="button">ON</button>
                              <button type="button">OFF</button>
                          </div>
                        }
                    </div>
                  </div>
                  <div className="SpaceSet_lists">
                    <div className="top_list">
                      <div className="top_tit">
                        <p className="tit">화이트 리스트</p>
                        <button type="button">
                          <img src="/resources/img/manageGy16.svg" alt="관리 버튼 이미지"/>
                          관리
                          </button>
                      </div>
                      <div className="top_box">
                        <table className="table">
                          <thead>
                            <tr>
                              <th scope="col">닉네임</th>
                              <th scope="col">유저ID</th>
                              <th scope="col">요청메세지</th>
                              <th scope="col">상태</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>Jennie Park</td>
                              <td><div className="ellipsis54">CA761232-ED42-11CE-BACD-00AA0057B223</div></td>
                              <td><div className="ellipsis66">청강생입니다.입장좀요청강생입니다.입장좀요청강생입니다.입장좀요</div> </td>
                              <td>대기</td>
                            </tr>
                            <tr>
                              <td>Jennie Park</td>
                              <td><div className="ellipsis54">CA761232-ED42-11CE-BACD-00AA0057B223</div></td>
                              <td><div className="ellipsis66">청강생입니다.입장좀요청강생입니다.입장좀요청강생입니다.입장좀요청강생입니다.입장좀요</div> </td>
                              <td className="accept">수락</td>
                            </tr>
                            <tr>
                              <td>Jennie Park</td>
                              <td><div className="ellipsis54">CA761232-ED42-11CE-BACD-00AA0057B223</div></td>
                              <td><div className="ellipsis66">청강생입니다.입장좀요</div> </td>
                              <td>대기</td>
                            </tr>
                            <tr>
                              <td>Jennie Park</td>
                              <td><div className="ellipsis54">CA761232-ED42-11CE-BACD-00AA0057B223</div></td>
                              <td><div className="ellipsis66">청강생입니다.입장좀요</div> </td>
                              <td className="accept">수락</td>
                            </tr>
                            <tr>
                              <td>Jennie Park</td>
                              <td><div className="ellipsis54">CA761232-ED42-11CE-BACD-00AA0057B223</div></td>
                              <td><div className="ellipsis66">청강생입니다.입장좀요</div> </td>
                              <td className="accept">수락</td>
                            </tr>
                            <tr>
                              <td>Jennie Park</td>
                              <td><div className="ellipsis54">CA761232-ED42-11CE-BACD-00AA0057B223</div></td>
                              <td><div className="ellipsis66">청강생입니다.입장좀요</div> </td>
                              <td>대기</td>
                            </tr>
                            <tr>
                              <td>Jennie Park</td>
                              <td><div className="ellipsis54">CA761232-ED42-11CE-BACD-00AA0057B223</div></td>
                              <td><div className="ellipsis66">청강생입니다.입장좀요</div> </td>
                              <td>대기</td>
                            </tr>
                            <tr>
                              <td>Jennie Park</td>
                              <td><div className="ellipsis54">CA761232-ED42-11CE-BACD-00AA0057B223</div></td>
                              <td><div className="ellipsis66">청강생입니다.입장좀요</div> </td>
                              <td>대기</td>
                            </tr>
                            <tr>
                              <td>Jennie Park</td>
                              <td><div className="ellipsis54">CA761232-ED42-11CE-BACD-00AA0057B223</div></td>
                              <td><div className="ellipsis66">청강생입니다.입장좀요</div> </td>
                              <td>대기</td>
                            </tr>
                            <tr>
                              <td>Jennie Park</td>
                              <td><div className="ellipsis54">CA761232-ED42-11CE-BACD-00AA0057B223</div></td>
                              <td><div className="ellipsis66">청강생입니다.입장좀요</div> </td>
                              <td>대기</td>
                            </tr>
                            <tr>
                              <td>Jennie Park</td>
                              <td><div className="ellipsis54">CA761232-ED42-11CE-BACD-00AA0057B223</div></td>
                              <td><div className="ellipsis66">청강생입니다.입장좀요</div> </td>
                              <td>대기</td>
                            </tr>
                            <tr>
                              <td>Jennie Park</td>
                              <td><div className="ellipsis54">CA761232-ED42-11CE-BACD-00AA0057B223</div></td>
                              <td><div className="ellipsis66">청강생입니다.입장좀요</div> </td>
                              <td>대기</td>
                            </tr>
                            <tr>
                              <td>Jennie Park</td>
                              <td><div className="ellipsis54">CA761232-ED42-11CE-BACD-00AA0057B223</div></td>
                              <td><div className="ellipsis66">청강생입니다.입장좀요</div></td>
                              <td>대기</td>
                            </tr>
                            <tr>
                              <td>Jennie Park</td>
                              <td><div className="ellipsis54">CA761232-ED42-11CE-BACD-00AA0057B223</div></td>
                              <td><div className="ellipsis66">청강생입니다.입장좀요</div> </td>
                              <td>대기</td>
                            </tr>
                            <tr>
                              <td>Jennie Park</td>
                              <td><div className="ellipsis54">CA761232-ED42-11CE-BACD-00AA0057B223</div></td>
                              <td><div className="ellipsis66">청강생입니다.입장좀요</div> </td>
                              <td>대기</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                  <div className="SpaceSet_lists Bk pt30">
                      <div className="top_tit">
                        <p className="tit">블랙 리스트</p>
                        <button type="button">
                          <img src="/resources/img/manageGy16.svg" alt="관리 버튼 이미지"/>
                          관리
                          </button>
                        </div>
                      <div className="top_box">
                        <table className="table">
                          <thead>
                            <tr>
                              <th scope="col">닉네임</th>
                              <th scope="col">유저ID</th>
                              <th scope="col">IP주소</th>
                            </tr>
                          </thead>
                          <tbody className="tbody">
                            <tr>
                              <td>Jennie Park</td>
                              <td><div className="ellipsis54">CA761232-ED42-11CE-BACD-00AA0057B223</div></td>
                              <td><div className="ellipsis100">CA761232-ED42-11CE-BACD-00AA0057B223CA761232-ED42-11CE-BACD-00AA0057B223</div></td>
                            </tr>
                            <tr>
                              <td>Jennie Park</td>
                              <td><div className="ellipsis54">CA761232-ED42-11CE-BACD-00AA0057B223</div></td>
                              <td><div className="ellipsis100">CA761232-ED42-11CE-BACD-00AA0057B223CA761232-ED42-11CE-BACD-00AA0057B223</div></td>
                            </tr>
                            <tr>
                              <td>Jennie Park</td>
                              <td><div className="ellipsis54">CA761232-ED42-11CE-BACD-00AA0057B223</div></td>
                              <td><div className="ellipsis100">CA761232-ED42-11CE-BACD-00AA0057B223</div></td>
                            </tr>
                            <tr>
                              <td>Jennie Park</td>
                              <td><div className="ellipsis54">CA761232-ED42-11CE-BACD-00AA0057B223</div></td>
                              <td><div className="ellipsis100">CA761232-ED42-11CE-BACD-00AA0057B223</div></td>
                            </tr>
                            <tr>
                              <td>Jennie Park</td>
                              <td><div className="ellipsis54">CA761232-ED42-11CE-BACD-00AA0057B223</div></td>
                              <td><div className="ellipsis100">CA761232-ED42-11CE-BACD-00AA0057B223</div></td>
                            </tr>
                            <tr>
                              <td>Jennie Park</td>
                              <td><div className="ellipsis54">CA761232-ED42-11CE-BACD-00AA0057B223</div></td>
                              <td><div className="ellipsis100">vCA761232-ED42-11CE-BACD-00AA0057B223</div></td>
                            </tr>
                            <tr>
                              <td>Jennie Park</td>
                              <td><div className="ellipsis54">CA761232-ED42-11CE-BACD-00AA0057B223</div></td>
                              <td><div className="ellipsis100">CA761232-ED42-11CE-BACD-00AA0057B223</div></td>
                            </tr>
                            <tr>
                              <td>Jennie Park</td>
                              <td><div className="ellipsis54">CA761232-ED42-11CE-BACD-00AA0057B223</div></td>
                              <td><div className="ellipsis100">CA761232-ED42-11CE-BACD-00AA0057B223</div></td>
                            </tr>
                            <tr>
                              <td>Jennie Park</td>
                              <td>CA761232-ED42-11CE-BACD-00AA0057B223</td>
                              <td>청강생입니다.입장좀요</td>
                            </tr>
                            <tr>
                              <td>Jennie Park</td>
                              <td>CA761232-ED42-11CE-BACD-00AA0057B223</td>
                              <td>청강생입니다.입장좀요</td>
                            </tr>
                            <tr>
                              <td>Jennie Park</td>
                              <td>CA761232-ED42-11CE-BACD-00AA0057B223</td>
                              <td>청강생입니다.입장좀요</td>
                            </tr>
                            <tr>
                              <td>Jennie Park</td>
                              <td>CA761232-ED42-11CE-BACD-00AA0057B223</td>
                              <td>청강생입니다.입장좀요</td>
                            </tr>
                            <tr>
                              <td>Jennie Park</td>
                              <td>CA761232-ED42-11CE-BACD-00AA0057B223</td>
                              <td>청강생입니다.입장좀요</td>
                            </tr>
                            <tr>
                              <td>Jennie Park</td>
                              <td>CA761232-ED42-11CE-BACD-00AA0057B223</td>
                              <td>청강생입니다.입장좀요</td>
                            </tr>
                            <tr>
                              <td>Jennie Park</td>
                              <td>CA761232-ED42-11CE-BACD-00AA0057B223</td>
                              <td>청강생입니다.입장좀요</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                </div>
            </div>
            <PopFooter popName={popName} setPopName={setPopName} />
        </div>
        </>
    )
}
export default SpaceSet;
