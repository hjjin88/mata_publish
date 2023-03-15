import Menu from "./Menu";
import Map from "./Map";
import Chatting from "./Chatting";
import Around from "./Around";
import AroundAll from "./AroundAll";
import MyProfileView from "./MyProfileView";
import ProfileView from "./ProfileView";
import Emoji from "./Emoji";
import EmojiAll from "./EmojiAll";
import More from "./More";
import MyProfile from "./MyProfile";
import MyFriend from "./MyFriend";
import Follow from "./Follow";
import Message from "./Message";
import MessageInner from "./MessageInner";
import MyActivity from "./MyActivity";
import MySetting from "./MySetting";

import Alarm01 from "./Alarm01";
import Alarm02 from "./Alarm02";
import Alarm03 from "./Alarm03";
import Copypop from "./Copypop";
// import Copypop02 from "./Copypop02";
import Tutorial from "./Tutorial";
import Announcement from "./Announcement";
import Announcement02 from "./Announcement02";
import Tour from "./Tour";
import Voters from "./Voters";
import VotersProfileView from "./VotersProfileView";
import TourParticipant from "./TourParticipant";
import Invite from "./Invite";
import TourEnd from "./TourEnd";
import NpcTourStart from "./NpcTourStart";
import NpcTourEnd from "./NpcTourEnd";
import NpcInstl from "./NpcInstl";
import NpcInstlGuide from "./NpcInstlGuide";
import NpcDelete from "./NpcDelete";
import NpcDeletePop from "./NpcDeletePop";
import ConsProduce from "./ConsProduce";
// import ConsProduce02 from "./ConsProduce02";
import ConsProduce03 from "./ConsProduce03";
import ConsEntrance from "./ConsEntrance";
import ConsEntrance02 from "./ConsEntrance02";
import ConsEntrance03 from "./ConsEntrance03";
// 내담자 모드 상담실 입장-시간초과 후 발생 페이지
import ConsEntrance04 from "./ConsEntrance04";
import ConsEnd from "./ConsEnd";
import ConsRequestAlarm from "./ConsRequestAlarm";
import ClientList from "./ClientList";
import ClientListAll from "./ClientListAll";
import PrivateScreen from "./PrivateScreen";
import ScreenShareAlarm from "./ScreenShareAlarm";
import ScreenShare from "./ScreenShare";
import MicCamSet from "./MicCamSet";
import StudyStatus from "./StudyStatus";
import ProfileDrawer from "./ProfileDrawer";
import CamFloat from "./CamFloat";
import BGM from "./BGM";
import StudyRanking from "./StudyRanking";
import Memo from "./Memo";
import CamView from "./CamView";
import HostPass from "./HostPass";
import Connect from "./Connect";
import CheongjuConnect from "./CheongjuConnect";
import UsersList from "./UsersList";


import Study_Screen from "./Study_Screen";
import Study_Share from "./Study_Share";
import Library_Screen from "./Library_Screen";
import MemReg from "./MemReg";
import RegEmail from "./RegEmail";
import Closet from "./Closet";
import Makeup from "./Makeup";
import CampusSelect from "./CampusSelect";
import StudentCertified from "./StudentCertified";
import StudentCertified02 from "./StudentCertified02";
import Account from "./Account";
import AccountAlarm from "./AccountAlarm";
import ConsRequestAlarm02 from "./ConsRequestAlarm02";



import Promotion01 from "./Promotion/Promotion01";
import Promotion02 from "./Promotion/Promotion02";
import Promotion03 from "./Promotion/Promotion03";
import Promotion04 from "./Promotion/Promotion04";
import Promotion05 from "./Promotion/Promotion05";
import Promotion06 from "./Promotion/Promotion06";
import Promotion07 from "./Promotion/Promotion07";
import Promotion08 from "./Promotion/Promotion08";
import Promotion09 from "./Promotion/Promotion09";



