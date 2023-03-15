
import { useEffect, useState } from "react";

const Tour = ({setPopName }) => {

    return (
        <>
        <div className="Tour">
            캠퍼스 투어 진행중
            <button type="button" className="close12" onClick={ e => { setPopName(); }} />
        </div>
        </>
    )
}
export default Tour;
