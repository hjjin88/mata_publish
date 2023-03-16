import Quest from "./Quest";
import Pop_ty01 from "./Pop_ty01";
import Pop_ty02 from "./Pop_ty02";
import NpcMessage from "./NpcMessage";
import EventMessage from "./EventMessage";
import QuestIcon from "./QuestIcon";


const Popups = ({ popName, setPopName }) => {
    return (
        <>
        { popName === 'Quest' && (
          <Quest setPopName={setPopName} />
        )}
        { popName === 'Pop_ty01' && (
          <Pop_ty01 setPopName={setPopName} />
        )}
        { popName === 'Pop_ty02' && (
          <Pop_ty02 setPopName={setPopName} />
        )}
        { popName === 'NpcMessage' && (
          <NpcMessage setPopName={setPopName} />
        )}
        { popName === 'EventMessage' && (
          <EventMessage setPopName={setPopName} />
        )}
        { popName === 'QuestIcon' && (
          <QuestIcon setPopName={setPopName} />
        )}
        </>
    )
}

export default Popups;