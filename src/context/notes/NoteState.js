import React from "react";
import noteContext from "./NoteContext";

const NoteState = (props)=>{
    return(
        <noteContext.Provider value={{}}>
            {props.children}
        </noteContext.Provider>
    )
}

export default NoteState;