import { Route, Routes } from "react-router-dom";
import './styles/component.scss';
import MainPage from "./pages/MainPage";
import MyRoom from "./pages/MyRoom";
import CounselingwaitingRoom from "./pages/CounselingwaitingRoom";
import SpaceSet from "./pages/SpaceSet";
import MainPage02 from "./pages/MainPage02";
import Tb_MainPage from "./pages/Tb_MainPage";


// import Home from "./Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/MyRoom" element={<MyRoom />} />
      <Route path="/CounselingwaitingRoom" element={<CounselingwaitingRoom />} />
      <Route path="/SpaceSet" element={<SpaceSet />} />
      <Route path="/MainPage02" element={<MainPage02 />} />
      {/* 더본 코리아*/}
      <Route path="/Tb_MainPage" element={<Tb_MainPage/>} />
      {/* <Route path="/Home" element={<Home />} /> */}

      {/* ETC */}
      <Route path="/" element={<MainPage />} />

    </Routes>
  );
}

export default App;