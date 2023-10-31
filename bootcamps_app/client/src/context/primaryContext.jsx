import { createContext, useState } from 'react';

export const primaryContext = createContext();


const PrimaryProvider = ({children}) => {

    // state
    const [camps, setCamps] = useState([]);
    const [states, setStates] = useState([]);
    const [campToEdit, setCampToEdit] = useState(null);

    console.log(states);
    // return provider div
    return (
        <primaryContext.Provider value={{
            camps, 
            setCamps,

            states, 
            setStates,

            campToEdit, 
            setCampToEdit
        }}   >
            {children}
        </primaryContext.Provider>
    )
}

export default PrimaryProvider;