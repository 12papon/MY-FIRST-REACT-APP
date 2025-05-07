import React, { createContext } from "react";
import { useState } from "react";

export const ContextOne = createContext();


export const ContextProvider = ({children})=>{
    const [text, setText] = useState("Hallo World My name is papon my wife name is Shornaly");
    const [number, setNumber] = useState('my name is papon');
    return(
        <div>
            <ContextOne.Provider value={[text, setText, number, setNumber]}>
                {children}
            </ContextOne.Provider>
        </div>
    )
}