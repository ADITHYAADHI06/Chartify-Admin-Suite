
import { useContext, createContext } from "react"

let stateContext = createContext();

const initialState = {
    cartState: false,
    notificationState: false,
}

export const StateContextProvider = ({ children }) => {
    const [ActiveMenu, setActiveMenu] = useState(true)

    return <stateContext.Provider value={{ ActiveMenu: ActiveMenu }}>
        {children}
    </stateContext.Provider >
}


export const UseStateContext = () => { return useContext(stateContext); }

