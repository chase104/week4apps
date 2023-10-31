import { createContext, useState } from 'react';

export const primaryContext = createContext();


const PrimaryProvider = ({children}) => {

    // state
    const [camps, setCamps] = useState([]);
    const [states, setStates] = useState([]);

    console.log(states);
    // return provider div
    return (
        <primaryContext.Provider value={{
            camps, 
            setCamps,

            states, 
            setStates
        }}   >
            {children}
        </primaryContext.Provider>
    )
}

export default PrimaryProvider;