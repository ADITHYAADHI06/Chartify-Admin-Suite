
import { click } from "@syncfusion/ej2-react-grids";
import { useContext, createContext, useState } from "react"

let stateContext = createContext();

const initialState = {
    chat: false,
    cart: false,
    userProfile: false,
    notification: false,
};


export const StateContextProvider = ({ children }) => {
    const [ActiveMenu, setActiveMenu] = useState(true);
    const [screenSize, setscreenSize] = useState(undefined);

    console.log(screenSize);

    const [isClicked, setIsClicked] = useState(initialState)

    const handleClick = (clicked) => {
        const updatedState = { ...isClicked };

        if (updatedState[clicked]) {
            updatedState[clicked] = false;
        } else {
            for (let key in updatedState) {
                updatedState[key] = key === clicked;
            }
        }

        setIsClicked(updatedState);
    }

    return <stateContext.Provider value={{ ActiveMenu, setActiveMenu, isClicked, handleClick, screenSize, setscreenSize }}>
        {children}
    </stateContext.Provider >
}


export const UseStateContext = () => { return useContext(stateContext); }