import More01 from "./Morepop/More01";
import More02 from "./Morepop/More02";
import More03 from "./Morepop/More03";
import More04 from "./Morepop/More04";
import More05 from "./Morepop/More05";
import More06 from "./Morepop/More06";
import More07 from "./Morepop/More07";
import More08 from "./Morepop/More08";
import More09 from "./Morepop/More09";
import More10 from "./Morepop/More10";
import More11 from "./Morepop/More11";
import More12 from "./Morepop/More12";
import More13 from "./Morepop/More13";
import More14 from "./Morepop/More14";

import LectureRoom00 from "./LectureRoom/LectureRoom00";
import LectureRoom01 from "./LectureRoom/LectureRoom01";
import LectureRoom02 from "./LectureRoom/LectureRoom02";
import LectureRoom02_01 from "./LectureRoom/LectureRoom02_01";
import LectureRoom02_02 from "./LectureRoom/LectureRoom02_02";
import LectureRoom03 from "./LectureRoom/LectureRoom03";
// import LectureRoom04 from "./LectureRoom/LectureRoom04";
import LectureRoom05 from "./LectureRoom/LectureRoom05";
import LectureRoom06 from "./LectureRoom/LectureRoom06";
import LectureRoom07 from "./LectureRoom/LectureRoom07";
import LectureRoom08 from "./LectureRoom/LectureRoom08";
import LectureRoom09 from "./LectureRoom/LectureRoom09";
import LectureRoom10 from "./LectureRoom/LectureRoom10";
import LectureRoom11 from "./LectureRoom/LectureRoom11";
import LectureRoom12 from "./LectureRoom/LectureRoom12";
import LectureRoom13 from "./LectureRoom/LectureRoom13";
import LectureRoom14 from "./LectureRoom/LectureRoom14";
import LectureRoom15 from "./LectureRoom/LectureRoom15";
import LectureRoom16 from "./LectureRoom/LectureRoom16";
import LectureRoom17 from "./LectureRoom/LectureRoom17";
import LectureRoom18 from "./LectureRoom/LectureRoom18";
import LectureRoom19 from "./LectureRoom/LectureRoom19";
import LectureRoom20 from "./LectureRoom/LectureRoom20";
import LectureRoom21 from "./LectureRoom/LectureRoom21";
import LectureRoom22 from "./LectureRoom/LectureRoom22";
import LectureRoom23 from "./LectureRoom/LectureRoom23";
import LectureRoom24 from "./LectureRoom/LectureRoom24";
import LectureRoom25 from "./LectureRoom/LectureRoom25";
import LectureRoom26 from "./LectureRoom/LectureRoom26";
import LectureRoom27 from "./LectureRoom/LectureRoom27";

// 더본코리아


