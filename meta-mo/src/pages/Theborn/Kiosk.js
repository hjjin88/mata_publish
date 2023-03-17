import { useEffect, useState } from "react";

const Kiosk = ({setPopName }) => {

    return (
        <>
        <div className="Pop">
            <div className="Pop-ty03">
                <button type="button" className="subclose close16" onClick={(e) => {setPopName();}}/>
                <div className="subTit">한신포자 키오스크</div>
                <div className="kiosk-con">
                    <div className="kiosk">
                        <div className="kiosk-tit">안주 메뉴</div>
                        <div className="kiosk-list">
                            <button type="button" className="kiosk-list-item">
                                <img src="/resources/img/hspc_menu_img.png" alt="한신포차 메뉴 이미지" />
                                <p>한신 무뼈 닭발</p>
                            </button>
                            <button type="button" className="kiosk-list-item">
                                <img src="/resources/img/hspc_menu_img.png" alt="한신포차 메뉴 이미지" />
                                <p>한신 무뼈 닭발</p>
                            </button>
                            <button type="button" className="kiosk-list-item">
                                <img src="/resources/img/hspc_menu_img.png" alt="한신포차 메뉴 이미지" />
                                <p>한신 무뼈 닭발</p>
                            </button>
                            <button type="button" className="kiosk-list-item">
                                <img src="/resources/img/hspc_menu_img.png" alt="한신포차 메뉴 이미지" />
                                <p>한신 무뼈 닭발</p>
                            </button>
                            <button type="button" className="kiosk-list-item">
                                <img src="/resources/img/hspc_menu_img.png" alt="한신포차 메뉴 이미지" />
                                <p>한신 무뼈 닭발</p>
                            </button>
                            <button type="button" className="kiosk-list-item">
                                <img src="/resources/img/hspc_menu_img.png" alt="한신포차 메뉴 이미지" />
                                <p>한신 무뼈 닭발</p>
                            </button>
                        </div>
                        <div className="center">
                            <button type="button" className="Pop-btn-02-red">주문하기</button>
                            <div className="bar"/>
                        </div>
                    </div>
                    <div className="hspc_kiosk_banner">
                        <img src="/resources/img/hspc_kiosk_banner_mo.svg" alt="한신포차 배너 이미지" />
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default Kiosk;
