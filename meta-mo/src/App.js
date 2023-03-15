import { Route, Routes } from "react-router-dom";
import './styles/common.scss';
import './styles/contents-mo.scss';
import './styles/lectureRoom-mo.scss';
import MainPage from "./pages/MainPage";
import MyRoom from "./pages/MyRoom";
import CounselingwaitingRoom from "./pages/CounselingwaitingRoom";
import SpaceSet from "./pages/SpaceSet";
import MainPage02 from "./pages/MainPage02";
import MainPageLength from "./pages/MainPageLength";
import MainPageWidth from "./pages/MainPageWidth";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/MyRoom" element={<MyRoom />} />
      <Route path="/CounselingwaitingRoom" element={<CounselingwaitingRoom />} />
      <Route path="/SpaceSet" element={<SpaceSet />} />
      <Route path="/MainPage02" element={<MainPage02 />} />
      {/* 모바일 */}
      <Route path="/MainPageLength" element={<MainPageLength />} />
      <Route path="/MainPageWidth" element={<MainPageWidth />} />
      {/* ETC */}
      <Route path="/" element={<MainPage />} />
    </Routes>
  );
}

export default App;