const Popups = ({ popName, setPopName }) => {
    return (
        <>
        {/* 더본코리아 */}


        {/* LtTopBar */}
        { popName === 'Menu' && (
          <Menu setPopName={setPopName} />
        )}
        { popName === 'Map' && (
          <Map setPopName={setPopName} />
        )}
        {/* BtBar */}
        { popName === 'Chatting' && (
          <Chatting setPopName={setPopName} />
        )}
        { popName === 'Around' && (
          <Around setPopName={setPopName} />
        )}
        { popName === 'AroundAll' && (
          <AroundAll setPopName={setPopName} />
        )}
        { popName === 'MyProfileView' && (
          <MyProfileView setPopName={setPopName} />
        )}
        { popName === 'ProfileView' && (
          <ProfileView setPopName={setPopName} />
        )}
        { popName === 'Emoji' && (
          <Emoji setPopName={setPopName} />
        )}
        { popName === 'EmojiAll' && (
          <EmojiAll setPopName={setPopName} />
        )}
        { popName === 'More' && (
          <More setPopName={setPopName} />
        )}
        {/* RtBar */}
        { popName === 'MyProfile' && (
          <MyProfile setPopName={setPopName} />
        )}


        {/* 마이프로필 하단 버튼 */}
        { popName === 'MyFriend' && (
          <MyFriend setPopName={setPopName} />
        )}
        { popName === 'Follow' && (
          <Follow setPopName={setPopName} />
        )}
        { popName === 'Message' && (
          <Message setPopName={setPopName} />
        )}
        {/* 메세지 읽음 클릭 팝업 */}
        { popName === 'MessageInner' && (
          <MessageInner setPopName={setPopName} />
        )}

        { popName === 'MyActivity' && (
          <MyActivity setPopName={setPopName} />
        )}
        { popName === 'MySetting' && (
          <MySetting setPopName={setPopName} />
        )}

        {/* 알림창 */}
        { popName === 'Alarm01' && (
          <Alarm01 setPopName={setPopName} />
        )}
        { popName === 'Alarm02' && (
          <Alarm02 setPopName={setPopName} />
        )}
        { popName === 'Alarm03' && (
          <Alarm03 setPopName={setPopName} />
        )}
        { popName === 'Copypop' && (
          <Copypop setPopName={setPopName} />
        )}
        {/* { popName === 'Copypop02' && (
          <Copypop02 setPopName={setPopName} />
        )} */}
        { popName === 'Tutorial' && (
          <Tutorial setPopName={setPopName} />
        )}
        { popName === 'Announcement' && (
          <Announcement setPopName={setPopName} />
        )}
        { popName === 'Announcement02' && (
          <Announcement02 setPopName={setPopName} />
        )}
        { popName === 'Tour' && (
          <Tour setPopName={setPopName} />
        )}
        { popName === 'Voters' && (
          <Voters setPopName={setPopName} />
        )}
        { popName === 'VotersProfileView' && (
          <VotersProfileView setPopName={setPopName} />
        )}
        { popName === 'TourParticipant' && (
          <TourParticipant setPopName={setPopName} />
        )}
        { popName === 'Invite' && (
          <Invite setPopName={setPopName} />
        )}
        { popName === 'TourEnd' && (
          <TourEnd setPopName={setPopName} />
        )}
        { popName === 'NpcTourStart' && (
          <NpcTourStart setPopName={setPopName} />
        )}
        { popName === 'NpcTourEnd' && (
          <NpcTourEnd setPopName={setPopName} />
        )}
        { popName === 'NpcInstl' && (
          <NpcInstl setPopName={setPopName} />
        )}
        { popName === 'NpcInstlGuide' && (
          <NpcInstlGuide setPopName={setPopName} />
        )}
        { popName === 'NpcDelete' && (
          <NpcDelete setPopName={setPopName} />
        )}
        { popName === 'NpcDeletePop' && (
          <NpcDeletePop setPopName={setPopName} />
        )}
        { popName === 'ConsProduce' && (
          <ConsProduce setPopName={setPopName} />
        )}
        {/* { popName === 'ConsProduce02' && (
          <ConsProduce02 setPopName={setPopName} />
        )} */}
        { popName === 'ConsProduce03' && (
          <ConsProduce03 setPopName={setPopName} />
        )}
        { popName === 'ConsEntrance' && (
          <ConsEntrance setPopName={setPopName} />
        )}
        { popName === 'ConsEntrance02' && (
          <ConsEntrance02 setPopName={setPopName} />
        )}
        { popName === 'ConsEntrance03' && (
          <ConsEntrance03 setPopName={setPopName} />
        )}
        { popName === 'ConsEntrance04' && (
          <ConsEntrance04 setPopName={setPopName} />
        )}
        { popName === 'ConsEnd' && (
          <ConsEnd setPopName={setPopName} />
        )}
        { popName === 'ConsRequestAlarm' && (
          <ConsRequestAlarm setPopName={setPopName} />
        )}
        { popName === 'ClientList' && (
          <ClientList setPopName={setPopName} />
        )}
        { popName === 'ClientListAll' && (
          <ClientListAll setPopName={setPopName} />
        )}
        { popName === 'PrivateScreen' && (
          <PrivateScreen setPopName={setPopName} />
        )}
        { popName === 'ScreenShareAlarm' && (
          <ScreenShareAlarm setPopName={setPopName} />
        )}
        { popName === 'ScreenShare' && (
          <ScreenShare setPopName={setPopName} />
        )}
        { popName === 'MicCamSet' && (
          <MicCamSet setPopName={setPopName} />
        )}
        { popName === 'StudyStatus' && (
          <StudyStatus setPopName={setPopName} />
        )}
        { popName === 'ProfileDrawer' && (
          <ProfileDrawer setPopName={setPopName} />
        )}
        { popName === 'CamFloat' && (
          <CamFloat setPopName={setPopName} />
        )}
        { popName === 'BGM' && (
          <BGM setPopName={setPopName} />
        )}
        { popName === 'StudyRanking' && (
          <StudyRanking setPopName={setPopName} />
        )}
        { popName === 'Memo' && (
          <Memo setPopName={setPopName} />
        )}
        { popName === 'CamView' && (
          <CamView setPopName={setPopName} />
        )}
        { popName === 'HostPass' && (
          <HostPass setPopName={setPopName} />
        )}
        { popName === 'Connect' && (
          <Connect setPopName={setPopName} />
        )}
        { popName === 'CheongjuConnect' && (
          <CheongjuConnect setPopName={setPopName} />
        )}

        { popName === 'Study_Screen' && (
          <Study_Screen setPopName={setPopName} />
        )}
        { popName === 'Study_Share' && (
          <Study_Share setPopName={setPopName} />
        )}
        { popName === 'Library_Screen' && (
          <Library_Screen setPopName={setPopName} />
        )}

        { popName === 'MemReg' && (
          <MemReg setPopName={setPopName} />
        )}
        { popName === 'RegEmail' && (
          <RegEmail setPopName={setPopName} />
        )}
        { popName === 'Closet' && (
          <Closet setPopName={setPopName} />
        )}
        { popName === 'Makeup' && (
          <Makeup setPopName={setPopName} />
        )}
        { popName === 'CampusSelect' && (
          <CampusSelect setPopName={setPopName} />
        )}
        { popName === 'StudentCertified' && (
          <StudentCertified setPopName={setPopName} />
        )}
        { popName === 'StudentCertified02' && (
          <StudentCertified02 setPopName={setPopName} />
        )}
        { popName === 'Account' && (
          <Account setPopName={setPopName} />
        )}
        { popName === 'AccountAlarm' && (
          <AccountAlarm setPopName={setPopName} />
        )}
        { popName === 'ConsRequestAlarm02' && (
          <ConsRequestAlarm02 setPopName={setPopName} />
        )}
        { popName === 'UsersList' && (
          <UsersList setPopName={setPopName} />
        )}


        { popName === 'Promotion01' && (
          <Promotion01 setPopName={setPopName} />
        )}
        { popName === 'Promotion02' && (
          <Promotion02 setPopName={setPopName} />
        )}
        { popName === 'Promotion03' && (
          <Promotion03 setPopName={setPopName} />
        )}
        { popName === 'Promotion04' && (
          <Promotion04 setPopName={setPopName} />
        )}
        { popName === 'Promotion05' && (
          <Promotion05 setPopName={setPopName} />
        )}
        { popName === 'Promotion06' && (
          <Promotion06 setPopName={setPopName} />
        )}
        { popName === 'Promotion07' && (
          <Promotion07 setPopName={setPopName} />
        )}
        { popName === 'Promotion08' && (
          <Promotion08 setPopName={setPopName} />
        )}
        { popName === 'Promotion09' && (
          <Promotion09 setPopName={setPopName} />
        )}


        {/* 더보기 창  */}
        { popName === 'More01' && (
          <More01 setPopName={setPopName} />
        )}
        { popName === 'More02' && (
          <More02 setPopName={setPopName} />
        )}
        { popName === 'More03' && (
          <More03 setPopName={setPopName} />
        )}
        { popName === 'More04' && (
          <More04 setPopName={setPopName} />
        )}
        { popName === 'More05' && (
          <More05 setPopName={setPopName} />
        )}
        { popName === 'More06' && (
          <More06 setPopName={setPopName} />
        )}
        { popName === 'More07' && (
          <More07 setPopName={setPopName} />
        )}
        { popName === 'More08' && (
          <More08 setPopName={setPopName} />
        )}
        { popName === 'More09' && (
          <More09 setPopName={setPopName} />
        )}
        { popName === 'More10' && (
          <More10 setPopName={setPopName} />
        )}
        { popName === 'More11' && (
          <More11 setPopName={setPopName} />
        )}
        { popName === 'More12' && (
          <More12 setPopName={setPopName} />
        )}
        { popName === 'More13' && (
          <More13 setPopName={setPopName} />
        )}
        { popName === 'More14' && (
          <More14 setPopName={setPopName} />
        )}
        { popName === 'LectureRoom00' && (
          <LectureRoom00 setPopName={setPopName} />
        )}
        { popName === 'LectureRoom01' && (
            <LectureRoom01 setPopName={setPopName} />
        )}
        { popName === 'LectureRoom02' && (
            <LectureRoom02 setPopName={setPopName} />
        )}
        { popName === 'LectureRoom02_01' && (
            <LectureRoom02_01 setPopName={setPopName} />
        )}
        { popName === 'LectureRoom02_02' && (
            <LectureRoom02_02 setPopName={setPopName} />
        )}
        { popName === 'LectureRoom03' && (
            <LectureRoom03 setPopName={setPopName} />
        )}
        {/* { popName === 'LectureRoom04' && (
            <LectureRoom04 setPopName={setPopName} />
        )} */}
        { popName === 'LectureRoom05' && (
            <LectureRoom05 setPopName={setPopName} />
        )}
        { popName === 'LectureRoom06' && (
            <LectureRoom06 setPopName={setPopName} />
        )}
        { popName === 'LectureRoom06' && (
            <LectureRoom06 setPopName={setPopName} />
        )}
        { popName === 'LectureRoom07' && (
            <LectureRoom07 setPopName={setPopName} />
        )}
        { popName === 'LectureRoom08' && (
            <LectureRoom08 setPopName={setPopName} />
        )}
        { popName === 'LectureRoom09' && (
            <LectureRoom09 setPopName={setPopName} />
        )}
        { popName === 'LectureRoom10' && (
            <LectureRoom10 setPopName={setPopName} />
        )}
        { popName === 'LectureRoom11' && (
            <LectureRoom11 setPopName={setPopName} />
        )}
        { popName === 'LectureRoom12' && (
            <LectureRoom12 setPopName={setPopName} />
        )}
        { popName === 'LectureRoom13' && (
            <LectureRoom13 setPopName={setPopName} />
        )}
        { popName === 'LectureRoom14' && (
            <LectureRoom14 setPopName={setPopName} />
        )}
        { popName === 'LectureRoom15' && (
            <LectureRoom15 setPopName={setPopName} />
        )}
        { popName === 'LectureRoom16' && (
            <LectureRoom16 setPopName={setPopName} />
        )}
        { popName === 'LectureRoom17' && (
            <LectureRoom17 setPopName={setPopName} />
        )}
        { popName === 'LectureRoom18' && (
            <LectureRoom18 setPopName={setPopName} />
        )}
        { popName === 'LectureRoom19' && (
            <LectureRoom19 setPopName={setPopName} />
        )}
        { popName === 'LectureRoom20' && (
            <LectureRoom20 setPopName={setPopName} />
        )}
        { popName === 'LectureRoom21' && (
            <LectureRoom21 setPopName={setPopName} />
        )}
        { popName === 'LectureRoom22' && (
            <LectureRoom22 setPopName={setPopName} />
        )}
        { popName === 'LectureRoom23' && (
            <LectureRoom23 setPopName={setPopName} />
        )}
        { popName === 'LectureRoom24' && (
            <LectureRoom24 setPopName={setPopName} />
        )}
        { popName === 'LectureRoom25' && (
            <LectureRoom25 setPopName={setPopName} />
        )}
        { popName === 'LectureRoom26' && (
            <LectureRoom26 setPopName={setPopName} />
        )}
        { popName === 'LectureRoom27' && (
          <LectureRoom27 setPopName={setPopName} />
        )}
        </>
    )
}

export default Popups;