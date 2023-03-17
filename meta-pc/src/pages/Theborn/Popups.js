import Quest from "./Quest";
import Pop_ty01 from "./Pop_ty01";
import Pop_ty02 from "./Pop_ty02";
import Kiosk from "./Pop_ty02";

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
        { popName === 'Kiosk' && (
          <Kiosk setPopName={setPopName} />
        )}
        </>
    )
}

export default Popups;