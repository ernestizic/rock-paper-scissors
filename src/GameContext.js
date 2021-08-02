import React, { createContext, useState } from 'react';

export const GameContext = createContext();

const GameContextProvider = (props) => {
    const [score, setScore] = useState(0)
    const [userSelection, setUserSelection] = useState(null)
    const [compSelection, setCompSelection] = useState(null)

    const rock =()=> {
        setUserSelection('rock')
    }
    const paper =()=> {
        setUserSelection('paper')
    }
    const scissors =()=> {
        setUserSelection('scissors')
    }
    return ( 
        <GameContext.Provider value={{score, rock, paper, scissors}}>
            {props.children}
        </GameContext.Provider>
     );
}
 
export default GameContextProvider;