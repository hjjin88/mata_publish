import {useState} from "react";
import PopFooter from "../PopFooter";

const LectureRoom00 = ({popName, setPopName }) => {

    const [View, setView] = useState(false); 

    return (
        <>
            <div className="layer" />
            <div className="lecture-room layer-center layer-none-height">
                <button type="button" className="subclose close16" onClick={(e) => {setPopName();}} />
                <div className="layer-wrap">
                    <div className="layer-head">투표 목록</div>
                    <div className="layer-body">
                        <div className="poll-list">
                            <table className="table-list">
                                <colgroup>
                                    <col/>
                                    <col style={{width: '33.3334%'}}/>
                                    <col style={{width: '33.3334%'}}/>
                                </colgroup>
                                <thead>
                                <tr>
                                    <th>제목</th>
                                    <th>진행현황</th>
                                    <th></th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>제목 최대 30글자에요.</td>
                                    <td>진행중</td>
                                    <td><button type="button" className="button button-outline button-sm">상세</button></td>
                                </tr>
                                <tr>
                                    <td>제목 최대 30글자에요.</td>
                                    <td><del>종료</del></td>
                                    <td><button type="button" className="button button-outline button-sm">상세</button></td>
                                </tr>
                                <tr>
                                    <td>제목 최대 30글자에요.</td>
                                    <td><del>종료</del></td>
                                    <td><button type="button" className="button button-outline button-sm">상세</button></td>
                                </tr>
                                <tr>
                                    <td>제목 최대 30글자에요.</td>
                                    <td><del>종료</del></td>
                                    <td><button type="button" className="button button-outline button-sm">상세</button></td>
                                </tr>
                                <tr>
                                    <td>제목 최대 30글자에요.</td>
                                    <td><del>종료</del></td>
                                    <td><button type="button" className="button button-outline button-sm">상세</button></td>
                                </tr>
                                <tr>
                                    <td>제목 최대 30글자에요.</td>
                                    <td><del>종료</del></td>
                                    <td><button type="button" className="button button-outline button-sm">상세</button></td>
                                </tr>
                                <tr>
                                    <td>제목 최대 30글자에요.</td>
                                    <td><del>종료</del></td>
                                    <td><button type="button" className="button button-outline button-sm">상세</button></td>
                                </tr>
                                <tr>
                                    <td>제목 최대 30글자에요.</td>
                                    <td><del>종료</del></td>
                                    <td><button type="button" className="button button-outline button-sm">상세</button></td>
                                </tr>
                                <tr>
                                    <td>제목 최대 30글자에요.</td>
                                    <td><del>종료</del></td>
                                    <td><button type="button" className="button button-outline button-sm">상세</button></td>
                                </tr>
                                <tr>
                                    <td>제목 최대 30글자에요.</td>
                                    <td><del>종료</del></td>
                                    <td><button type="button" className="button button-outline button-sm">상세</button></td>
                                </tr>
                                <tr>
                                    <td>제목 최대 30글자에요.</td>
                                    <td><del>종료</del></td>
                                    <td><button type="button" className="button button-outline button-sm">상세</button></td>
                                </tr>
                                <tr>
                                    <td>제목 최대 30글자에요.</td>
                                    <td><del>종료</del></td>
                                    <td><button type="button" className="button button-outline button-sm">상세</button></td>
                                </tr>
                                <tr>
                                    <td>제목 최대 30글자에요.</td>
                                    <td><del>종료</del></td>
                                    <td><button type="button" className="button button-outline button-sm">상세</button></td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="layer-footer">
                        <button type="button" 
                        className={`sec-btn-L${View ? "on02" : "off02"} tit-20Gy3`}
                        onClick={() => {setView(!View)}} 
                        >새투표</button>
                    </div>
                </div>
                <PopFooter popName={popName} setPopName={setPopName} />
            </div>
        </>
    )
}
export default LectureRoom00;