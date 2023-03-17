import { useEffect, useRef, useState } from "react";
import LtTopBar from './LtTopBar'; 
import RtBar from './RtBar'; 
import BtBar from './BtBar';
import Popups from "./Popups";
import UnKnowBtn from "./UnKnowBtn";


const MainPage = () => {
  const unityRef = useRef();

  // 페이지 리사이즈, 스크롤 대응 state 업데이트 목적
  const [changeHeight, setChangeHeight] = useState(0);
  const [changeScrollTop, setScrollTop] = useState(0);
  const handleResize = () => {
    setChangeHeight(document.documentElement.scrollHeight);
    setScrollTop(document.documentElement.clientHeight - document.documentElement.scrollHeight + document.documentElement.scrollTop);
  }

  // 유니티 캔버스 높이 가져오기
  const [unityHeight, setUnityHeight] = useState(0);

  useEffect(() => {
    if(unityRef.current) {
      setUnityHeight(unityRef.current.clientHeight);
    }
    
  }, [unityRef, changeHeight, changeScrollTop]);  

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleResize);

    return () => {

      // unmount 이벤트 리스너 제거
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleResize);
    }
  }, []);

  const [popName, setPopName] = useState();

  return (
    <div id="unity_container">
      {/* 유니티 WebGL 캔버스 영역 */}
      <canvas id="react-unity-webgl-canvas"
        // ref={unityRef} 
        style={{ 
          position: 'fixed',
          color: '#fff',
          width: '100vw', 
          height: '100vh',
        }}
      />
      <div className="wrap">
        <LtTopBar popName={popName} setPopName={setPopName} />
        <RtBar popName={popName} setPopName={setPopName} />
        <BtBar popName={popName} setPopName={setPopName} />
        <Popups popName={popName} setPopName={setPopName} />
        <UnKnowBtn popName={popName} setPopName={setPopName} />
        {/* <div className="pad-guide">
          <div class="moving-pad left">
            <span class="handler"></span>
          </div>
          <div class="moving-pad right">
            <span class="handler"></span>
          </div>
        </div>
        <div className="pad-guide-center">
          <div class="moving-pad center">
            <span class="handler"></span>
          </div>
        </div> */}
      </div> 
    </div>
  )
}

export default MainPage;
